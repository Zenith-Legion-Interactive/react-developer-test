import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/usersLists/Profile';

const UsersProfile = () => {
const [user, setUser] = useState()
const {id} = useParams()


useEffect(() => {
    const fetchAllUsers = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`,{
            headers: {'app-id': '65080fec01538513690ca63e'},
        })
        const json = await response.json()  
        if(response.ok){
          console.log('data', json)
           setUser(json)
        }
    }
    fetchAllUsers()
   
                 

}, [])



    return(

    <MDBContainer className='mt-5'>
       
        <MDBContainer className='pt-5'>
            <h3 className='mt-5'>
              This is the users Profile page
            </h3>

            <MDBContainer>
                <Profile data={user}/>
            </MDBContainer>
        </MDBContainer>
   
         
    </MDBContainer>
        ) 
}



export default UsersProfile;
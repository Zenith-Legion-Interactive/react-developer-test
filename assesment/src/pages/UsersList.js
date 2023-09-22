import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import { useState, useEffect } from 'react';
import UsersTable from '../components/usersLists/UsersTable';

const UsersList = () => {
const [allUsers, setAllUsers] = useState()



useEffect(() => {
    const fetchAllUsers = async () => {
        const response = await fetch('https://dummyapi.io/data/v1/user',{
            headers: {'app-id': '65080fec01538513690ca63e'},
        })
        const json = await response.json()  
        if(response.ok){
            setAllUsers(json.data)
           
        }
    }
    fetchAllUsers()
   
                 

}, [])



    return(

    <MDBContainer className='mt-5'>
       
        <MDBContainer className='pt-5'>
            <h3 className='mt-5'>
              This is the users list page
            </h3>
        </MDBContainer>
        <MDBContainer>
            <UsersTable data={allUsers} />
        </MDBContainer>
         
    </MDBContainer>
        ) 
}



export default UsersList;
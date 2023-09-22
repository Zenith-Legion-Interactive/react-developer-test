import { MDBContainer,MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import './usertable.css'
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
const UsersTable = ({data}) => { 
    return(

    <MDBContainer className='mt-5 mb-4 bg-secondary text-center mainForm'>
         
       <h3> All UsersList</h3>
       {data ? (<MDBContainer className='tableWrapper'>
        { data.map((users, index) => (  
            <MDBContainer key={index}>
            <div  style={{border:'5px solid black', borderRadius:'10px'}}>   
             <img  src={users.picture}  alt='...' />                    
                <p>{users.firstName} {users.lastName}</p>
                 </div> 
                 
                 <LinkContainer to={`/users/${users.id}`} className='mx-5 px-5 buttonLink'>
                <Link href="/users/profile" className='ms-2 text-light'>Profile</Link>
                    </LinkContainer>

                  </MDBContainer>
                ))}
        </MDBContainer>) : (<MDBSpinner role='status'>
                <span className='visually-hidden'>Loading...</span>
             </MDBSpinner>)}
    </MDBContainer>
        ) 
}



export default UsersTable;
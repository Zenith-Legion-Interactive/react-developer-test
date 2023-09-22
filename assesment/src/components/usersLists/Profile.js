import { MDBContainer,MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';

import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import CounterForm from '../counter/CounterForm';
const Profile = ({data}) => { 
   

    function formatDateToMMDDYYYY(inputDate) {
        const date = new Date(inputDate);
      
      
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
      
       
        return `${month}-${day}-${year}`;
      }
      
     
    
    const formattedDate = formatDateToMMDDYYYY(data?.dateOfBirth)
     
    return(
        <MDBContainer>
                     <LinkContainer to={`/users`} className='px-3 py-2 buttonLink'>
                <Link href="/users" className='ms-2 text-light'>USERS-LIST</Link>
                    </LinkContainer>

                    <div className='py-5'>
   {data ? (<MDBContainer className='mt-5 mb-4 bg-secondary text-center' style={{borderRadius:'10px'}}>
       
         <MDBContainer className='py-3'>
         <img style={{borderRadius:'40px'}} src={data.picture}  alt='...' />
         </MDBContainer>

         <h2>{data.title}. {data.firstName} {data.lastName}</h2>
         <h4>{data.gender}</h4>
         <h5>Born on {formattedDate}</h5>
         <h4 className='pb-4'>{data.email}</h4>

         <p>Try the Counter Feature<br/>Below</p>
        
        <MDBContainer>
            <CounterForm />
        </MDBContainer>
          
    </MDBContainer>) : ( <MDBSpinner role='status'>
                <span className='visually-hidden'>Loading...</span>
             </MDBSpinner>)}
             </div>
    </MDBContainer>
        ) 
}



export default Profile;
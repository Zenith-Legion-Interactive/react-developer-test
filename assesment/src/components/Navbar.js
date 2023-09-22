

      import React from 'react';
      import { useState } from 'react';
      import {
        MDBNavbar,
        MDBContainer,
        MDBIcon,
        MDBNavbarNav,
        MDBNavbarItem,
        MDBNavbarLink,
        MDBNavbarToggler,
        MDBNavbarBrand,
        MDBCollapse
      } from 'mdb-react-ui-kit';
      import { Link } from 'react-router-dom';
      import {LinkContainer} from 'react-router-bootstrap'
      import { useSelector } from 'react-redux'

const Navbar = () => {
 
  const [showNavColorBlack, setShowNavColorBlack] = useState(false);
      const count = useSelector((state) => state.counter.count)

    return (
    <div>
  
 <MDBNavbar expand='lg' dark bgColor='dark'>
    <MDBContainer fluid>
    <MDBNavbarBrand  className='ms-5'>Alnil T.</MDBNavbarBrand>
     
      <MDBContainer>
   
      <MDBCollapse show={showNavColorBlack} navbar id='navbarColor02'>
    
       <LinkContainer to="/" className='mx-5 px-5'>
<Link href="/" className='ms-5 text-light'>Home</Link>
            </LinkContainer>
           


<LinkContainer to="/counter" className='mx-5 px-5'>
<Link href="/counter" className='ms-2 text-light'>Counter</Link>
</LinkContainer>
  
<LinkContainer to="/users" className='mx-5 px-5'>
  <Link href="/users" className='ms-2 text-light'>UsersList</Link>
  </LinkContainer>

  <LinkContainer to="/about" className='mx-5 px-5'>
  <Link href="/about" className='ms-2 text-light'>About</Link>
  </LinkContainer>
  
   

 

 
  
      </MDBCollapse>
      
     
     
      </MDBContainer>
      <h4 className='me-5'>Counter Count Value: {count} </h4>
     
    </MDBContainer>
  </MDBNavbar>
    </div>
    )
}



export default Navbar;
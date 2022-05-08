import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
 


const Header = () => {
  

  const [user] = useAuthState(auth)



  const handleSignOut = () => {
    signOut(auth);
  }

  return (

    <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h3>📦INVENTORY🛒</h3>
          {/* <img height={30} src={logo} alt="" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link   href="home#products ">Inventory </Nav.Link>
       
            <Nav.Link href="home#members">Members</Nav.Link>
             
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            {
              user && <>
                <Nav.Link as={Link} to="/addproduct">Add</Nav.Link>
                <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
            

              </>
            }
            {
              user ?
                <Link to='/login'>
                  <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                </Link>

                :
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );


};

export default Header;

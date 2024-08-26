import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Images/flipkartdashboard.png'
import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * This is Header component for welcome page (user login)
 */
export default function Header2() {

    const userName = localStorage.getItem("userName")

    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Handles logout 
    const handleLogout = () => {
      alert("Logout Successful");
        localStorage.clear();
        navigate('/', { replace: true });
    }

    return (
        <>
            <div style={{ position: "fixed", width: "100%", top: "0", zIndex: "1" }}>
                <Navbar expand="lg" style={{ backgroundColor: '#2874f0' }}>
                    <Container fluid>
                        <Nav.Link as={Link} to={`/welcome`} style={{ fontWeight: '500' }}> <img src={logo} height={50} width={120}></img></Nav.Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', fontWeight: '500', marginLeft: "20px", }}
                                navbarScroll
                            >
                                <NavDropdown title={<span style={{ color: "white", fontWeight: "600" }}>Shop by Category</span>} id="navbarScrollingDropdown" className='dropdown-highlight1' >
                                    <NavDropdown.Item as={Link} to="/category/Mens_Wear">Mens Fashion</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/category/Womens_Wear">Womens Fashion</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/category/Electronics">Electronics</NavDropdown.Item>
                                </NavDropdown>


                                <div style={{ justifyContent: 'center' }}>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type='text'
                                            placeholder='Search for Products, Brands and More'
                                            value={search}
                                            onInput={(e) => setSearch(e.target.value)}
                                            style={{ width: '500px', marginRight: '5px', marginLeft: "70px" }}
                                            name='search'
                                        />

                                        <button type="button" onClick={() => window.location.href = `/search?search=${search}`} className="btn btn-outline-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                            </svg>
                                        </button>


                                    </Form>
                                </div>
                            </Nav>

                            <div className="h4" style={{ marginInlineEnd: "30px", color: "white" }}>
                                <Nav.Link as={Link} to={`/wishlist`} className="bi bi-bag-heart-fill" ></Nav.Link>
                            </div>

                            <div className="h4" style={{ marginInlineEnd: "14px", color: "white" }}>
                                <Nav.Link as={Link} to={`/cart`} className="bi bi-cart-check-fill" ></Nav.Link>
                            </div>

                        </Navbar.Collapse>
                    </Container>

                    <>
                        <div className='h4' style={{ marginRight: '10px', color: "white" }}>
                            <Nav.Link className='bi bi-person-circle' onClick={handleShow}></Nav.Link>
                        </div>

                        <Offcanvas show={show} onHide={handleClose} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Welcome {userName}</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <hr></hr>
                                <div>
                                    <Nav.Link as={Link} to={`/profile`} className="bi bi-person" style={{ fontWeight: '500' }}>Profile</Nav.Link>
                                </div>
                                <hr/>
                                <div style={{ marginBottom: '5px' }}>
                                    <Nav.Link as={Link} to='/' className="bi bi-box-arrow-right" style={{ fontWeight: '500' }} onClick={handleLogout}>Logout</Nav.Link>
                                </div>
                                <ToastContainer />
                            </Offcanvas.Body>
                        </Offcanvas>
                    </>

                </Navbar>
            </div>
        </>
    )
}
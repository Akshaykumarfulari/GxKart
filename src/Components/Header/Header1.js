import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Images/flipkart-logo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import './Header.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo1 from '../../Images/flipkart.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

/**
 * This is Header component for home page (without login)
 */

export default function Header1() {

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleList = () => {
    {
      toast("Please Login to view Wishlist")
    }
  }

  const handleCart = () => {
    {
      toast("Please Login to view Cart")
    }
  }
  //Handles audio to text recognition
  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript.endsWith(' ')) {
      SpeechRecognition.stopListening();
      // window.location.replace = `/search?search=${temp}`
    }
  }, [transcript]);

  localStorage.setItem("voice", transcript);
  const temp = localStorage.getItem("voice");

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div style={{ marginBottom: "120px" }}>
      <div style={{ position: "fixed", top: "0", width: "100%", zIndex: "100" }}>

        <div className=" text-center text-white p-1 d-flex justify-content-between " style={{ backgroundColor: '#047BD5', height: '25px', fontSize: '13px' }}>
          <span style={{ marginLeft: '10px' }}>Naya India k saath</span>
          <span className="float-end">
            <span className='bi bi-geo-alt-fill' style={{ marginRight: '10px' }}> Deliver to 263833  |  All offers</span>
          </span>
        </div>

        <div>
          <Navbar expand="lg" style={{ backgroundColor: 'whitesmoke' }}>
            <Container fluid>
              <Navbar.Brand href="http://localhost:3000/"> <img src={logo} height={50} width={200}></img></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px', fontWeight: '500', marginLeft: "20px" }}
                  navbarScroll
                >
                  <NavDropdown title="Shop by Category" id="navbarScrollingDropdown" className='dropdown-highlight' >
                    <NavDropdown.Item href="http://localhost:3000/category/Mens_Wear">Mens Fashion</NavDropdown.Item>
                    <NavDropdown.Item href="http://localhost:3000/category/Womens_Wear">Womens Fashion</NavDropdown.Item>
                    <NavDropdown.Item href="http://localhost:3000/category/Electronics">Electronics</NavDropdown.Item>
                  </NavDropdown>

                  <div style={{ justifyContent: 'center' }}>
                    <Form className="d-flex">
                      <Form.Control
                        type='text'
                        placeholder={'Search for Products, Brands and More'}
                        value={temp}
                        //onInput={(e) => setSearch(e.target.value)}
                        style={{ width: '500px', marginRight: '5px', marginLeft: "70px" }}
                        name='search'
                      />

                      <button type="button" onClick={() => window.location.href = `/search?search=${temp}`} className="btn btn-outline-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>

                      </button>
                    </Form>
                  </div>
                </Nav>

                <div className="h4" style={{ marginInlineEnd: "75px", }}>
                  <Nav.Link onClick={SpeechRecognition.startListening} className="bi bi-mic" ></Nav.Link>
                </div> <ToastContainer />

                <div className="h4" style={{ marginInlineEnd: "25px", }}>
                  <Nav.Link onClick={handleList} className="bi bi-bag-heart-fill" ></Nav.Link>
                </div> <ToastContainer />

                <div className="h4" style={{ marginInlineEnd: "25px" }}>
                  <Nav.Link onClick={handleCart} className="bi bi-cart-check-fill" ></Nav.Link>
                </div>

                <div className='h4'>
                  <Nav.Link className='bi bi-person-circle' onClick={handleShow}></Nav.Link>
                </div>

                <div >
                  <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton >
                      <Offcanvas.Title><h4><a href="http://localhost:3000/" > <img src={logo1} height={35} width={35}></img></a> Welcome to Flipkart</h4></Offcanvas.Title>

                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <hr></hr>
                      <div style={{ marginBottom: '5px' }}>
                        <Nav.Link as={Link} to='/login' className="bi bi-person" style={{ fontWeight: '600', fontSize: "18px" }} > Login</Nav.Link>
                      </div>
                      <hr></hr>

                      <div>
                        <Nav.Link as={Link} to='/Registration' className="bi bi-box-arrow-right" style={{ fontWeight: '600', fontSize: "18px" }}> Register</Nav.Link>
                      </div>
                      <hr></hr>

                    </Offcanvas.Body>
                  </Offcanvas>

                </div>

              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  )
}
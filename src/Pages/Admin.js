import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './Admin.css';
import axios from 'axios';
import logo from '../../src/Images/flipkart.png'
import { useNavigate } from 'react-router-dom';

/*
* This component for handling Admin panel page
*/
export default function Admin() {
    const userRole = localStorage.getItem("userRole")
    const userId = localStorage.getItem("userId")
    const navigate = useNavigate();

    const handleAcces = () => {
        alert("Access forbidden")
        navigate("/login")
    }
    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        passKey: '',
        productName: '',
        productDescription: '',
        productMRP: '',
        productPrice: '',
        productOff: '',
        subCategory: '',
        productImage: ''
    });

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/', { replace: true });
    }

    //For handling add product
    const handleAdminSubmit = async () => {
        const passKey = formData.passKey;
        const apiUrl = `http://54.197.52.197:8080/flipkart/admin/add-product?passKey=${passKey}`;
        const sub = formData.subCategory;
        const cat = sub.substring(0, sub.indexOf(' '))
        const categoryId = parseInt(cat)
        const reqBody = {
            passKey: passKey,
            product_name: formData.productName,
            product_description: formData.productDescription,
            product_MRP: parseInt(formData.productMRP),
            product_price: parseInt(formData.productPrice),
            product_off: parseInt(formData.productOff),
            subcategory_id: categoryId,
            product_image: formData.productImage
        };

        try {
            const response = await axios.post(apiUrl, JSON.stringify(reqBody), {
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' }
            });

            if (response.status === 200) {
                alert('Product added successfully');
                window.location.replace('http://54.197.52.197:3000/admin')
            }
        } catch (error) {
            if (error.code === "ERR_BAD_REQUEST") {
                alert('Product add failed: ' + error.response.data);
                window.location.replace('http://54.197.52.197:3000/admin')
            } else {
                console.log(error)
                alert('Product add failed: ' + error.message);
                window.location.replace('http://54.197.52.197:3000/admin')
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setValidated(true);
            await handleAdminSubmit();
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            {userId != null && userRole === 'Admin' ?

                <div style={{ backgroundImage: "url('https://i0.wp.com/ankityadav.me/wp-content/uploads/flipkart.png?fit=19201080&ssl=1')", justifyContent: "center", display: 'flex', backgroundPosition: "left", backgroundSize: "contain" }}>
                    <div className="container  mt-5 mb-5 border p-3 custom-container" style={{ backgroundColor: 'white', marginLeft: '150px' }}>
                        <div>
                            <h2 className="text-center mb-4" style={{ color: '#047BD5', fontWeight: '630', fontFamily: "Palatino", fontStyle: "italic" }}>Admin Panel - Add Products <a href="http://54.197.52.197:3000/admin" > <img src={logo} height={50} width={50} style={{ marginRight: "80px" }}></img></a>
                                <button className='btn btn-secondary' onClick={handleLogout}>Logout</button> </h2>
                        </div>
                        <hr></hr>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationTooltip01">
                                    <Form.Label className='custom-label'>Pass Key</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder='Enter correct pass key'
                                            name="passKey"
                                            value={formData.passKey}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <Button variant="outline-secondary" onClick={handlePasswordToggle}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </div>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationTooltip02">
                                    <Form.Label className='custom-label'>Product Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder='Enter product name'
                                        required
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationTooltip03">
                                    <Form.Label className='custom-label'>Product Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder='Enter product description'
                                        required
                                        name="productDescription"
                                        value={formData.productDescription}
                                        onChange={handleInputChange}
                                    />

                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationTooltip04">
                                    <Form.Label className='custom-label'>Product MRP</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder='Enter product MRP'
                                        required
                                        name="productMRP"
                                        value={formData.productMRP}
                                        onChange={handleInputChange}
                                    />

                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationTooltip05">
                                    <Form.Label className='custom-label'>Product Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder='Enter product price'
                                        required
                                        name="productPrice"
                                        value={formData.productPrice}
                                        onChange={handleInputChange}
                                    />

                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationTooltip06">
                                    <Form.Label className='custom-label'>Product Off</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder='Enter product off'
                                        required
                                        name="productOff"
                                        value={formData.productOff}
                                        onChange={handleInputChange}
                                    />

                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationTooltip07">
                                    <Form.Label className='custom-label'>Subcategory</Form.Label>
                                    <Form.Control
                                        as="select"
                                        required
                                        name="subCategory"
                                        value={formData.subCategory}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Subcategory...</option>
                                        <option>1 Mobiles</option>
                                        <option>2 Tablets</option>
                                        <option>3 Camera</option>
                                        <option>4 Watches</option>
                                        <option>5 Dryfruits</option>
                                        <option>6 Shirt</option>
                                        <option>7 Tshirt</option>
                                        <option>8 Kurtas</option>
                                        <option>9 Sarees</option>
                                        <option>10 Muscial_toys</option>
                                        <option>11 Beds</option>
                                        <option>12 Shoe</option>
                                    </Form.Control>

                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationTooltip08">
                                    <Form.Label className='custom-label'>Product Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder='Enter product link'
                                        required
                                        name="productImage"
                                        value={formData.productImage}
                                        onChange={handleInputChange}
                                    />

                                </Form.Group>
                            </Row>

                            <div className="text-center">
                                <Button type="submit">Add Product</Button>
                            </div>
                        </Form>
                    </div>
                </div> :

                <div>
                    {handleAcces}
                </div>
            }
        </div>
    );
};

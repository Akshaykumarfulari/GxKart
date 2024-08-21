import React, { useState } from 'react';
import axios from 'axios';
import "../../Components/Login/LoginMain.css";
import Register from "../Registration/Register";
import logo from '../../Images/flipkart.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

/**
 * This component is for handling registration page 
 */
export default function RegisterMain() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character and numbers!",
      label: "Username",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "phone",
      placeholder: "Phone No",
      errorMessage: "Enter Correct Number",
      label: "Phone Number",
      pattern: "^[0-9]{10,10}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const postData = async () => {

    let url = 'http://localhost:8080/flipkart/user/register';
    const reqBody = {
      name: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      phone: values.phone
    };


    try {
      const response = await axios.post(
        url,
        JSON.stringify(reqBody),
        {
          headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' },
          withCredentials: true
        }
      );

      if (response.status === 200) {
        toast.success(`Registration Successful`);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {

      if (axios.isAxiosError(error) && error.response?.status === 400) {
        toast.error(`Registration Failed, Email already exists`);
      } else {
        toast.error(`Registration Failed with status: ${error.response?.status || 'unknown'}`);
      }
    }
  };

  return (
    <div className="login">
      <form className='form2' onSubmit={handleSubmit}>
        <h1 className='h1s'>Register <a href="http://localhost:3000/" > <img src={logo} height={50} width={50}></img></a></h1>
        {inputs.map((input) => (
          <Register
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='button2' onClick={postData}>Register</button>
        <ToastContainer />
      </form>
    </div>
  );
};
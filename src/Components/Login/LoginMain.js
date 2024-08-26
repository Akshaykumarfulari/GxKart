import React, { useRef, useState } from 'react';
import axios from "axios"
import "../Login/LoginMain.css";
import Login from "./Login";
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/flipkart.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

/**
 * This component is for handling login page 
 */
export default function LoginMain() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const recaptcha = useRef();

    const inputs = [

        {
            id: 0,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 1,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            autocomplete: "current-password",
            required: true,
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const postData = async () => {
        let url = 'http://54.197.52.197:8080/flipkart/user/login';
        const reqBody = {
            'email': values.email,
            'password': values.password
        }

        const captchaValue = recaptcha.current.getValue();

        if (!captchaValue) {
            alert("Please verify the reCAPTCHA!");
        } else {


            try {
                const response = await axios.post(url, JSON.stringify(reqBody), {
                    headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' }
                });

                if (response.status === 200) {
                    const userName = response.data.split(":")[1].trim();
                    const userId = response.data.split(":")[2].trim();
                    const userRole = response.data.split(":")[3].trim();

                    localStorage.setItem("userId", userId);
                    localStorage.setItem("userName", userName);
                    localStorage.setItem("userRole", userRole);

                    toast.success(`Login Successful, ${userName}!`)
                    
                    console.log(captchaValue)
                    setTimeout(() => {
                        const newPath = userRole === 'Admin' ? '/admin' : '/welcome'
                        navigate(newPath, { replace: true });
                    }, 1500);
                }
            } catch (error) {
                if (error.code === "ERR_BAD_RESPONSE") {
                    toast.error('Login failed: ' + error.response.data);
                    setValues({
                        email: "",
                        password: ""
                    })
                } else {
                    toast.error('Login failed: ' + error.message);
                }
            }
        }
    }

    return (
        <>
            <div className="login">
                <form className='form2' onSubmit={handleSubmit}>
                    <h1 className='h1s'>Login <a href="http://54.197.52.197:3000/" > <img src={logo} height={50} width={50}></img></a></h1>
                    {inputs.map((input) => (
                        <Login
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button className='button2' onClick={postData}>Login</button>
                    <ToastContainer />
                    <div>
                        <a href="http://54.197.52.197:3000/registration" style={{ fontWeight: '500' }}> <span style={{ color: 'black' }}>Dont have an account? </span>Register here</a>
                    </div>
                    <div style={{ marginTop: '10px', marginBottom: "20px" }}>
                        <ReCAPTCHA
                            ref={recaptcha}
                            sitekey={'6LfBj2gpAAAAAJQ2M2STgN8_nAt9UHeGS5V418YI'}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};
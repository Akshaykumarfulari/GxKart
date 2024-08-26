import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

/**
 * This component is for handling user basic details update
 */
export default function EditProfile({ userId }) {
    const [formData, setFormData] = useState({
        newUsername: '',
        email: '',
        newPhone: '',
    });

    //Fetch user basic details
    useEffect(() => {
        axios.get(`http://54.197.52.197:8080/gxkart/user/${userId}`)
            .then(response => {
                const userData = response.data;
                setFormData({
                    newUsername: userData.name,
                    email: userData.email,
                    newPhone: userData.phone,
                });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://54.197.52.197:8080/gxkart/user/updateInfo/${userId}`, formData)
            .then(response => {
                const newName = formData.newUsername;
                localStorage.setItem("userName", newName)
                toast.success('User data updated successfully', response);
            })
            .catch(error => {
                toast.error('Error updating user data', error);
            });
    };

    return (
        <div style={{ marginTop: '10px' }}>
            <h5>Edit Profile</h5>
            <hr></hr>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row gx-3 mb-3">
                        <div className="col-md-12">
                            <label className="small mb-1" htmlFor="inputName">
                                Name
                            </label>
                            <input
                                className="form-control"
                                id="inputName"
                                type="text"
                                placeholder="Enter your name"
                                name="newUsername"
                                value={formData.newUsername}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputEmail">
                            Email address
                        </label>
                        <input
                            className="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            value={formData.email}
                            readOnly
                        />
                    </div>

                    <div className="row gx-3 mb-3">
                        <div className="col-md-12">
                            <label className="small mb-1" htmlFor="inputPhone">
                                Phone number
                            </label>
                            <input
                                className="form-control"
                                id="inputPhone"
                                type="tel"
                                placeholder="Enter your phone number"
                                name="newPhone"
                                value={formData.newPhone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button className="btn btn-primary" type="submit">
                        Save changes
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

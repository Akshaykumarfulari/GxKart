import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

/**
 * This component is for handling user password update
 */
export default function ChangePassword ({ userId }) {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { oldPassword, newPassword, confirmNewPassword } = formData;

    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords don't match!");
      return;
    }

    try {
      await axios.put(`http://54.197.52.197:8080/flipkart/user/updatePassword/${userId}`, {
        oldPassword,
        newPassword,
      });

      toast.success('Password changed successfully')
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',

      })
    } catch (error) {
      toast.error('Failed to change password. Please check your old password.')
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h5>Change Password</h5>
      <hr></hr>
      <div className="card-body">
        <form>
          <div className="row gx-3 mb-3">
            <div className="col-md-12">
              <label className="small mb-1" htmlFor="inputOldPassword">
                Old Password
              </label>
              <input
                className="form-control"
                id="inputOldPassword"
                type="password"
                name="oldPassword"
                placeholder="Enter your old password"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row gx-3 mb-3">
            <div className="col-md-12">
              <label className="small mb-1" htmlFor="inputNewPassword">
                New Password
              </label>
              <input
                className="form-control"
                id="inputNewPassword"
                type="password"
                name="newPassword"
                placeholder="Enter your new password"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row gx-3 mb-3">
            <div className="col-md-12">
              <label className="small mb-1" htmlFor="inputConfirmPassword">
                Confirm Password
              </label>
              <input
                className="form-control"
                id="inputConfirmPassword"
                type="password"
                name="confirmNewPassword"
                placeholder="Enter your new password again"
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="btn btn-primary" type="button" onClick={handleSubmit}>
            Save changes
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};
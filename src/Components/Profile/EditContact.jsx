import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

/**
 * This component is for handling user contact (address) details update
 */
export default function EditContact({ userId }) {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    country: '',
    postal_code: '',
  });

  //Fetch user contact details
  useEffect(() => {
    axios.get(`http://localhost:8080/flipkart/user/${userId}`)
      .then(response => {
        const contactData = response.data.contact;
        setFormData({
          address: contactData.address,
          city: contactData.city,
          state: contactData.state,
          country: contactData.country,
          postal_code: contactData.postal_code,
        });

      })
      .catch(error => {
        toast.error('Error fetching contact data:', error);
      });
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8080/flipkart/user/updateAddress/${userId}`, formData)
      .then(response => {
        toast.success('Address updated successfully')
      })
      .catch(error => {
        console.error('Error updating contact data:', error);
      });
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <h5>Edit Contact</h5>
      <hr></hr>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row gx-3 mb-3">
            <div className="col-md-12">
              <label className="small mb-1" htmlFor="inputAddress">
                Address
              </label>
              <input
                className="form-control"
                id="inputAddress"
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputCity">
                City
              </label>
              <input
                className="form-control"
                id="inputCity"
                type="text"
                placeholder="Enter city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputState">
                State
              </label>
              <input
                className="form-control"
                id="inputState"
                type="text"
                placeholder="Enter state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputCountry">
                Country
              </label>
              <input
                className="form-control"
                id="inputCountry"
                type="text"
                placeholder="Enter your country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputPostalCode">
                Postal Code
              </label>
              <input
                className="form-control"
                id="inputPostalCode"
                type="text"
                placeholder="Enter your postal code"
                name="postal_code"
                value={formData.postal_code}
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
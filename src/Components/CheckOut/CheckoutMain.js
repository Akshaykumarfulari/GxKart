import React, { useState } from 'react';
import ItemsMain from './ItemsMain';
import EditContact from '../Profile/EditContact';
import EditProfile from '../Profile/EditProfile';

/**
 * This component for handling checkout process 
 */
export default function CheckoutMain() {
    const userId = localStorage.getItem("userId");
    const [selectedComponent, setSelectedComponent] = useState('editProfile');

    const handleSelectProfile = () => {
        setSelectedComponent('editProfile');
    };

    const handleSelectContact = () => {
        setSelectedComponent('editContact');
    };

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Checkout</h1>
            </div>
            <div className='row' style={{ marginTop: "30px" }}>
                <div className='card col-md-6'>
                    <div>
                        <div className='nav nav-tabs' style={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>
                          
                            <div style={{ marginRight: '10px', borderBottom: selectedComponent === 'editProfile' ? '2px solid #047BD5' : 'none' }}>
                                <span onClick={handleSelectProfile} style={{ cursor: 'pointer', fontWeight: '450' }}>
                                    Edit Profile
                                </span>
                            </div>
                            <div style={{ borderBottom: selectedComponent === 'editContact' ? '2px solid #047BD5' : 'none' }}>
                                <span onClick={handleSelectContact} style={{ cursor: 'pointer', fontWeight: '450' }}>
                                    Edit Contact
                                </span>
                            </div>
                        </div>
                        {selectedComponent === 'editProfile' && <EditProfile userId={userId} />}
                        {selectedComponent === 'editContact' && <EditContact userId={userId} />}
                    </div>
                </div>

                <div className='card col-md-6'>
                    <div>
                        <h5 style={{ marginTop: '10px' }}>Items</h5>
                        <hr />
                    </div>
                    <ItemsMain />
                </div>
            </div>
        </div>
    )
};

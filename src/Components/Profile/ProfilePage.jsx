import React, { useState } from 'react';
import ProfileMenu from './ProfileMenu';
import EditProfile from './EditProfile';
import EditContact from './EditContact';
import ChangePassword from './ChangePassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderHistory from './OrderHistory';
import Notification from './Notification';

/**
 * This component is for managing user profile
 */
export default function ProfilePage() {
  const userId = localStorage.getItem("userId")
  const [selectedOption, setSelectedOption] = useState('editProfile');

  //Handles user profile menu content
  const renderContent = () => {
    switch (selectedOption) {
      case 'editProfile':
        return <EditProfile userId={userId} />;
      case 'editContact':
        return <EditContact userId={userId} />;
      case 'changePassword':
        return <ChangePassword userId={userId} />;
      case 'orderHistory':
        return <OrderHistory userId={userId} />
      case 'notification':
        return <Notification />
      default:
        return null;
    }
  };

  return (
    <div className='container d-flex justify-content-center' style={{ marginTop: '20px' }}>
      <div className="col-md-10" >
        <div className="card">
          <div className="row">

            <div className="col-md-3" style={{ backgroundColor: "#0d6efd" }}>
              <ProfileMenu setSelectedOption={setSelectedOption} />
            </div>

            <div className="col-md-9" >
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

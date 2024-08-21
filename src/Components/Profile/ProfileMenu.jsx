import React from 'react';

/**
 * This component is for displaying profile menu
 */
export default function ProfileMenu({ setSelectedOption }) {
  return (
    <div className=" d-grid" style={{ marginTop: "5px" }}>
      <button className="btn btn-primary text-start" style={{ borderRadius: "0", fontWeight: "bold", borderBlockEndColor: "white" }} onClick={() => setSelectedOption('editProfile')}>
        Personal Info
      </button>
      <button className="btn btn-primary text-start" style={{ borderRadius: "0", fontWeight: "bold", borderBlockEndColor: "white" }} onClick={() => setSelectedOption('editContact')}>
        Address
      </button>
      <button className="btn btn-primary text-start " style={{ borderRadius: "0", fontWeight: "bold", borderBlockEndColor: "white" }} onClick={() => setSelectedOption('changePassword')}>
        Password
      </button>
      <button className="btn btn-primary text-start" style={{ borderRadius: "0", fontWeight: "bold", borderBlockEndColor: "white" }} onClick={() => setSelectedOption('orderHistory')}>
        Order History
      </button>
      <button className="btn btn-primary text-start" style={{ borderRadius: "0", fontWeight: "bold", borderBlockEndColor: "white" }} onClick={() => setSelectedOption('notification')}>
        Notifications
      </button>

    </div>
  );
};
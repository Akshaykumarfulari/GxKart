import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

/**
 * Handles laoding of page
 */
export default function oader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ClipLoader color="#36D7B7" loading={true} size={50} />
        </div>
    )
}

import { Link } from 'react-router-dom';
import myProfileBackground from '../../Images/editp.png';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

/**
 * This component displays background image for my profile and also provide home page link 
 */
export default function MyProfileImage() {
    return (
        <>
            <div style={{ marginTop: "70px" }}>
                <img src={myProfileBackground} width={"100%"} height={"200px"}></img>
            </div>

            <Breadcrumb style={{ marginLeft: "10px" }}>

                <Breadcrumb.Item>
                    <Link to={`/welcome`}>Home</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item active>Profile</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
}
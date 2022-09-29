import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import NavBar from "../navbar/Navbar";
import bg from '../assets/bg.jpg';
import tb from '../assets/tb.png';
import traincirce from '../assets/traincircle.png';
import wc from '../assets/wc.png';

function AdminDashboard() {

    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);

    const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
            {
                myUser !== null ?
                    <div>
                        <NavBar />
                        <div>
                            <div style={{ fontFamily: "inherit", fontSize: "30px", color: "silver" }}>
                                <h3><u><i>Hello {JSON.parse(myUser).userName}</i></u></h3>
                            </div>
                            <div>
                                <img style={{ float: "left" }} src={tb} alt="admin-medal" width="150px" height="150px" />
                                <p style={{ fontFamilt: "inherit", fontSize: "20px", color: "goldenrod" }}>Administrators, commonly known as admins or sysops (system operators), are Wikipedia editors who have been
                                    granted the technical ability to perform certain special actions on the English Wikipedia. These include the
                                    ability to block and unblock user accounts, IP addresses, and IP ranges from editing, edit fully protected
                                    pages, protect and unprotect pages from editing, delete and undelete pages, rename pages without restriction,
                                    and use certain other tools.</p><br></br><br></br>
                                <hr style={{ color: "white" }}></hr>
                                <img style={{ float: "right" }} src={wc} alt="shipment-graph" width="250px" height="350px" /><br></br><br></br><br></br><br></br>
                                <p style={{ fontFamilt: "inherit", fontSize: "20px", color: "goldenrod" }}>Administrators assume these responsibilities as volunteers after undergoing a community review process. They do
                                    not act as employees of the Wikimedia Foundation. They are never required to use their tools, and must never use them
                                    to gain an advantage in a dispute in which they were involved. Administrators should not be confused with Wikimedia
                                    system administrators ("sysadmins").</p><br></br><br></br><br></br><br></br>
                                <hr style={{ color: "white" }}></hr>
                                <div style={{ float: "left" }}>
                                    <h3 style={{ fontFamily: "initial", color: "ghostWhite", fontSize: "50px" }}><u>Administrators' abilities</u></h3>
                                    <ul style={{ color: "silver" }}>
                                        <p>1. Block and unblock user accounts and IP addresses from editing</p>
                                        <p>2.  Apply, modify, and remove page protection on a particular page to restrict or allow editing, moving, or creation</p>
                                        <p>3.  Delete pages with 5,000 or fewer revisions</p>
                                        <p>4.  Grant and revoke certain user permissions requested by user accounts</p>
                                        <p>5.  View and restore deleted pages</p>
                                        <p>6.  Restrict and restore public visibility of information in individual logs and page revisions</p>
                                        <p>7.  Edit fully protected pages</p>
                                        <p>8.  Override the title blacklist</p>
                                        <p>9.  Move a page to any desired title</p>
                                    </ul><br></br>
                                </div>
                            </div>
                            <div>
                                <img src={traincirce} alt="train" width="90%" height="600px" />
                            </div>
                        </div>
                    </div>

                    : <h2 style={{color : "white"}}>Please Login<br></br><Link to='/user/login'>Click here to Login</Link></h2>
            }

        </div>
    )
}

export default AdminDashboard;
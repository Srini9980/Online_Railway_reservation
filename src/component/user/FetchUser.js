import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import e from '../assets/e.jfif';
import { deleteUserDetails, getUserById } from '../../store/actions/UserrAction';
import NavBar from '../navbar/Navbar';

function FetchUser() {

    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchUser = () => {
        dispatch(getUserById(id));
    }

    useEffect(fetchUser, [id]);

    const deleteUser = () => {
        dispatch(deleteUserDetails(id));
        alert("User is removed successffully");
        navigate(-1);
    }

    return (
        <div style={{ backgroundImage: `url(${e})`, backgroundRepeat: "no-repeat", backgroundSize: "100%" , height:"753px"}}>
            <NavBar />
            <h2 style={{fontSize:"40px", color:"white"}}><u><i>User Details</i></u></h2>
            {
                user !== null &&
                <div style={{ display:"grid",alignItems:"center",justifyContent:"center", height:"600px"}}>
                    <div className="card-body" style={{width: "320px", height: "480px" }}>
                        <div>
                            <div style={{fontSize:"23px", color:"whitesmoke"}}>
                            <p>User Id : {user.userId}</p>
                            <p>First-Name : {user.firstName}</p>
                            <p>Last-Name : {user.lastName}</p>
                            <p>Age : {user.age}</p>
                            <p>Gender : {user.gender}</p>
                            <p>Phone no : {user.phone}</p>
                            <p>Location : {user.location}</p>
                            <p>Username : {user.userName}</p>
                            <p>E-mail : {user.email}</p>
                            </div>
                            <Link to={`/user/edit/${user.userId}`}><button style={{ float: "left" }} className="btn btn-primary">Edit</button></Link>
                            <button onClick={() => {
                                const confirmBox = window.confirm("Are you sure you want delete this User details")
                                if (confirmBox === true) { deleteUser() }}} className="btn btn-danger" style={{ float: "right" }}>Delete</button>
                        </div>
                    </div><br></br><br></br>
                    <Link to = "/user/all" className="btn btn-secondary">Back</Link>
                </div>
            }
        </div>
    )

}

export default FetchUser;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import d from '../assets/d.jpg';
import d1 from '../assets/d1.jfif';
import { getAllUsers } from '../../store/actions/UserAction';
import NavBar from '../navbar/Navbar';

function FetchAllUsers() {

    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();

    const FetchAllUsers = () => {
        dispatch(getAllUsers());
    };

    useEffect(() => {
        FetchAllUsers();
        // eslint-disable-next-line 
    }, [])

    return (
        <div style={{ backgroundImage: `url(${d1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
            <NavBar />
            <h2 style={{ color: "lightBlue", fontSize: "38px" }}><u><i>Users List</i></u></h2><br></br>
            <div className="container">
                <div className="row">
                    {
                        users.map((user, index) =>
                            <div key={index} className="col-sm-3">
                                <Link to={`${user.userId}`}>
                                    <div className="card" style={{ width: "200px", height: "350px", backgroundColor: "transparent", color: "lightBlue" }}>
                                        <img className="card-image-top" src={d} alt="Card image" />
                                        <h4>{user.userName}</h4>
                                        <p>{user.phone}</p>
                                        <p>{user.email}</p>
                                    </div><br></br><br></br>
                                </Link>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default FetchAllUsers;
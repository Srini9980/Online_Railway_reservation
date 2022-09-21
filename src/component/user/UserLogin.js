import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { doUserLogin } from '../../store/actions/UserrAction';
import b1 from '../assets/b1.jpeg';
import b2 from '../assets/b2.jpg';

function UserLogin() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});

    const doLogin = () => {

        let errors = {};

        if (!userName) {
            errors['usernameError'] = "*Please enter your username!";
        }
        if (!password) {
            errors['passwordError'] = "*Please enter your password!";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload = {
                userName: userName,
                password: password,
            }

            dispatch(doUserLogin(payload));
            navigate(-1);
        }
    }

    return (
        <div className="container-flex" style={{ backgroundImage: `url(${b2})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
            <div className='container' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                color: "black"
            }}>
                {
                    loggedInUser !== null ?
                        navigate("/user/all")
                        :
                        <div className="card bg-dark text-light" style={{ width: "330px", height: "450px", borderRadius: "4em", fontSize: "16px" }}>
                            <div className="card-body" style={{ backgroundImage: `url(${b1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "330px", height: "450px", borderRadius: "3em", color: "white", fontSize: "18px" }}>
                                <h4 className="card-title" style={{ fontFamily: "roboto", fontSize: "35px" }}><b>LOGIN</b></h4><br></br>
                                <div className='form-group'>
                                    <label htmlFor='userName'>User Name</label>
                                    <input type="text" className="form-control" name="userName" value={userName} onChange={user => setUserName(user.target.value)} placeholder="Username" />
                                    {
                                        formErrors.usernameError &&
                                        <div style={{ textAlign: "start", color: "red", fontSize: "15px", fontFamily: "monospace" }}>{formErrors.usernameError}</div>
                                    }
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={user => setPassword(user.target.value)} placeholder="Password" />
                                    {
                                        formErrors.passwordError &&
                                        <div style={{ textAlign: "start", color: "red", fontSize: "15px", fontFamily: "monospace" }}>{formErrors.passwordError}</div>
                                    }
                                </div>
                                <diV>
                                    <button onClick={doLogin} className="btn btn-success">Login</button>
                                </diV><br></br>
                                <div style={{ fontSize: "15px" }}>
                                    If you dont't have an account! <Link to="/user/save" style={{ color: "red", fontSize: "15px" }}><u>CLICK HERE</u></Link>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default UserLogin;
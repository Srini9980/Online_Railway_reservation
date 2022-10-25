import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { doUserLogin } from '../../store/actions/UserAction';
import b1 from '../assets/b1.jpeg';
import b2 from '../assets/b2.jpg';

function UserLogin() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

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

        if (!role) {
            errors['roleError'] = "*Please select a role!";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload = {
                userName: userName,
                password: password,
                role: role
            }

            dispatch(doUserLogin(payload));
            alert("You have been loggedin successfully");
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

                        loggedInUser.role === "admin" ?
                            navigate("/admin/dashboard")
                            :
                            loggedInUser.role === "passenger" ?
                                navigate(-1)
                                :
                                navigate("/")
                        :
                        <div className="card bg-dark text-light" style={{ width: "360px", height: "580px", borderRadius: "4em", fontSize: "16px" }}>
                            <div className="card-body" style={{ backgroundImage: `url(${b1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "360px", height: "450px", borderRadius: "3em", color: "white", fontSize: "18px" }}>
                                <h4 className="card-title" style={{ fontFamily: "roboto", fontSize: "35px" }}><b>LOGIN</b></h4><br></br>
                                <div className='form-group'>
                                    <label htmlFor='userName'>User Name :</label>
                                    <input type="text" className="form-control" name="userName" value={userName} onChange={user => setUserName(user.target.value)} placeholder="Username" />
                                    {
                                        formErrors.usernameError &&
                                        <div style={{ textAlign: "start", color: "red", fontSize: "15px", fontFamily: "monospace" }}>{formErrors.usernameError}</div>
                                    }
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Password :</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={user => setPassword(user.target.value)} placeholder="Password" />
                                    {
                                        formErrors.passwordError &&
                                        <div style={{ textAlign: "start", color: "red", fontSize: "15px", fontFamily: "monospace" }}>{formErrors.passwordError}</div>
                                    }
                                </div>
                                <div style={{ fontFamily: "serif", fontSize: "20px" }}>
                                    <label htmlFor="role">Role : </label>
                                    <select type="role" className="form-control" name="role" value={role} onChange={user => setRole(user.target.value)}>
                                        <option value="" >    -------Select role----- </option>
                                        <option value="admin">Admin</option>
                                        <option value="passenger">Passenger</option>
                                    </select>
                                    {
                                        formErrors.roleError &&
                                        <div style={{ textAlign: "start", color: "red", fontSize: "15px", fontFamily: "monospace" }}>{formErrors.roleError}</div>
                                    }
                                </div>
                                <div><br></br>
                                    <button onClick={doLogin} className="btn btn-success">Login</button>
                                </div><br></br>
                                <div style={{ fontSize: "15px" }}>
                                    If you don't have an account! <Link to="/user/save" style={{ color: "red", fontSize: "15px" }}><u>CLICK HERE</u></Link>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default UserLogin;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewUser } from '../../store/actions/UserAction';
import c from '../assets/c.jpg';
import NavBar1 from '../navbar/NavBar1';

function CreateUser() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex1 = /^[A-Za-z0-9]{3,16}$/i;
    const regex2 = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z)-9!@#$%^&*]{4,10}$/i;
    const regex3 = /^[6-9][0-9]{9}$/i;

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.userReducer.newUser);

    const handleSubmit = () => {

        let errors = {};

        if (!firstName) {
            errors['firstNameError'] = "*Please enter your first name!";
        }

        if (!lastName) {
            errors['lastNameError'] = "*Please enter your last name!"
        }

        if (!age) {
            errors['ageError'] = "*Please provide your age!";
        }

        if (!gender) {
            errors['genderError'] = "*Please select the gender!";
        }

        if(!phone) {
            errors['phoneError'] = "*Please enter the phone number!";
        }

        else if(!regex3.test(phone)) {
            errors['phoneError'] = "*Phone number must starts with 9,8,7,6 only and contain 10 digits!";
        }

        if (!location) {
            errors['locationError'] = "*Please select the location!";
        }

        if (!userName) {
            errors['userNameError'] = "*Please enter the username!";
        }

        else if(!regex1.test(userName)) {
            errors['userNameError'] = "*Username should be 3-16 characters and should'nt include any special characters (@,!#,$,%,^,&,*,`,~)!"
        }

        if (!email) {
            errors['emailError'] = "*Please enter your E-mail address!";
        }

        else if(!regex.test(email)) {
            errors['emailError'] = "*Entered email address is not valid!"
        }

        if (!password) {
            errors['passwordError'] = "*Please enter the password!";
        }

        else if(!regex2.test(password)) {
            errors['passwordError'] = "*Password should be 4-10 characters and include at least 1 letter, 1 number and 1 special character!";
        }

        if (!role) {
            errors['roleError'] = "*Please select a role!";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                firstName: firstName,
                lastName: lastName,
                age: age,
                gender: gender,
                phone: phone,
                location: location,
                userName: userName,
                email: email,
                password: password,
                role: role
            }

            dispatch(createNewUser(payload));
            alert("User registration is successfully done with id " + user.userId);
            navigate("/");

        }
    }

    return (
        <div style={{ backgroundImage: `url(${c})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "1290px" }}>
            <NavBar1 />
            <h2 style={{ color: "whitesmoke" }}><i>User Registration</i></h2><br></br>
            <div className='container' style={{
                display: 'inline-grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120vh',
                fontSize: "20px"
            }}>
                <div className="card bg-light text-dark" style={{ width: "600px", height: "100%" }}>
                    <div className="card-body" style={{ backgroundImage: `url(${c})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                        <div className='form-group' style={{ color: "white" }}>
                            <label htmlFor='firstName'>First name :</label>
                            <input type="text" className="form-control" name="firstName" value={firstName} onChange={user => setFirstName(user.target.value)} placeholder="First Name" autoFocus />
                            {
                                formErrors.firstNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.firstNameError}</div>
                            }
                        </div>
                        <div className='form-group' style={{ color: "white" }}>
                            <label htmlFor='lastName'>Last name :</label>
                            <input type="text" className="form-control" name="lastName" value={lastName} onChange={user => setLastName(user.target.value)} placeholder="Last Name" />
                            {
                                formErrors.lastNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.lastNameError}</div>
                            }
                        </div>
                        <div className='form-group' style={{ color: "white" }}>
                            <label htmlFor='age'>Age :</label>
                            <input type="number" className="form-control" name="age" value={age} onChange={user => setAge(user.target.value)} placeholder="Age" />
                            {
                                formErrors.ageError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.ageError}</div>
                            }
                        </div>
                        <div className='form-group' style={{ color: "white" }}>
                            <label htmlFor='gender' >Gender : </label><br></br>
                            <input type="radio" value="Male" name="gender" onChange={user => setGender(user.target.value)} /> Male &nbsp;
                            <input type="radio" value="Female" name="gender" onChange={user => setGender(user.target.value)} /> Female &nbsp;
                            <input type="radio" value="Other" name="gender" onChange={user => setGender(user.target.value)} /> Other
                            {
                                formErrors.genderError &&
                                <div style={{ color: "red", fontSize: "15px" }}>{formErrors.genderError}</div>
                            }
                        </div>
                        <div className='form-group' style={{ color: "white" }}>
                            <label htmlFor='phone'>Phone :</label>
                            <input type="number" className="form-control" name="phone" value={phone} onChange={user => setPhone(user.target.value)} placeholder="Phone no" />
                            {
                                formErrors.phoneError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.phoneError}</div>
                            }
                        </div>
                        <div className='form-group' style={{ color: "white" }}>
                            <label htmlFor='location'>Location  :</label>&nbsp;
                            <select name="location" value={location} onChange={user => setLocation(user.target.value)}>
                                <option value="select">Select</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="chennai">Chennai</option>
                                <option value="hyderabad">Hyderabad</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="pune">Pune</option>
                                <option value="delhi">Delhi</option>
                                <option value="jaipur">Jaipur</option>
                                <option value="hosur">Hosur</option>
                                <option value="vizag">Vizag</option>
                                <option value="mysore">Mysore</option>
                                {
                                    formErrors.locationError &&
                                    <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.locationError}</div>
                                }
                            </select>
                        </div>
                        <div className='form-group' style={{ color: "white" }}>
                            <label htmlFor='userName'>User Name :</label>
                            <input type="text" className="form-control" name="userName" value={userName} onChange={user => setUserName(user.target.value)} placeholder="Username" />
                            {
                                formErrors.userNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.userNameError}</div>
                            }
                        </div>
                        <div className='form-group' style={{ color: "white" }}>
                            <label htmlFor='email'>E-mail :</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={user => setEmail(user.target.value)} placeholder="abc@mail.com" />
                            {
                                formErrors.emailError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.emailError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password' style={{ color: "white" }}>Password :</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={user => setPassword(user.target.value)} placeholder="Password" />
                            {
                                formErrors.passwordError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.passwordError}</div>
                            }
                        </div>
                        <div>
                            <div className='form-group'>
                                <label htmlFor='role' style={{ color: "white" }}>Role :</label>&nbsp;
                                <select name="role" value={role} onChange={user => setRole(user.target.value)}>
                                    <option value="select">Select</option>
                                    <option value="passenger">Passenger</option>
                                    <option value="admin">Admin</option>
                                </select>
                                {
                                    formErrors.roleError &&
                                    <div style={{ color: "red", fontSize: "15px" }}>{formErrors.roleError}</div>
                                }
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-secondary" style={{ float: "left" }} onClick={() => navigate(-1)}>Back</button>
                            <button onClick={handleSubmit} className="btn btn-success" style={{ float: "right" }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CreateUser;

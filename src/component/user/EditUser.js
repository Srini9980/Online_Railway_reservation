import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from '../../store/actions/UserrAction';
import f from '../assets/f.jpg';

function EditUser() {

    const user = useSelector(state => state.userReducer.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userId] = useState(user.userId);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [phone, setPhone] = useState(user.phone);
    const [location, setLocation] = useState(user.location);
    const [userName] = useState(user.userName);
    const [email, setEmail] = useState(user.email);
    const [password] = useState(user.password);
    const [role] = useState(user.role);

    const handleSubmit = () => {

        const payload = {

            userId: userId,
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

        dispatch(updateUser(payload));
        alert("User details updated with id " + user.userId);
        navigate("/user/all");
    }

    return (
        <div style={{ backgroundImage: `url(${f})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height:"1050px" }}>
            <h2 style={{ color: "wheat" }}><u>Update User</u></h2><br></br>
            <div className='container' style={{
                display: 'flow-root',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120vh',
                fontSize: '18px',
                color: 'white',
            }}>
                <div className='form-group'>
                    <label htmlFor='userId'>User Id</label>
                    <input type="number" className="form-control" name="userId" value={userId} disabled />
                </div>
                <div className='form-group'>
                    <label htmlFor='firstName'>First name</label>
                    <input type="text" className="form-control" name="firstName" value={firstName} onChange={user => setFirstName(user.target.value)} autoFocus />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last name</label>
                    <input type="text" className="form-control" name="lastName" value={lastName} onChange={user => setLastName(user.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='age'>Age</label>
                    <input type="number" className="form-control" name="age" value={age} onChange={user => setAge(user.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='gender'>Gender :</label><br></br>
                    <input type="radio" value="Male" name="gender" onChange={user => setGender(user.target.value)} /> Male
                    <input type="radio" value="Female" name="gender" onChange={user => setGender(user.target.value)} /> Female
                    <input type="radio" value="Other" name="gender" onChange={user => setGender(user.target.value)} /> Other
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Phone</label>
                    <input type="number" className="form-control" name="phone" value={phone} onChange={user => setPhone(user.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='location'>Location</label>
                    <select name="location" value={location} onChange={user => setLocation(user.target.value)}>Select
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
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='userName'>User Name</label>
                    <input type="text" className="form-control" name="userName" value={userName} disabled />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>E-mail</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={user => setEmail(user.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" className="form-control" name="password" value={password} disabled />
                </div>
                <div className='form-group'>
                    <label htmlFor='role'>Role</label>
                    <input type="text" className='form-control' name="role" value={role} disabled />
                </div>
                <button className='btn btn-secondary' style={{ float: "left" }} onClick={() => navigate(-1)}>Back</button>
                <button onClick={handleSubmit} className="btn btn-success" style={{ float: "right" }}>Update</button>
            </div>
        </div>
    )
}

export default EditUser;
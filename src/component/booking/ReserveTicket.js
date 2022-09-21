import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createBooking } from '../../store/actions/BookingAction';
import j from '../assets/j.webp';
import NavBar1 from '../navbar/NavBar1';

function ReserveTicket() {

    const booking = useSelector(state => state.bookingReducer.newBooking);
    const { id } = useParams();

    const [passengerName, setPassengerName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfJourney, setDateOfJourney] = useState("");
    const [seatType, setSeatType] = useState("");
    const [trainId, setTrainId] = useState(id);

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    const disablePast = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }

    const handleSubmit = () => {

        let errors = {};

        if (!passengerName) {
            errors['passengerNameError'] = "*Please enter your name!"
        }

        if (!age) {
            errors['ageError'] = "*Please enter your age!"
        }

        if (!gender) {
            errors['genderError'] = "*Gender is required!"
        }

        if (!dateOfJourney) {
            errors['dateOfJourneyError'] = "*Please select date of journey!"
        }

        if (seatType === 'select') {
            errors['seatTypeError'] = "*Please select seat type!"
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                passengerName: passengerName,
                age: age,
                gender: gender,
                dateOfJourney: dateOfJourney,
                seatType: seatType,
                trainId: trainId
            }

            dispatch(createBooking(payload));
            alert("Booking is successfully reserved with id " + booking.bookingId)
            navigate("/booking/all");
        }
    }

    return (
        <div>
            <NavBar1/>
            {
                myUser !== null ?
                    <div style={{ backgroundImage: `url(${j})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                        <div className='container' style={{
                            color: 'whitesmoke',
                            display: 'inline-grid',
                            alignItems: 'center',
                            justifyContent: 'left',
                            height: '100vh',
                        }}>
                            <div className="card bg-light text-dark" style={{ width: "350px" }}>
                                <div className="card-body" style={{ backgroundColor: "white" }}>
                                    <h2 style={{ fontFamily: "fantasy", color: "lightcoral" }}><u>Book your Ticket</u></h2>
                                    <div className='form-group'>
                                        <label htmlFor='passengerName'>Passenger Name:</label>
                                        <input type="text" className="form-control" name="passengerName" value={passengerName} onChange={booking => setPassengerName(booking.target.value)} placeholder="Passenegrname" />
                                        {
                                            formErrors.passengerNameError &&
                                            <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.passengerNameError}</div>
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='age'>Passenger age:</label>
                                        <input type="number" className="form-control" name="age" value={age} onChange={booking => setAge(booking.target.value)} placeholder="Age" />
                                        {
                                            formErrors.ageError &&
                                            <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.ageError}</div>
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='gender'>Gender : </label>&nbsp;
                                        <input type="radio" value="Male" name="gender" onChange={booking => setGender(booking.target.value)} /> Male&nbsp;
                                        <input type="radio" value="Female" name="gender" onChange={booking => setGender(booking.target.value)} /> Female&nbsp;
                                        <input type="radio" value="Other" name="gender" onChange={booking => setGender(booking.target.value)} /> Other
                                        {
                                            formErrors.genderError &&
                                            <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.genderError}</div>
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='dateOfJourney'>Journey Date:</label>
                                        <input type="date" className="form-control" name="dateOfJourney" value={dateOfJourney} onChange={booking => setDateOfJourney(booking.target.value)} min={disablePast()} />
                                        {
                                            formErrors.dateOfJourneyError &&
                                            <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.dateOfJourneyError}</div>
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='seatType'>Seat Type :</label>
                                        <select name="seatType" value={seatType} onChange={booking => setSeatType(booking.target.value)}>
                                            <option >select</option>
                                            <option value="tatkal">Tatkal</option>
                                            <option value="secondClass">Second Class (2A)</option>
                                            <option value="sleeperClass">Sleeper (2S)</option>
                                            <option value="firstClass">First Class (3A)</option>
                                            <option value="ACChairClass">AC Class (AC)</option>
                                            {
                                                formErrors.seatTypeError &&
                                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.seatTypeError}</div>
                                            }
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='trainId'>Train id:</label>
                                        <input type="number" className="form-control" name="trainId" value={trainId} onChange={booking => setTrainId(id)} disabled />
                                    </div>
                                    <div>
                                        <button className="btn btn-success p-2 px-5 active" onClick={handleSubmit}>Reserve</button><br></br><br></br>
                                        <button className="btn btn-secondary p-2 px-5 active" onClick={() => (navigate(-1))}>Back</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <h2>Please login to reserve a ticket<br></br><Link to="/user/login">Click here to sign In</Link></h2>
            }
            
        </div>
    )
}

export default ReserveTicket;
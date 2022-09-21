import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { createNewTrain } from '../../store/actions/TrainAction';
import NavBar from '../navbar/Navbar';
import n1 from '../assets/n1.jpg';

function CreateTrain() {

    const [trainName, setTrainName] = useState("");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [seatsAvailability, setSeatsAvailability] = useState("");
    const [fareId, setFareId] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    const train = useSelector(state => state.trainReducer.newTrain);

    const handleSubmit = () => {

        let errors = {};

        if (!trainName) {
            errors['trainNameError'] = "*Please enter the train name!";
        }

        if (!source) {
            errors['sourceError'] = "*Please enter the source of the train!";
        }

        if (!destination) {
            errors['destinationError'] = "*Please enter the destination of the train!";
        }

        if (source === destination) {
            errors['samLocationError'] = "*Source location and Destination location should be different!";
        }

        if (!departureTime) {
            errors['departureTimeError'] = "*Please enter the time of departure!";
        }

        if (!arrivalTime) {
            errors['arrivalTimeError'] = "*Please enter the time of arrival time!";
        }

        if (!seatsAvailability) {
            errors['seatsAvailabilityError'] = "*Please enter the number od seats availability!";
        }

        if (!fareId) {
            errors['fareIdError'] = "*Fare Id is required!";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {

                trainName: trainName,
                source: source,
                destination: destination,
                departureTime: departureTime,
                arrivalTime: arrivalTime,
                seatsAvailability: seatsAvailability,
                fareId: fareId
            }

            dispatch(createNewTrain(payload));
            alert("Train details are successfully added with id " + train.trainId);
            navigate("/fare/add");
        }
    }

    return (
        <div>
            {
                myUser !== null ?
                    <div style={{ backgroundImage: `url(${n1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "950px" }}>
                        <NavBar />
                        <div>
                            <h2 style={{ fontSize: "40px", fontFamily: "fantasy" }}><u>Adding Train Details</u></h2><br></br>
                            <div className='container' style={{
                                display: 'inline-grid',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '80vh',
                                fontSize: "20px"
                            }}>
                                <div className="card bg-light text-dark" style={{ width: "600px", height: "100%" }}>
                                    <div className="card-body" style={{ backgroundImage: `url(${n1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                                        <div className='form-group'>
                                            <label htmlFor='trainName'>Train Name :</label>
                                            <input type="text" className='form-control' name="trainName" value={trainName} onChange={train => setTrainName(train.target.value)} placeholder="Train name" />
                                            {
                                                formErrors.trainNameError &&
                                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.trainNameError}</div>
                                            }
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='source'>Source(From)  :</label>
                                            <select name="source" value={source} onChange={train => setSource(train.target.value)}>
                                                <option>Select</option>
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
                                                    formErrors.sourceError &&
                                                    <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.sourceError}</div>
                                                }
                                            </select>
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='destination'>Destination(To)  :</label>
                                            <select name="destination" value={destination} onChange={train => setDestination(train.target.value)}>
                                                <option>Select</option>
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
                                                    formErrors.destinationError &&
                                                    <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.destinationError}</div>
                                                }
                                            </select>
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='departureTime'>Departure Time :</label>
                                            <input type="text" className='form-control' name="departureTime" value={departureTime} onChange={train => setDepartureTime(train.target.value)} placeholder="Departure Time" />
                                            {
                                                formErrors.departureTimeError &&
                                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.departureTimeError}</div>
                                            }
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='arrivalTime'>Arrival Time :</label>
                                            <input type="text" className='form-control' name="arrivalTime" value={arrivalTime} onChange={train => setArrivalTime(train.target.value)} placeholder="Arrival time" />
                                            {
                                                formErrors.arrivalTimeError &&
                                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.arrivalTimeError}</div>
                                            }
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='seatsAvailability'>Seats Availability :</label>
                                            <input type="number" className='form-control' name="seatsAvailability" value={seatsAvailability} onChange={train => setSeatsAvailability(train.target.value)} placeholder="Seats Availability" />
                                            {
                                                formErrors.seatsAvailabilityError &&
                                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.seatsAvailabilityError}</div>
                                            }
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='fareId'>Fare Id :</label>
                                            <input type="number" className='form-control' name="fareId" value={fareId} onChange={train => setFareId(train.target.value)} placeholder="Fare Id" />
                                            {
                                                formErrors.fareIdError &&
                                                <div style={{ textAlign: "start", color: "red", fontSize: "15px" }}>{formErrors.fareIdError}</div>
                                            }
                                        </div>
                                        <div><br></br>
                                            <button className='btn btn-secondary' style={{ float: "left" }} onClick={() => navigate(-1)}>Back</button>
                                            <button className='btn btn-success' style={{ float: "right" }} onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <h2>Please login to Add a Train Details<br></br><Link to="/user/login">Click here to sign In</Link></h2>
            }
        </div>
    )

}

export default CreateTrain;
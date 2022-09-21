import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTrain } from '../../store/actions/TrainAction';
import NavBar from '../navbar/Navbar';
import r from '../assets/r.jpg';

function EditTrain() {

    const train = useSelector(state => state.trainReducer.train);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [trainId] = useState(train.trainId);
    const [trainName, setTrainName] = useState(train.trainName);
    const [source, setSource] = useState(train.source);
    const [destination, setDestination] = useState(train.destination);
    const [departureTime, setDepartureTime] = useState(train.departureTime);
    const [arrivalTime, setArrivalTime] = useState(train.arrivalTime);
    const [seatsAvailability, setSeatsAvailability] = useState(train.seatsAvailability);
    const [fareId] = useState(train.fareId);

    const handleSubmit = () => {

        const payload = {

            trainId: trainId,
            trainName: trainName,
            source: source,
            destination: destination,
            departureTime: departureTime,
            arrivalTime: arrivalTime,
            seatsAvailability: seatsAvailability,
            fareId: fareId
        }

        dispatch(updateTrain(payload));
        alert("Train details are successfully updated with id " + train.trainId);
        navigate(-1);
    }

    return (
        <div style={{ backgroundImage: `url(${r})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
            <NavBar />
            <div>
                <h2 style={{color:"whitesmoke", fontSize:"35px"}}><u>Updating Train Details</u></h2><br></br>
            </div>
            <div className='container' style={{
                display: 'flow-root',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                fontSize: '20px',
                color: 'white',
            }}>
            <div className='form group'>
                <label htmlFor='trainId'>Train Id :</label>
                <input type="number" className='form-control' name="trainId" value={trainId} disabled />
            </div>
            <div className='form-group'>
                <label htmlFor='trainName'>Train Name :</label>
                <input type="text" className='form-control' name="trainName" value={trainName} onChange={train => setTrainName(train.target.value)} />
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
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='departureTime'>Departure Time :</label>
                <input type="text" className='form-control' name="departureTime" value={departureTime} onChange={train => setDepartureTime(train.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='arrivalTime'>Arrival Time :</label>
                <input type="text" className='form-control' name="arrivalTime" value={arrivalTime} onChange={train => setArrivalTime(train.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='seatsAvailability'>Seats Availability :</label>
                <input type="text" className='form-control' name="seatsAvailability" value={seatsAvailability} onChange={train => setSeatsAvailability(train.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='fareId'>Fare Id :</label>
                <input type="number" className='form-control' name="fareId" value={fareId} disabled />
            </div>
            <div><br></br>
                <button className='btn btn-secondary' onClick={() => navigate(-1)} style={{float :"left"}}>Back</button>
                <button className='btn btn-success' onClick={handleSubmit} style={{float:"right"}}>Submit</button>
            </div>
            </div>
        </div>

    )

}

export default EditTrain;
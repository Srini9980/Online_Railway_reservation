import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { deleteTrainDetails, getTrainByFare, getTrainById } from '../../store/actions/TrainAction';
import h from '../assets/h.jpg';
import NavBar from '../navbar/Navbar';

function FetchTrain1() {

    const train = useSelector(state => state.trainReducer.train);
    const fare = useSelector(state => state.trainReducer.fare);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchTrain = () => {
        dispatch(getTrainById(id));
    }

    useEffect(fetchTrain, [id]);

    const deleteTrain = () => {
        dispatch(deleteTrainDetails(id));
        alert("Train is removed successffully");
        navigate(-1);
    }

    return (
        <div style={{ backgroundImage: `url(${h})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "753px" }}>
            <NavBar />
            <div>
                {
                    train !== null &&
                    <div style={{ color: "white", fontSize: "20px", fontFamily: "sans-serif" }}>
                        <h2><u><i>Train Details</i></u></h2><br></br>
                        <p>Train Id : {train.trainId}</p>
                        <p>Train Name : {train.trainName}</p>
                        <p>Source : {train.source}</p>
                        <p>Destination : {train.destination}</p>
                        <p>Departure time : {train.departureTime}</p>
                        <p>Arrival time : {train.arrivalTime}</p>
                        <p>Seat availability : {train.seatsAvailability}</p>
                        <p>Fare Id : {train.fareId}</p><br></br>
                        <Link to={`/train/edit/${train.trainId}`}><button className="btn btn-primary mx-5 active">Edit</button></Link>
                        <button onClick={() => {
                            const confirmBox = window.confirm("Are you sure you want delete this Train details")
                            if (confirmBox === true) { deleteTrain() }
                        }} className="btn btn-danger active">Delete</button>

                        <button onClick={() => navigate(`/fare/add/${train.fareId}`)} className='btn btn-warning active mx-5' >Add Fare</button>

                    </div>
                }
            </div>
            <div><br></br>
                <button className='btn btn-secondary mx-5' onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )
}

export default FetchTrain1;

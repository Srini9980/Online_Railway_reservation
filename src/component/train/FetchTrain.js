import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getTrainByFare, getTrainById } from '../../store/actions/TrainAction';
import h from '../assets/h.jpg';
import NavBar1 from '../navbar/NavBar1';

function FetchTrain() {

    const train = useSelector(state => state.trainReducer.train);
    const fare = useSelector(state => state.trainReducer.fare);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchTrain = () => {
        dispatch(getTrainById(id));
    }

    useEffect(fetchTrain, [id]);

    const getFareDetails = () => {
        dispatch(getTrainByFare(id));
    }

    return (
        <div style={{ backgroundImage: `url(${h})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "753px" }}>
            <NavBar1 />
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
                        <button className="btn btn-info active" onClick={getFareDetails}>View Fare</button>
                        {
                            fare !== null &&
                            <div><br></br>
                                <table border="5px" align="center">
                                    <tr>
                                        <th>Fare Id</th>
                                        <th>Tatkal</th>
                                        <th>Second class (2A)</th>
                                        <th>Sleeper (2S)</th>
                                        <th>First class (3A)</th>
                                        <th>AC class (AC)</th>
                                    </tr>
                                    <tr>
                                        <td>{fare.fareId}</td>
                                        <td>Rs. {fare.tatkal}</td>
                                        <td>Rs. {fare.secondClass}</td>
                                        <td>Rs. {fare.sleeperClass}</td>
                                        <td>Rs. {fare.firstClass}</td>
                                        <td>Rs. {fare.acchairClass}</td>
                                    </tr>
                                </table>
                            </div>
                        }
                    </div>
                }
                <div className='container'><br></br>
                    <button className="btn btn-secondary mr-5 active" onClick={() => navigate(-1)}>Back</button>
                    <button className="btn btn-success active" onClick={() => navigate(`/booking/add/${train.trainId}`)}>Book</button>
                </div>
            </div>
        </div>
    )
}

export default FetchTrain;

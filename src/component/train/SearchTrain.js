import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTrainByRoute } from '../../store/actions/TrainAction';
import g1 from '../assets/g1.png';
import g from '../assets/g.png';

function SearchTrain() {

    const train = useSelector(state => state.trainReducer.trainByRoute);
    const [source] = useState();
    const [destination] = useState();

    const dispatch = useDispatch();

    const searchTrains = () => {
        dispatch(getTrainByRoute(source, destination));
    }

    useEffect(searchTrains, [source, destination]);

    return (
            <div style={{ backgroundImage: `url(${g})`, backgroundRepeat: "no-repeat", backgroundSize: "100%", height:"753px"}}>
                {
                    train !== null ?
                        <div className="container" >
                            <h2 style={{color:"white", fontSize:"40px"}}><u><i>Available trains</i></u></h2><br></br>
                            {
                                train.map((train, index) =>
                                    <div key={index} className="col-sm-3"><br></br>
                                        <Link to = {`${train.trainId}`}>
                                        <div className="card" style={{ width: "200px", height: "300px", backgroundColor: "transparent", color: "white" }}>
                                        <img className="card-image-top" src={g1} alt="Card image" />
                                        <p>Train.No : {train.trainId}</p>
                                        <p>{train.trainName}</p>
                                        <p>Deaparture : {train.departureTime}</p>
                                        <p>Arrival : {train.arrivalTime}</p>
                                        </div>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                        : <h3 style={{fontSize:"45px", color:"white", fontFamily:"cursive"}}>Sorry we could not find any train with this route !!</h3>
                }
            </div>
    )
}

export default SearchTrain;
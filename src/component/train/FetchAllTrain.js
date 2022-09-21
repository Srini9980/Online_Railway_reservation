import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllTrains } from "../../store/actions/TrainAction";
import g1 from '../assets/g1.png';
import g from '../assets/g.png';
import NavBar1 from "../navbar/NavBar1";

function FetchAllTrain() {

    const trains = useSelector(state => state.trainReducer.trains);
    const dispatch = useDispatch();

    const fetchAllTrains = () => {
        dispatch(getAllTrains());
    }

    useEffect(() => {
        fetchAllTrains();
    }, [])

    return (
        <div style={{ backgroundImage: `url(${g})`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
            <NavBar1/>
            <h2 style={{color:"white", fontSize:"40px", fontFamily:'initial'}}><u><i>All Trains List</i></u></h2><br></br><br></br>
            <div className="container">
            <div className="row">
            {
                trains.map((train, index) =>
                    <div key={index} className="col-sm-4">
                        <Link to = {`${train.trainId}`}>
                            <div className="card" style={{ width: "200px", height: "300px", backgroundColor: "transparent", color: "white" }}>
                            <img className="card-image-top" src={g1} alt="Card image" />
                                <h4>{train.trainName}</h4>
                                <p>Source : {train.source}</p>
                                <p>Destination : {train.destination}</p>
                            </div><br></br>
                        </Link>
                    </div>
                )
            }
            </div>
            </div>
        </div>
    )
}

export default FetchAllTrain;
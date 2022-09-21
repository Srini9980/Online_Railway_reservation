import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllFare } from "../../store/actions/FareAction";
import o from '../assets/o.jpg';
import NavBar from "../navbar/Navbar";

function FetchAllFare() {

    const fares = useSelector(state => state.fareReducer.fares);
    const dispatch = useDispatch();

    const fetchallFare = () => {
        dispatch(getAllFare())
    };

    useEffect(() => {
        fetchallFare();
    }, []);

    return (
        <div style={{ backgroundImage: `url(${o})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height:"753px" }}>
            <NavBar/>
            <h2 style={{fontFamily:"monospace", fontSize:"40px", color : "wheat"}}><u>All Fare Details.</u></h2><br></br>
            <div className="container">
                <div className="row">
                    {
                        fares.map((fare, index) =>
                            <div key={index} className="col-sm-4">
                                <Link to={`${fare.fareId}`}>
                                    <div className="card" style={{ width: "300px", height: "100px", backgroundColor: "transparent", fontSize:"30px", color : "white" }}>
                                        <h4>Fare Id : {fare.fareId}</h4>
                                        <p>Tatkal : RS. {fare.tatkal}</p>
                                    </div><br></br><br></br>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )

}

export default FetchAllFare;
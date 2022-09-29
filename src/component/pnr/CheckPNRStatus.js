import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPnrById } from "../../store/actions/PnrAction";
import s from '../assets/s.jpg';
import NavBar1 from "../navbar/NavBar1";

function CheckPNRStatus() {

    const pnr = useSelector(state => state.pnrReducer.pnrById);
    const train = useSelector(state => state.trainReducer.train);
    const booking = useSelector(state => state.bookingReducer.booking);
    const [pnrId, setPnrId] = useState("");
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchPnr = () => {
        dispatch(getPnrById(id));
    }

    useEffect(fetchPnr, [id]);

    return (
        <div style={{ backgroundImage: `url(${s})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height:"753px",color: "white" }}>
            <NavBar1 />
            <h2 style={{ fontSize: "40px", fontFamily: "initial" }}><u>PNR Status</u></h2><br></br>
            <div style={{ fontSize: "20px" }}>
                {
                    pnr !== null ?
                        <div>
                            <p>Pnr No : {pnr.pnrId}</p>
                            <p>Status : {pnr.pnrStatus}</p>
                            <p>Booking id : {pnr.bookingId}</p>
                            {
                                booking !== null &&
                                <div>
                                    {/* <p>Booking Id : {booking.bookingId}</p> */}
                                    <p>Passenger Name : {booking.passengerName}</p>
                                    <p>Age : {booking.age}</p>
                                    <p>Gender : {booking.gender}</p>
                                    <p>Journey Date : {booking.dateOfJourney}</p>
                                </div>
                            }
                            <p>Train Id : {pnr.trainId}</p>
                            {
                                train !== null &&
                                <div>
                                    <p>Train Id : {train.trainId}</p>
                                    <p>Train name : {train.trainName}</p>
                                    <p>Source : {train.source}</p>
                                    <p>Destination : {train.destination}</p>
                                    <p>Departure time : {train.departureTime}</p>
                                    <p>Arrival time : {train.arrivalTime}</p>
                                </div>
                            }
                        </div>
                        : <h2>Still the PNR status is not updated</h2>
                }
                <div><br></br>
                    <button className="btn btn-primary active" onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default CheckPNRStatus;
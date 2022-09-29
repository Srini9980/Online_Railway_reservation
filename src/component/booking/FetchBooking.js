import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { cancelBooking, getBookingById } from '../../store/actions/BookingAction';
import { getPnrById } from "../../store/actions/PnrAction";
import m from '../assets/m.jpg';
import m1 from '../assets/m1.jfif';
import NavBar1 from '../navbar/NavBar1';

function FetchBooking() {

    const booking = useSelector(state => state.bookingReducer.booking);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchBooking = () => {
        dispatch(getBookingById(id));
    }

    useEffect(fetchBooking, [id]);

    const deleteBooking = () => {
        dispatch(cancelBooking(id));
        alert("Ticket canceled successfully");
        navigate("/");
    }

    const pnr = useSelector(state => state.pnrReducer.pnrById);
    const train = useSelector(state => state.trainReducer.train);
    const [pnrId, setPnrId] = useState("");
    const { id1 } = useParams();

    const fetchPnr = () => {
        dispatch(getPnrById(id1));
    }

    useEffect(fetchPnr, [id1]);

    return (
        <div style={{ backgroundImage: `url(${m})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "830px" }}>
            <NavBar1 />
            <h2 style={{ fontSize: "45px", color: "whitesmoke", fontFamily: "cursive" }}>Booking Details</h2><br></br>
            <div className='container' style={{
                display: 'inline-grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                fontSize: "20px"
            }}>
                {
                    booking !== null &&
                    <div className="card bg-light text-dark" style={{ width: "500px", height: "100%" }}>
                        <div className="card-body" style={{ backgroundImage: `url(${m1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", color: "white" }}>
                            <p>Booking Id : {booking.bookingId}</p>
                            <p>Passenger name : {booking.passengerName}</p>
                            <p>Age : {booking.age}</p>
                            <p>Gender : {booking.gender}</p>
                            <p>Journey Date : {booking.dateOfJourney}</p>
                            <p>Seat type : {booking.seatType}</p>
                            <p>Train Id : {booking.trainId}</p>
                            <p>PNR number : {booking.pnrId}</p>
                            <button style={{ float: "right" }} className="btn btn-danger" onClick={() => {
                                const confirmBox = window.confirm("Are you sure you want cancel this ticket")
                                if (confirmBox === true) { deleteBooking() }
                            }}>Cancel Ticket</button>
                            <button style={{ float: "left" }} className='btn btn-secondary' onClick={() => navigate(-1)}>Back</button><br></br>
                            <div><br></br>
                                <h2>Check PNR Status</h2>
                                <div className='form-group'>
                                    <label htmlFor='pnrId'>PNR No</label>
                                    <input type="number" className="form-control" name="pnrId" value={id1} onChange={pnr => setPnrId(pnr.target.value)} placeholder="PNR no" />
                                </div>
                                <Link to={`/pnr/status/${pnrId}`}><button className='btn btn-info active' onClick={fetchPnr}>Check Status</button></Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default FetchBooking;
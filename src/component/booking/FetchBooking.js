import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { cancelBooking, getBookingById } from '../../store/actions/BookingAction';
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
        navigate("/booking/all");
    }

    return (
        <div style={{ backgroundImage: `url(${m})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height:"753px" }}>
            <NavBar1/>
            <h2 style={{fontSize:"45px", color:"whitesmoke", fontFamily:"cursive"}}>Booking Details</h2><br></br>
            <div className='container' style={{
                display: 'inline-grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                fontSize : "20px"
            }}>
                {
                    booking !== null &&
                    <div className="card bg-light text-dark" style={{ width: "500px", height: "100%" }}>
                        <div className="card-body" style={{ backgroundImage: `url(${m1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", color : "white" }}>
                            <p>Booking Id : {booking.bookingId}</p>
                            <p>Passenger name : {booking.passengerName}</p>
                            <p>Age : {booking.age}</p>
                            <p>Gender : {booking.gender}</p>
                            <p>Journey Date : {booking.dateOfJourney}</p>
                            <p>Seat type : {booking.seatType}</p><br></br>
                            <button style={{float:"right"}}  className="btn btn-danger" onClick={deleteBooking}>Cancel Ticket</button>
                            <button style={{float:"left"}} className='btn btn-secondary' onClick={() => navigate(-1)}>Back</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default FetchBooking;
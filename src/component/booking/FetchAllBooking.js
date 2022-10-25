import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllBookings } from "../../store/actions/BookingAction";
import l from '../assets/l.jpg';
import NavBar1 from "../navbar/NavBar1";

function FetchAllBooking() {

    const bookings = useSelector(state => state.bookingReducer.bookings);
    const dispatch = useDispatch();

    const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    const fetchAllBookings = () => {
        dispatch(getAllBookings());
    }

    useEffect(() => {
        fetchAllBookings();
    }, []);

    return (
        <div>
            <NavBar1 />
            {
                myUser !== null ?

                    <div style={{ backgroundImage: `url(${l})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "683px" }}>
                        <h2 style={{fontFamily:"revert", color:"navy", fontSize:"38px"}}><u><i>All Bookings</i></u></h2><br></br>
                        <div className="container">
                            <div className="row">
                                {
                                    bookings.map((booking, index) =>
                                        <div key={index} className="col-sm-4">
                                            <Link to={`${booking.bookingId}`}>
                                                <div className="card" style={{ width: "300px", height: "100px", backgroundColor: "transparent" }}>
                                                    <h4 style={{ fontSize: "30px" }}>{booking.passengerName}</h4>
                                                    <p style={{ fontSize: "25px" }}>{booking.dateOfJourney}</p>
                                                </div><br></br><br></br>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    : <h2>Please login to view the details !!</h2>
            }
        </div>
    )
}

export default FetchAllBooking;
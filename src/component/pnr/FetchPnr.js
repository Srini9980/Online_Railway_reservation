import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deletePnrDetails, getPnrById } from '../../store/actions/PnrAction';
import NavBar from '../navbar/Navbar';
import s2 from '../assets/s2.jfif';

function FetchPnr() {

    const pnr = useSelector(state => state.pnrReducer.pnrById);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchPnr = () => {
        dispatch(getPnrById(id));
    }

    // eslint-disable-next-line
    useEffect(fetchPnr, [id]);

    const deletePnr = () => {
        dispatch(deletePnrDetails(id));
        alert("PNR details removed succcessfully");
        navigate(-1);
    }

    return (
        <div style={{ backgroundImage: `url(${s2})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "753px" }}>
            <NavBar />
            <h2 style={{fontSize:"40px", color:"white"}}><u><i>PNR Details</i></u></h2>
            <div className='container' style={{
                display: 'inline-grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                fontSize: "20px",
                color : "white"
            }}>
                {
                    pnr !== null &&
                    <div>
                        <p>PNR No : {pnr.pnrId}</p>
                        <p>Status : {pnr.pnrStatus}</p>
                        <p>Seat no : {pnr.seatNo}</p>
                        <p>Booking Id : {pnr.bookingId}</p>
                        <p>Train Id : {pnr.trainId}</p>
                    </div>
                }
                <div>
                    <button className='btn btn-secondary active' style={{ float: "left" }} onClick={() => navigate(-1)}>Back</button>
                    <button className='btn btn-danger active' style={{ float: "right" }} onClick={() => {
                        const confirmBox = window.confirm("Are you sure you want delete this PNR status")
                        if (confirmBox === true) { deletePnr() }
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )

}

export default FetchPnr;
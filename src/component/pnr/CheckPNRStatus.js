import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPnrById } from "../../store/actions/PnrAction";

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
        <div>
            <h2>PNR Status</h2>
            <div className='form-group'>
                <label htmlFor='pnrId'>PNR No</label>
                <input type="number" className="form-control" name="pnrId" value={pnrId} onChange={pnr => setPnrId(id)} placeholder="PNR no" />
            </div>
            <button onClick={fetchPnr()}>Check Status</button>
            {
                pnr !== null &&
                <div>
                    <p>Pnr No : {pnr.pnrId}</p>
                    <p>Status : {pnr.pnrStatus}</p>
                    <p>Booking id : {pnr.bookingId}</p>
                    <p>Train Id : {pnr.trainId}</p>
                </div>
            }
        </div>
    )
}

export default CheckPNRStatus;
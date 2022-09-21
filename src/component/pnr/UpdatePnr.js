import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPnr } from '../../store/actions/PnrAction';

function UpdatePnr() {

    const [pnrStatus, setPnrStatus] = useState("");
    const [bookingId, setBookingId] = useState("");
    const [trainId, setTrainId] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pnr = useSelector(state => state.pnrReducer.newPnr)

    const handleSubmit = () => {

        let errors = {};

        if (pnrStatus === "select") {
            errors['pnrStatusError'] = "*Please fill the PNR status!";
        }

        if (!bookingId) {
            errors['bookingIdError'] = "*Booking id is required!"
        }

        if (!trainId) {
            errors['trainIdError'] = "*Train id is required!"
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                pnrStatus: pnrStatus,
                bookingId: bookingId,
                trainId: trainId
            }

            dispatch(createPnr(payload));
            alert("PNR is updated with id " + pnr.pnrId)
            navigate("");
        }
    }

    return (
        <div>
            <div>
                <h2>PNR</h2><br></br>
                <div className="form-group">
                    <label htmlFor='pnrStatus'>PNR status:</label>
                    <select name="pnrStatus" value={pnrStatus} onChange={pnr => setPnrStatus(pnr.target.value)}>
                        <option>select</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="waitingList">Waiting-List</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="failed">Failed</option>
                    </select>
                    {
                        formErrors.pnrStatusError &&
                        <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.pnrStatusError}</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor='bookingId'>Booking Id</label>
                    <input type="number" className="form-control" name="bookingId" value={bookingId} onChange={pnr => setBookingId(pnr.target.value)} placeholder="Booking id" />
                    {
                        formErrors.bookingIdError &&
                        <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.bookingIdError}</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor='trainId'>Train Id</label>
                    <input type="number" className="form-control" name="trainId" value={trainId} onChange={pnr => setTrainId(pnr.target.value)} placeholder="Train id" />
                    {
                        formErrors.trainIdError &&
                        <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.trainIdError}</div>
                    }
                </div>
                <div>
                    <button className='btn btn-secondary mx-5' onClick={() => navigate(-1)}>Back</button>
                    <button className='btn btn-success m-5' onClick={handleSubmit}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default UpdatePnr;
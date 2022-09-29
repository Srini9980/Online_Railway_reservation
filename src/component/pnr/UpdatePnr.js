import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createPnr } from '../../store/actions/PnrAction';
import NavBar from '../navbar/Navbar';
import t from '../assets/t.jfif';

function UpdatePnr() {

    const pnr = useSelector(state => state.pnrReducer.newPnr);

    const { id1 } = useParams();
    const { id2 } = useParams();
    const { id3 } = useParams();

    const [pnrId, setPnrId] = useState(id1);
    const [pnrStatus, setPnrStatus] = useState("");
    const [bookingId, setBookingId] = useState(id2);
    const [trainId, setTrainId] = useState(id3);

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                pnrId: pnrId,
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
        <div style={{ backgroundImage: `url(${t})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "753px" }}>
            <NavBar />
            <h2 style={{ fontSize: "40px", color: "whitesmoke" }}><u><i>Update PNR Status</i></u></h2><br></br>
            <div className='container' style={{
                display: 'inline-grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                fontSize: "20px",
                color: "whitesmoke"
            }}>
                <div className="form-group">
                    <label htmlFor='pnrId'>PNR No</label>
                    <input type="number" className="form-control" name="pnrId" value={pnrId} onChange={pnr => setPnrId(id1)} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor='pnrStatus'>PNR status:</label>
                    <select name="pnrStatus" value={pnrStatus} onChange={pnr => setPnrStatus(pnr.target.value)}>
                        <option>select</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="waitingList">Waiting-List</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                    {
                        formErrors.pnrStatusError &&
                        <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.pnrStatusError}</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor='bookingId'>Booking Id</label>
                    <input type="number" className="form-control" name="bookingId" value={bookingId} onChange={pnr => setBookingId(id2)} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor='trainId'>Train Id</label>
                    <input type="number" className="form-control" name="trainId" value={trainId} onChange={pnr => setTrainId(id3)} disabled />
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
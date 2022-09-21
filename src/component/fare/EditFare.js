import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFare } from '../../store/actions/FareAction';
import q from '../assets/q.jpg';
import NavBar from '../navbar/Navbar';

function EditFare() {

    const fare = useSelector(state => state.fareReducer.fare);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fareId] = useState(fare.fareId);
    const [tatkal, setTatkal] = useState(fare.tatkal);
    const [secondClass, setSecondClass] = useState(fare.secondClass);
    const [sleeperClass, setSleeperClass] = useState(fare.sleeperClass);
    const [firstClass, setFirstClass] = useState(fare.firstClass);
    const [acchairClass, setAcchairClass] = useState(fare.acchairClass);

    const handleSubmit = () => {

        const payload = {
            fareId: fareId,
            tatkal: tatkal,
            secondClass: secondClass,
            sleeperClass: sleeperClass,
            firstClass: firstClass,
            acchairClass: acchairClass
        }

        dispatch(updateFare(payload));
        alert("Fare is updated successfully with id " + fare.fareId);
        navigate(-1);
    }

    return (
        <div style={{ backgroundImage: `url(${q})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height:"753px" }}>
            <NavBar/>
            <h2 style={{color:"white", fontSize:"40px", fontFamily:"-moz-initial"}}><u>Edit Fare</u></h2><br></br>
            <div className='container' style={{
                display: 'inline-grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                fontSize: "20px",
                color : "whitesmoke"
            }}>
                <div className="c" style={{ width: "600px", height: "100%" }}>
                    <div className='form-group'>
                        <label htmlFor='fareId'>Fare Id</label>
                        <input type="number" className='form-control' name="fareId" value={fareId} disabled />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='tatkal'>Tatkal</label>
                        <input type="number" className='form-control' name="tatkal" value={tatkal} onChange={fare => setTatkal(fare.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='secondClass'>Second Class</label>
                        <input type="number" className='form-control' name="secondClass" value={secondClass} onChange={fare => setSecondClass(fare.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='sleeperClass'>Sleeper Class</label>
                        <input type="number" className='form-control' name="sleeperClass" value={sleeperClass} onChange={fare => setSleeperClass(fare.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='firstClass'>First Class</label>
                        <input type="number" className='form-control' name="firstClass" value={firstClass} onChange={fare => setFirstClass(fare.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='acchairClass'>AC Chair Class</label>
                        <input type="number" className='form-control' name="acchairClass" value={acchairClass} onChange={fare => setAcchairClass(fare.target.value)} />
                    </div>
                    <div><br></br>
                        <button style={{float:"left"}} onClick={() => navigate(-1)} className='btn btn-secondary'>Back</button>
                        <button style={{float:"right"}} onClick={handleSubmit} className='btn btn-success'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EditFare;
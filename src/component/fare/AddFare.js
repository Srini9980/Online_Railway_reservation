import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createNewFare } from '../../store/actions/FareAction';
import n from '../assets/n.jpg';
import NavBar from '../navbar/Navbar';

function AddFare() {

    const fare = useSelector(state => state.fareReducer.newFare);
    const { id } = useParams();

    const [fareId, setfareId] = useState(id);
    const [tatkal, setTatkal] = useState("");
    const [secondClass, setSecondClass] = useState("");
    const [sleeperClass, setSleeperClass] = useState("");
    const [firstClass, setFirstClass] = useState("");
    const [acchairClass, setAcchairClass] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {

        let errors = {};

        if (!tatkal) {
            errors['tatkalError'] = "*Tatkal price is required!";
        }

        else if(tatkal <= 0) {
            errors['tatkalError'] = "*Tatkal price should not be negative!"
        }

        if (!secondClass) {
            errors['secondClassError'] = "*Second Class price is required!";
        }

        else if(secondClass <= 0) {
            errors['secondClassError'] = "*secondClass price should not be negative!"
        }

        if (!sleeperClass) {
            errors['sleeperClassError'] = "*Sleeper class price is required!";
        }

        else if(sleeperClass <= 0) {
            errors['sleeperClassError'] = "*sleeperClass price should not be negative!"
        }

        if (!firstClass) {
            errors['firstClassError'] = "*First class price is required!";
        }

        else if(firstClass <= 0) {
            errors['firstClassError'] = "*firstClass price should not be negative!"
        }

        if (!acchairClass) {
            errors['acchairClassError'] = "*Ac Chair class price is required!";
        }

        else if(acchairClass <= 0) {
            errors['acchairClassError'] = "*Ac chair price should not be negative!"
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                fareId : fareId,
                tatkal: tatkal,
                secondClass: secondClass,
                sleeperClass: sleeperClass,
                firstClass: firstClass,
                acchairClass: acchairClass
            }

            dispatch(createNewFare(payload));
            alert("Fare detils is added successfully");
            navigate("/train1/all")
        }
    }

    return (
        <div style={{ backgroundImage: `url(${n})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height:"840px"}}>
            <NavBar/>
            <h2 style={{color:"white", fontSize:"40px", fontFamily:"initial"}}><u>Add Fare Details</u></h2><br></br>
            <div className='container-fluid' style={{
                display: 'inline-grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                fontSize: "20px",
                color : "white"
            }}>
                <div className="" style={{ width: "500px", height: "100%", backgroundColor:"transparent" }}>
                    <div className='form-group'>
                        <label htmlFor='fareId'>Fare Id</label>
                        <input type="number" className='form-control' name="fareId" value={fareId} onChange={fare => setfareId(id)} disabled />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='tatkal'>Tatkal</label>
                        <input type="number" className='form-control' name="tatkal" value={tatkal} onChange={fare => setTatkal(fare.target.value)} placeholder="Tatkal" />
                        {
                            formErrors.tatkalError &&
                            <div style={{ textAlign: "start", color: "red" }}>{formErrors.tatkalError}</div>
                        }
                    </div>
                    <div className='form-group'>
                        <label htmlFor='secondClass'>Second Class</label>
                        <input type="number" className='form-control' name="secondClass" value={secondClass} onChange={fare => setSecondClass(fare.target.value)} placeholder="Second Class" />
                        {
                            formErrors.secondClassError &&
                            <div style={{ textAlign: "start", color: "red" }}>{formErrors.secondClassError}</div>
                        }
                    </div>
                    <div className='form-group'>
                        <label htmlFor='sleeperClass'>Sleeper Class</label>
                        <input type="number" className='form-control' name="sleeperClass" value={sleeperClass} onChange={fare => setSleeperClass(fare.target.value)} placeholder="Sleeper Class" />
                        {
                            formErrors.sleeperClassError &&
                            <div style={{ textAlign: "start", color: "red" }}>{formErrors.sleeperClassError}</div>
                        }
                    </div>
                    <div className='form-group'>
                        <label htmlFor='firstClass'>First Class</label>
                        <input type="number" className='form-control' name="firstClass" value={firstClass} onChange={fare => setFirstClass(fare.target.value)} placeholder="First Class" />
                        {
                            formErrors.firstClassError &&
                            <div style={{ textAlign: "start", color: "red" }}>{formErrors.firstClassError}</div>
                        }
                    </div>
                    <div className='form-group'>
                        <label htmlFor='acchairClass'>AC Chair Class</label>
                        <input type="number" className='form-control' name="acchairClass" value={acchairClass} onChange={fare => setAcchairClass(fare.target.value)} placeholder="ACChair Class" />
                        {
                            formErrors.acchairClassError &&
                            <div style={{ textAlign: "start", color: "red" }}>{formErrors.acchairClassError}</div>
                        }
                    </div>
                    <div><br></br>
                        <button className='btn btn-secondary' onClick={() => navigate(-1)} style={{float : "left"}}>Back</button>
                        <button className='btn btn-success' style={{float : "right"}} onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddFare;
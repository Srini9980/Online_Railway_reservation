import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteFareDetails, getFareById } from '../../store/actions/FareAction';
import p from '../assets/p.jfif';
import p1 from '../assets/p1.webp';
import NavBar from '../navbar/Navbar';

function FetchFare() {

    const fare = useSelector(state => state.fareReducer.fare);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchFare = () => {
        dispatch(getFareById(id))
    };

    useEffect(fetchFare, [id]);

    const deleteFare = () => {
        dispatch(deleteFareDetails(id));
        alert("Fare is removed successfully");
        navigate(-1);
    }

    return (
        <div style={{ backgroundImage: `url(${p})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height:"753px" }}>
            <NavBar/>
            <h2 style={{fontSize:"45px", fontFamily:"fantasy"}}><u>Fare Details</u></h2><br></br>
            <div className='container' style={{
                display: 'inline-grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                fontSize: "20px"
            }}>
                {
                    fare !== null &&
                    <div className="card bg-light text-dark" style={{ width: "500px", height: "100%" }}>
                        <div className="card-body" style={{ backgroundImage: `url(${p1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", color: "black" }}>
                                <p> Fare Id : {fare.fareId}</p>
                                <p>Tatka : Rs. {fare.tatkal}</p>
                                <p>Second class : Rs. {fare.secondClass}</p>
                                <p>Sleeper class : Rs. {fare.sleeperClass}</p>
                                <p>First class : Rs. {fare.firstClass}</p>
                                <p>AC chair class : Rs. {fare.acchairClass}</p><br></br>
                                <Link to={`/fare/edit/${fare.fareId}`}><button style={{float : "left"}} className='btn btn-info'>Edit</button></Link>
                                <button onClick={deleteFare} style={{float:"right"}} className='btn btn-danger'>Delete</button>
                        </div>
                        <button onClick={() => navigate(-1)} className='btn btn-secondary'>Back</button>
                    </div>
                }
            </div>
        </div>
    )

}

export default FetchFare;
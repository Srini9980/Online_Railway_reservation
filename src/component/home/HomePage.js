import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTrainByRoute } from '../../store/actions/TrainAction';
import a from '../assets/a.jpg'
import a1 from '../assets/a1.jpg';
import NavBar1 from '../navbar/NavBar1';

function HomePage() {

    const [source, setSource] = useState();
    const [destination, setDestination] = useState();

    const dispatch = useDispatch();

    const searchTrains = () => {
        dispatch(getTrainByRoute(source, destination));
    }

    useEffect(searchTrains, [source, destination]);

    return (
        <div>
            <NavBar1 />
        <div className="container-fluid" style={{ backgroundImage: `url(${a})`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}><br></br>
            <h2 style={{ color: "whitesmoke" }}>WELCOME! </h2><h3 style={{ color: "wheat" }}>to Online - Railway - Reservation</h3>
            <div className='container' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'right',
                height: '80vh',
            }}>
                <div className="card bg-light text-dark" style={{ width: "320px", height: "480px", borderRadius: "3em" }}>
                    <div className="card-body" style={{ backgroundImage: `url(${a1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", borderRadius: "3em" }}>
                        <h4 className="card-title" style={{ fontFamily: "roboto", fontSize: "35px", color: "white" }}><b>Search Train</b></h4><br></br>
                        <div className='form-group' style={{ fontFamily: "serif", fontSize: "27px", color: "white" }}>
                                    <label htmlFor='source'>Source(From)  :</label><br></br>
                                    <select name="source" value={source} onChange={train => setSource(train.target.value)}>
                                        <option>Select</option>
                                        <option value="bangalore">Bangalore</option>
                                        <option value="chennai">Chennai</option>
                                        <option value="hyderabad">Hyderabad</option>
                                        <option value="mumbai">Mumbai</option>
                                        <option value="pune">Pune</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="jaipur">Jaipur</option>
                                        <option value="hosur">Hosur</option>
                                        <option value="vizag">Vizag</option>
                                        <option value="mysore">Mysore</option>
                                    </select>
                                </div>
                                <div className='form-group' style={{ fontFamily: "serif", fontSize: "27px", color: "white" }}>
                                    <label htmlFor='destination'>Destination(To)  :</label><br></br>
                                    <select name="destination" value={destination} onChange={train => setDestination(train.target.value)}>
                                        <option>Select</option>
                                        <option value="bangalore">Bangalore</option>
                                        <option value="chennai">Chennai</option>
                                        <option value="hyderabad">Hyderabad</option>
                                        <option value="mumbai">Mumbai</option>
                                        <option value="pune">Pune</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="jaipur">Jaipur</option>
                                        <option value="hosur">Hosur</option>
                                        <option value="vizag">Vizag</option>
                                        <option value="mysore">Mysore</option>
                                    </select>
                                </div>
                        <div><br></br>
                            <Link style={{ alignItems: "center" }} to={"/train/search"} className='btn btn-success'>Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePage;
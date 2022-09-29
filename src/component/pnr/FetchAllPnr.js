import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllPnr } from "../../store/actions/PnrAction";
import NavBar from "../navbar/Navbar";
import s1 from '../assets/s1.jfif';

function FetchAllPnr() {

    const pnrs = useSelector(state => state.pnrReducer.pnrs);
    const dispatch = useDispatch();

    const fetchAllPnr = () => {
        dispatch(getAllPnr())
    };

    useEffect(() => {
        fetchAllPnr();
    }, []);

    return (
        <div style={{ backgroundImage: `url(${s1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height:"753px", color:"whitesmoke"}}>
            <NavBar/>
            <h2 style={{fontSize:"40px", fontFamily:"serif"}}><u>All PNR List</u></h2><br></br>
            <div className="container">
                <div className="row">
                    {
                        pnrs.map((pnr, index) => 
                        <div key={index} className="col-sm-3">
                            <Link to={`${pnr.pnrId}`}>
                                <div className="card" style={{width:"300px", height:"100px", backgroundColor:"transparent", fontSize : "30px", color:"white"}}>
                                    <h4>PNR No : {pnr.pnrId}</h4>
                                    <p>Status : {pnr.pnrStatus}</p>
                                </div><br></br><br></br>
                            </Link>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )

}

export default FetchAllPnr;
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getFareById } from '../../store/actions/FareAction';
import NavBar1 from '../navbar/NavBar1';
import pa from '../assets/pa.jfif';

function PaymentGateway() {

    const fare = useSelector(state => state.fareReducer.fare);
    const [seatType] = useState("");
    const [amount, setAmount] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    const fetchFare = () => {
        dispatch(getFareById(id));
    };

    useEffect(fetchFare, [id]);


    const handleSubmit = (e) => {

        e.preventDefault();
        if (amount === "") {
            alert("please select seat type of youe ticket");
        }
        else {
            var options = {
                key: "rzp_test_2YYLDZESNoobdF",
                key_secret: "8vR1Od2afmaeHfae4q0bbZpu",
                amount: amount * 100,
                currency: "INR",
                name: "ONLINE_RAILWAY_RESERVATION",
                description: "for ticket rservation",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                    alert("Payment successfull!!!!");
                    navigate("/");

                },
                prefill: {
                    name: "",
                    email: "srinivasseenu59790@gmail.com",
                    contact: "9980782236"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "white"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }
    return (
        <div>
            <NavBar1 />
            {
                myUser !== null ?
                    <div style={{ backgroundImage: `url(${pa})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "753px" }}>
                        <h2 style={{ fontSize: "45px", color: "whitesmoke" }}><i>Payment </i></h2><br></br>
                        <div className='container-fluid' style={{
                            display: 'inline-grid',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '30vh',
                            fontSize: "25px",
                            color: "whitesmoke"
                        }}>
                            {
                                fare !== null &&
                                <div className='form-group'>
                                    <label htmlFor='amount'>Seat Type :</label><br></br>
                                    <select name="amount" value={amount} onChange={e => setAmount(e.target.value)}>
                                        <option >select</option>
                                        <option value={fare.tatkal}>Tatkal</option>
                                        <option value={fare.secondClass}>Second Class (2A)</option>
                                        <option value={fare.sleeperClass}>Sleeper (2S)</option>
                                        <option value={fare.firstClass}>First Class (3A)</option>
                                        <option value={fare.acchairClass}>AC Class (AC)</option>
                                    </select>
                                </div>
                            }
                            <div className='form-group'>
                                <label htmlFor='amount'>Amount :</label>
                                <input type="text" className='form-control' name="amount" value={amount} onChange={amount => setAmount(seatType)} disabled />
                            </div>
                        </div>
                        <button onClick={handleSubmit} className='btn btn-success active'>submit</button>
                    </div>
                    : <h2>Please login to reserve a ticket</h2>
            }
        </div>

    )

}
export default PaymentGateway;
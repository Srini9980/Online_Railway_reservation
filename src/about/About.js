import React from "react";
import NavBar1 from "../component/navbar/NavBar1";

function About() {

    return (
        <div>
            <NavBar1 />
            <h2 style={{backgroundColor:"grey", color:"white", fontFamily:"cursive", fontSize:"40px"}}><u><i>About Us</i></u></h2><br></br>
            <div className="container-fluid" style={{textAlign:"start"}}>
            <h3 style={{color:"steelblue", fontSize:"35px"}}>Railways</h3>
            <p style={{fontSize:"19px"}}>Indian Railway Catering and Tourism Corporation Ltd. (IRCTC) is a “Mini Ratna (Category-I)” Central Public Sector 
                Enterprise under Ministry of Railways, Government of India. IRCTC was incorporated on 27th September, 1999 as an 
                extended arm of the Indian Railways to upgrade, professionalize and manage the catering and hospitality services at 
                stations, on trains and other locations and to promote domestic and international tourism through development of budget 
                hotels, special tour packages, information & commercial publicity and global reservation systems. The authorized capital
                of the company is 250 crores and paid up capital is 160 crores. It's registered and Corporate Office is situated at New 
                Delhi.</p><br></br>
                </div>
                <div className="container-fluid" style={{textAlign:"start"}}>
                    <h3 style={{color:"steelblue", fontSize:"30px"}}>The core activities of the Company are detailed below:</h3>
                    <ul style={{fontSize:"19px"}}>
                        <li>Catering & Hospitality</li>
                        <li>Internet Ticketing</li>
                        <li>Travel &Tourism</li>
                        <li>Packaged Drinking Water (Rail Neer)</li>
                    </ul><br></br>
                </div>
                <div className="container-fluid" style={{textAlign:"start"}}>
                    <h3 style={{color:"steelblue", fontSize:"30px"}}>At present, the Company operates through:</h3>
                    <ol style={{fontSize:"19px"}}>
                        <li>Fourteen Rail Neer Plants at Nangloi-Delhi, Danapur-Bihar, Palur-Tamil Nadu, Ambernath-Maharashtra, Amethi 
                            (Uttar Pradesh), Parassala-, Tamil Nadu, Bilaspur (Chhatisgarh) Hapur (Uttar Pradedh), Sanand- Gujaratd, 
                            Mandideep-Madhya Pradesh, Jagiroad-Assam, Maneri-(Madhya Pradesh), Nagpur, (Maharashtra) and 
                            Sankrail-Kolkatta</li>
                        <li>Eleven Base Kitchens at located at New Delhi, Howrah, Ahmedabad, Patna, Mumbai Central, Mumbai CST, 
                            Ballarshah, Nagpur, Balasore, Sealdah and Kharagpur Jn 5 Zonal Offices, namely, New Delhi, Mumbai, Kolkata, 
                            Chennai, Secundrabad</li>
                        <li>Five Zonal Offices at New Delhi, Mumbai, Kolkata, Chennai & Secundrabad</li>
                        <li>Ten Regional Offices at Lucknow, Chandigarh, Jaipur, Bhopal, Ahmadabad, Guwahati, Bhubaneswar, Patna, 
                            Ernakulam and Bangalore</li>
                        <li>One Internet Ticketing Office at New Delhi</li>
                        <li>One Tourism office at New Delhi.</li>
                    </ol>
                </div>
        </div>
    );

}

export default About;
import React from "react";
import clear from '../weather-icons/clear.svg';
import mostlycloudy from '../weather-icons/mostlycloudy.svg';
import '../App.css'


 function Footer(){
    return(  
        <div className="footer">
        <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>19°C</p></div>
        <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>4°C</p></div>
        <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>9°C</p></div>
        <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>6°C</p></div>
        <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>6°C</p></div>
        <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>9°C</p></div>
        <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>3°C</p></div>
        <div className="tempInOneHour"><p>03:00</p><p><img src={mostlycloudy}></img></p><p>9°C</p></div>
        </div>
)
}

export default Footer

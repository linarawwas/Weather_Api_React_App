import React from "react";
import mostlycloudy from '.././weather-icons/mostlycloudy.svg';
import '../App.css';

function Body (){
return(  
        <div className="body">      
        <img src={mostlycloudy} alt="" />
        <h3>overcast clouds</h3>
        <div className='one'><p className='strong'>Tempreture</p><p>10C to 11C</p></div>
        <div className='two'><p className='strong'>humidity</p><p>78%</p><p className='strong'>pressure</p><p>100.48</p>
        </div>
        </div>
    )
}
export default Body;
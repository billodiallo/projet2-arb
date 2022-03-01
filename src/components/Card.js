import React from "react";
import '../css/styles.css'
import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'

const Card = () => {

    return (
        <div className="card"> 
        <img src ={katie} alt='katie' className="card--image"/> 
        <div className="card--star">
            <img src={star} alt="sta" className="star--image" />
            <span>5.0</span>
            <span className="gray">(6) .</span>
            <span className="gray">USA .</span>
           </div>
            
           <p>Life lessons with katie zeferes</p> 
            <p> <span className="bold">From $136 </span> / person</p>

        </div>
        
            
    )

}

export default Card;

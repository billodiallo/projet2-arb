import React from "react";
import '../css/styles.css'
import grid from '../images/photo-grid.png'

const Hero = () => {

    return (
        <section className="hero">  
            <img src= {grid} alt="" className="hero--photo"/>
            <h1 className="hero-header">Online experience</h1>
            <p className="hero--text">Join unique interactives activities led by ones-of-kind host-all without leaving home</p>
        </section>
    )

}

export default Hero;

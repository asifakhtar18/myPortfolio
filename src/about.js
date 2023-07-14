import React from "react";
import './styles/about.css'


export default function About(){
    return(
        <div className="about-container">
             <img src={require('./imgs/main.png')} alt="main" className="main-img" />
            <div className="about-text">
                <p>I am a web developer with a passion for creating dynamic and interactive websites. 
                I enjoy working with modern technologies such as <br/> <strong> React, 
                JavaScript, HTML, and CSS.</strong>
            </p>
            </div>
           
            
            <br/>
        </div>
    )
}
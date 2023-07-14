import React, { useEffect, useState } from "react";
import './styles/skills.css'
import { db } from "./firebase";

export default function Skills(){

    const [skills , setSkills] = useState([])
       
    useEffect(() => {
         db.collection('skills')
         .onSnapshot( snapshot =>{
            setSkills(snapshot.docs.map( doc => ({
                url: doc.data()
            })))
         })
       
       
    } , [])

 
    

    return(
        <div className="skills-container">
            <h1 className="skill-header">Skills <br/> <br/> </h1>
            <div className="skill-cube">
            {
                skills.map(skill => (

                    
                        <div className="cube">
                        <div className="face front"><img src={skill.url.url} className="skill-img" alt="skill"/></div>
                        <div className="face back"><img src={skill.url.url} className="skill-img" alt="skill"/></div>
                        <div className="face right"><img src={skill.url.url} className="skill-img" alt="skill"/></div>
                        <div className="face left"><img src={skill.url.url} className="skill-img" alt="skill"/></div>
                        <div className="face top"><img src={skill.url.url} className="skill-img" alt="skill"/></div>
                        <div className="face bottom"><img src={skill.url.url} className="skill-img" alt="skill"/></div>
                    </div>
                    

                ))
            }
            </div>


            

        </div>
    )
}
import React, { useEffect, useState } from 'react'
import './styles/project.css'
import { db } from './firebase'

export default function Projects(){
        const [projects , setProjects] = useState([])

        useEffect(() =>{
            db.collection('projects')
            .onSnapshot( snapshot =>{
               setProjects(snapshot.docs.map( doc => ({
                   data: doc.data()
               })))
            })

        }, [])

        

    return (
        <div className='project-container'>
            <h1 className='project-title'>My Projects</h1>
            <br/>


            <div className='project-card'>
            {
                projects.map(project =>(

                    <div className='card'>
                    <img src={project.data.img} alt='project' />
                    <div>
                        <h2>{project.data.name}</h2>
                        <h3>Technologies used: {project.data.techs}  </h3>
                        
                        <p>{project.data.details}</p>
                        <button>
                            
                            <a href={project.data.link} target="_blank" > View Project</a>
                        </button>
                    </div>    
                </div>
                ))
            }

            </div>

            
        </div>
    )
}
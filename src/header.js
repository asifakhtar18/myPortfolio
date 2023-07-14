import React from 'react'
import './styles/header.css'
import { BsLinkedin , BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function Header(){
    return(
        <header className='header'>
            
            <div className='hero-title'>
                <h3>Web Developer</h3>
                <h1>Md Asif Akhtar</h1>
            </div>
            


            <div className='socials'>
                    <a href='https://www.linkedin.com/in/md-asif-akhtar-9b1971247' 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLinkedin  className='social-icons'/>
                    </a>

                    <a href='https://github.com/asifakhtar18?tab=repositories' 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsGithub className='social-icons'/>
                    </a>

                    <a href='https://mail.google.com/mail/?view=cm&to=mdasifakhtar1808@gmail.com' 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <HiMail  className='social-icons'/>
                    </a>

                    
                    
            </div>

           

            
            
        </header>
    )
}
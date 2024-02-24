import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'
import './About.css'

const About = () => {
   return (
       <div id="about" className="effect2">
           <div className="grid-container"> {/* Updated wrapper for grid layout */}
               <div className="grid-item Photo" id="not-dark2"></div> {/* Photo as grid item */}
               <div className="grid-item about"> {/* About text as grid item */}
                   <div className="About-title-box">
                       <h1 id="About" className="red-line">{section2title}</h1>
                   </div>
                   <p className="lead about-text">
                       {about.paragraph}
                   </p>
               </div>
               <div className="grid-item skills" id="Skills"> {/* Skills as grid item */}
                   {skillsBar.map((x) =>
                       <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                   )}
               </div>
           </div>
       </div>
   )
}

export default About

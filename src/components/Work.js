import React from 'react';
import { FadeTransform } from 'react-animation-components';

const Work = ({projects}) =>{
    return(
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(50%)'
        }}>
        <div className="work_container">
            <h1>Projects.</h1>
            <div className="projects_container">
                {projects.map((project)=>(
                <div key={project.id} className="project">
                    <div className="image">
                        <a href={project.url}>
                            <img src={project.imageSrc} alt={project.title}></img>
                        </a>
                    </div>
                    <div className="title">
                        {project.title}
                    </div>
                </div>
                ))}
            </div>
        </div>
         </FadeTransform>
    );
}

export default Work
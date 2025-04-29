import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
      <h1>My Projects</h1>
      <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
          {mywork_data.map((work,index)=>{
            return(
            <div key = {index} className='project-card'>
              <div className="image-wrapper">
              <img src={work.w_img} alt='' />
              <a
               href= {work.link}
                target='_blank'
                 rel='noopener noreferrer' 
                //  className='view-project-overlay'
                 className='eye-overlay'
                 >
                <i className="fas fa-eye"></i>
              </a>
            </div>
            <h2 className='work-title'>{work.w_name}</h2>
            <p className='work-description'>{work.w_desc}</p>
            </div>
            );
          })}
      </div>
      <div className="projects-showmore">
        <a href="https://github.com/deveshgoel27">Show More</a>
        <img src={arrow_icon} alt="arrow" />
      </div>
    </div>
  )
}

export default Projects
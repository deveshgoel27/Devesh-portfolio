import React from 'react'
import './Hero.css';
import profile_img from '../../assets/devesh pic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="profile" />
        <h1> <span>I'm Devesh Goel, </span> Frontend developer</h1>
        <p>I am a Frontend developer from New Delhi, INDIA. I am in my last year of MCA from DR Abdul Kalam Technological University. I have completed 10+ projects.</p>
        <div className='hero-action'>
           <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
           <div className='hero-resume'><a className='anchor-link' offset={50} href="resume" download="Devesh_goel_resume.pdf" >Download  My resume</a></div>
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/devesh_logo1.png';
import user_icon from '../../assets/user_icon.svg';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={footer_logo} alt=""  className='footer-logo'/> 
                <p>I am a Frontend developer from New Delhi, INDIA. I am in my last year of MCA from DR Abdul Kalam Technological University. I have completed 10+ projects.</p>
         </div>
         <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
         </div>
    </div>
    <hr/>
    <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2023 Devesh Goel. All rights reserved.</p>
        {/* <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Contact with Me</p>
        </div> */}
    </div>
    </div>

  )
}

export default Footer
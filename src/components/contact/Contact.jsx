import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c145208d-5a01-4d35-913d-00f594b2a557");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
           alert(res.message);
        }
      };
    
    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="theme" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                        <div className="contact-icons">
                    </div>  
                            <img src={mail_icon} alt="" /> <p>techdevesh2702@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91 92057 43906</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>New Delhi</p>
                        </div>
                        <div className="contact-icons">
                       <a
                         href="https://github.com/deveshgoel27"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="contact-icon"
                       >
                         <i className="fab fa-github"></i>
                       </a>
                       <a
                         href="https://www.linkedin.com/in/devesh-goel/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="contact-icon"
                       >
                         <i className="fab fa-linkedin"></i>
                       </a>
          </div>

                    </div>
                </div>

                
                <form onSubmit={onSubmit} className='contact-right'>

                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' required name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' required name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'
import onePers from  "../../assets/dizinefBro.png"
import ButtonMe from "../reusable-btn/button"
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="contact-box">
                <div className="contact-inputs">
                    <div className="contact-inputs_title">
                        <h4>Malumotingizni qoldiring</h4>
                    </div>
                    <div className="contact-inputs_items">
                        <input type="text" placeholder='Ismingiz' />
                        <input type="nuumber"  placeholder='+998-90-123-45-67'/>
                    </div>
                    <div className="contact-inputs_btn">
                        <button type='submit' className='contact-btn'>Yuborish</button>
                    </div>
                </div>
                <div className="contact-img">
                    <img src={onePers} alt="PersDizinfek" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
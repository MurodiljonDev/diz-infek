import React, {useEffect} from 'react'
import onePers from  "../../assets/dizinefBro.png"
import "./contact.scss"
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import "aos/dist/aos.css"

const Contact = () => {
    const {t} = useTranslation()
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <div className='contact' id='connect'>
        <div className="container">
            <div className="contact-box">
                <div className="contact-inputs" 
                    data-aos="flip-down"
                    data-aos-duration="900">
                    <div className="contact-inputs_title">
                        <h4>{t('main.contact.title')}</h4>
                    </div>
                    <div className="contact-inputs_items">
                        <input type="text" placeholder={t('main.contact.inputIn')} />
                        <input type="nuumber"  placeholder='+998-90-123-45-67'/>
                    </div>
                    <div className="contact-inputs_btn">
                        <button type='submit' className='contact-btn'>{t('main.contact.btn')}</button>
                    </div>
                </div>
                <div className="contact-img"
                      data-aos="flip-up"
                      data-aos-duration="900">
                    <img src={onePers} alt="PersDizinfek" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
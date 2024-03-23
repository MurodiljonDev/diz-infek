import React, {useEffect} from 'react'
import './footer.scss'
import logo from "../../assets/Logo.png"
import { useTranslation } from 'react-i18next'
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Aos from 'aos';
import "aos/dist/aos.css"

const Footer = () => {
    
    useEffect(()=>{
        Aos.init();
    },[])
    const{t}= useTranslation()
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-box">
                <div className="footer-logo">
                    <img width={160} src={logo} alt="logo" />
                    <h4>{t('main.logo')}</h4>
                </div>
                <div className="footer-info">
                    <div className="footer-localization-phone">
                        <RoomIcon/>
                        <span>{t('main.footer.city')}</span>
                    </div>
                    <div className="footer-localization-phone">
                        <LocalPhoneIcon />
                        <span>+998 90 119 99 33</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
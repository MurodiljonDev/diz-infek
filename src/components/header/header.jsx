import React, { useEffect } from 'react'
import "./header.scss"
import ButtonMe from '../reusable-btn/button'
import armSpray from "../../assets/sprey_arm.png"
import banner from "../../assets/banner.jpg"
import { useTranslation } from 'react-i18next'
import Aos from 'aos';
import "aos/dist/aos.css"

const Header = () => {

    useEffect(()=>{
        Aos.init();
    },[])
   
    const {t} = useTranslation()
  return (
    <div className='header'>
        <div className="container">
            <div className="header-box">
                <div className="header-title-description">
                    <div className="header-title_items">
                        <div className="header-title_detail"
                            data-aos="flip-up"
                            data-aos-duration="2000"
                            animation-delay="1000"
                         >
                            <h2>{t('main.header.title')}</h2>
                            <p>{t('main.header.description')}</p>
                        </div>
                        <div className="header-title_sprayPhoto"
                            data-aos="flip-down"
                            data-aos-duration="2000">
                            <div className="one-element"></div>
                            <div className="two-element"></div>
                            {/* <div className="element-with_photo"> */}
                            <img width={150} src={armSpray} alt="spreyArm" />
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="header-description_btn" 
                        data-aos="fade-down"
                        data-aos-duration="1500">
                        <a href="#connect"><ButtonMe btnString={t("main.btn")}/></a>          
                    </div>
                </div>
                <div className="header-banner">
                    <div className="header-banner_img">
                        <img data-aos="flip-left"
                            data-aos-easing="ease-out"
                            data-aos-duration="2000" 
                            src={banner} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
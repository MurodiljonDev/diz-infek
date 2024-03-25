import Aos from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import person2 from "../../assets/2person.png"
import ptichka from "../../assets/bog'lanish_ptichka.png"
import ButtonMe from "../reusable-btn/button"
import "./ourServer.scss"

const OurServer = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    const {t} = useTranslation()
  return (
    <div className='our-server'>
        <div className="container">
            <div className="our-server_box">
                <div className="our-server_img"
                    data-aos="flip-up"
                    data-aos-duration="1000">
                    <img src={person2} alt="person2" />
                </div>
                <div className="our-server_title"
                     data-aos="flip-down"
                     data-aos-duration="1200">
                    <div className="our-server_title-Img">
                        <img src={ptichka} alt="ptichka" />
                    </div>
                    <h2>{t("main.serverTwo.title")}</h2>
                    <a href="#connect"><ButtonMe btnString={t("main.btn")}/></a>          
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServer
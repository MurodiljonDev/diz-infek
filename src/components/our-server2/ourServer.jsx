import React from 'react'
import "./ourServer.scss"
import person2 from "../../assets/2person.png"
import ptichka from "../../assets/bog'lanish_ptichka.png"
import ButtonMe from "../reusable-btn/button"
import { useTranslation } from 'react-i18next'

const OurServer = () => {
    const {t} = useTranslation()
  return (
    <div className='our-server'>
        <div className="container">
            <div className="our-server_box">
                <div className="our-server_img">
                    <img src={person2} alt="person2" />
                </div>
                <div className="our-server_title">
                    <div className="our-server_title-Img">
                        <img src={ptichka} alt="ptichka" />
                    </div>
                    <h2>{t("main.serverTwo.title")}</h2>
                    <ButtonMe btnString={t("main.btn")}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServer
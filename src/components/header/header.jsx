import React from 'react'
import "./header.scss"
import ButtonMe from '../reusable-btn/button'
import armSpray from "../../assets/sprey_arm.png"
import banner from "../../assets/banner.jpg"
import { useTranslation } from 'react-i18next'

const Header = () => {

    const {t} = useTranslation()
  return (
    <div className='header'>
        <div className="container">
            <div className="header-box">
                <div className="header-title-description">
                    <div className="header-title_items">
                        <div className="header-title_detail">
                            <h2>{t('main.header.title')}</h2>
                            <p>{t('main.header.description')}</p>
                        </div>
                        <div className="header-title_sprayPhoto">
                            <div className="one-element"></div>
                            <div className="two-element"></div>
                            {/* <div className="element-with_photo"> */}
                            <img width={150} src={armSpray} alt="spreyArm" />
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="header-description_btn">
                        <ButtonMe btnString={t("main.btn")}/>
                    </div>
                </div>
                <div className="header-banner">
                    <div className="header-banner_img">
                        <img src={banner} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
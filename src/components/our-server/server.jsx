import React from 'react'
import ButtonMe from '../reusable-btn/button'
import banner2 from "../../assets/banner2.png"
import { useTranslation } from 'react-i18next'
import "./server.scss"

const Server = () => {
  const {t} = useTranslation()
  return (
    <div className='server'>
        <div className="container">
            <div className="server-box">
                <img height={600} src={banner2} alt="banner" />
                <div className="server-title">
                    <h3>
                      {t('main.serverOne.title')}
                    </h3>
                    <p>{t('main.serverOne.description')}</p>
                     <div className="server-btn">
                        <ButtonMe btnString={t('main.btn')}/>
                     </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Server
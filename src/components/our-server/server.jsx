import React, {useEffect} from 'react'
import ButtonMe from '../reusable-btn/button'
import banner2 from "../../assets/banner2.png"
import { useTranslation } from 'react-i18next'
import "./server.scss"
import Aos from 'aos';
import "aos/dist/aos.css"

const Server = () => {
    useEffect(()=>{
      Aos.init();
    },[])
  const {t} = useTranslation()
  return (
    <div className='server' id='service'>
        <div className="container">
            <div className="server-box" >
                  <img height={600} src={banner2} alt="banner"/>
                <div className="server-title" 
                    data-aos="flip-up"
                    data-aos-duration="700">
                    <h3 >
                      {t('main.serverOne.title')}
                    </h3>
                    <p>{t('main.serverOne.description')}</p>
                     <div className="server-btn"  
                          data-aos="flip-down"
                          data-aos-duration="500">
                      <a href="#connect"><ButtonMe btnString={t('main.btn')}/></a>
                     </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Server
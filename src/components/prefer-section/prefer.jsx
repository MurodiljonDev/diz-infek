import React, {useEffect} from 'react'
import "./prefer.scss"
import PsychologyIcon from '@mui/icons-material/Psychology';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import "aos/dist/aos.css"

const Prefer = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    const {t} = useTranslation()
  return (
    <div className='prefer' id='aboutUs'>
        <div className="container">
            <div className="prefer-box">
                <div className="prefer-title">
                    <h2 data-aos="flip-right"
                    data-aos-duration="1000">{t('main.prefer.title')}</h2>
                </div>
                <div className="prefer-items_box">
                    <div className="prefer-item" 
                        data-aos="fade-down-right"
                        data-aos-duration="800"
                    >
                        <div className="prefer-item_img">
                            <PsychologyIcon/>
                        </div>
                        <div className="prefer-item_title">
                            <h4>{t('main.prefer.itemOne.title')}</h4>
                            <p>{t('main.prefer.itemOne.description')}</p>
                        </div>
                    </div>
                    <div className="prefer-item" 
                        data-aos="zoom-out-down"
                        data-aos-duration="800">
                        <div className="prefer-item_img">
                            <EngineeringIcon/>
                        </div>
                        <div className="prefer-item_title">
                            <h4>{t('main.prefer.itemTwo.title')}</h4>
                            <p>{t('main.prefer.itemTwo.description')}</p>
                        </div>
                    </div>
                    <div className="prefer-item" 
                        data-aos="fade-down-left"
                        data-aos-duration="800">
                        <div className="prefer-item_img">
                            <HandshakeIcon/>
                        </div>
                        <div className="prefer-item_title">
                            <h4>{t('main.prefer.itemThree.title')}</h4>
                            <p>{t('main.prefer.itemThree.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prefer
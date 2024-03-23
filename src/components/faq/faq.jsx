import React,{useEffect} from 'react'
import "./faq.scss"
import DisabledAccordion from '../disableAccordion/disableAccordion'
import Aos from 'aos';
import "aos/dist/aos.css"

const Faq = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <div className="faq" id='faq'>
        <div className="container">
            <div className="faq-box">
                <div className="faq-title"
                    data-aos="fade-right"
                    data-aos-duration="800">
                    <h3>FAQ</h3>
                </div>
                <div className="faq-itmes" 
                    data-aos="fade-left"
                    data-aos-duration="800">
                    <DisabledAccordion/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
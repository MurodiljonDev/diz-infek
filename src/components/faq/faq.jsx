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
                    data-aos="flip-up"
                    data-aos-duration="1000">
                    <h3>FAQ</h3>
                </div>
                <div className="faq-itmes" 
                    data-aos="flip-down"
                    data-aos-duration="1000">
                    <DisabledAccordion/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
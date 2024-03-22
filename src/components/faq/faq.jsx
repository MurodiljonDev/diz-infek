import React from 'react'
import "./faq.scss"
import DisabledAccordion from '../disableAccordion/disableAccordion'

const Faq = () => {
  return (
    <div className="faq">
        <div className="container">
            <div className="faq-box">
                <div className="faq-title">
                    <h3>FAQ</h3>
                </div>
                <div className="faq-itmes">
                    <DisabledAccordion/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
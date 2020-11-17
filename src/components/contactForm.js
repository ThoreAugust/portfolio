import React from 'react';
import contactFormStyle from './contactForm.module.scss'

const ContactForm = () =>{
    return(
        <div className={contactFormStyle.container}>
            <div className={contactFormStyle.formLeft}>
                <form name="contact" data-netlify="true" data-netlify-recaptcha="true" method="POST">
                    <p>Leave a message</p>
                    <input type="text" placeholder="Name*" tabIndex="0"/>
                    <input type="email" placeholder="E-Mail*" tabIndex="0"/>
                    <input type="text" placeholder="Subject*" tabIndex="0"/>
                    <textarea placeholder="Message*" tabIndex="0"/>
                    <div data-netlify-recaptcha="true" className={contactFormStyle.recaptcha}></div>
                    <button type="submit" tabIndex="0">Get in touch!</button>
                </form>
            </div>
            <div className={contactFormStyle.detailsRight}>

            </div>
        </div>
    )
}

export default ContactForm
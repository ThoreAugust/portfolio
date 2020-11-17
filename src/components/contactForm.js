import React from 'react';
import contactFormStyle from './contactForm.module.scss'

const ContactForm = () =>{
    return(
        <div className={contactFormStyle.container}>
            <div className={contactFormStyle.formLeft}>
                <form name="contact" data-netlify="true" method="POST">
                    <p>Leave a message</p>
                    <input type="text" placeholder="Name*" name="name" tabIndex="0"/>
                    <input type="email" placeholder="E-Mail*" name="email" tabIndex="0"/>
                    <input type="text" placeholder="Subject*" name="subject" tabIndex="0"/>
                    <textarea placeholder="Message*" name="message" tabIndex="0"/>

                    <button type="submit" tabIndex="0">Get in touch!</button>
                </form>
            </div>
            <div className={contactFormStyle.detailsRight}>

            </div>
        </div>
    )
}

export default ContactForm
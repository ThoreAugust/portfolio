import React from 'react';
import contactFormStyle from './contactForm.module.scss'

const ContactForm = () =>{
    return(
        <div className={contactFormStyle.container}>
            <div className={contactFormStyle.formLeft}>
                <form name="contact" method="POST" data-netlify="true">
                    <p>Leave a message</p>
                    <input type="text" placeholder="Name*" name="name" />
                    <input type="email" placeholder="E-Mail*" name="email" />
                    <input type="text" placeholder="Subject*" name="subject" />
                    <textarea placeholder="Message*" name="message" />
                    <input type="hidden" name="form-name" value="contact" />
                    <button type="submit">Get in touch!</button>
                </form>
            </div>
            <div className={contactFormStyle.detailsRight}>

            </div>
        </div>
    )
}

export default ContactForm
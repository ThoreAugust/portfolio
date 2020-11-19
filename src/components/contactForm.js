import React from 'react';
import contactFormStyle from './contactForm.module.scss'

const ContactForm = () =>{
    return(
        <div className={contactFormStyle.container} id="contactForm">
            <div className={contactFormStyle.formLeft}>
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                    <p>Leave a message</p>
                    <input type="text" placeholder="Name*" name="name" />
                    <input type="email" placeholder="E-Mail*" name="email" />
                    <input type="text" placeholder="Subject*" name="subject" />
                    <textarea placeholder="Message*" name="message" />
                    <input name="bot-field" className={contactFormStyle.bot} />
                    <input type="hidden" name="form-name" value="contact" />
                    <button type="submit">Get in touch!</button>
                </form>
            </div>
            <div className={contactFormStyle.detailsRight}>
                <div>
                    <h3>Address</h3>
                    <p>Haldesdorfer Straße 158</p>
                    <p>22179 Hamburg, Deutschland</p>
                </div>
                <div>
                    <h3>Phone</h3>
                    <p><span>Mobile:</span> (+49)172/5939757</p>
                    <p><span>Office:</span> coming soon</p>
                </div>
                <div>
                    <h3>Web</h3>
                    <p><span>Mail:</span> <a href="mailto:thore.august@gmx.de">thore.august@gmx.de</a></p>
                    <p><span>Website:</span> <a href="/">thoreaugust.de</a></p>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
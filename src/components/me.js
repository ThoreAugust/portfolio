import React from 'react';
import me from '../../static/200902_Thore_portrait.png'
import aboutStyle from './me.module.scss'

const Me = () =>{
    return(
        <div className={aboutStyle.container}>
            <div className={aboutStyle.leftImg}>
                <img src={me} alt="This is me" />
            </div>
            <div className={aboutStyle.message}>
                <h1>Hi, I am Thore August,<br/> Developer from Germany.</h1>
                <p>
                    Hier kommt noch Text hin.
                </p>
                <a href="/contact#contactForm">Get in touch!</a>
            </div>
        </div>
    )
}

export default Me
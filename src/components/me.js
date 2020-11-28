import React from 'react';
import me from '../../static/200902_Thore_portrait.webp'
import aboutStyle from './me.module.scss'

const Me = () =>{
    const seventeenthBD = new Date('December 3, 2008');
    const today = new Date();
    const getYearDiff = (date1, date2)=>{
        let diffYears = date1.getFullYear() - date2.getFullYear();
        let diffMonths = date2.getMonth() - date1.getMonth();
        if(diffMonths >= 6) return diffYears - 1;
        return diffYears;
    }
    const diff = getYearDiff(today, seventeenthBD);
    return(
        <div className={aboutStyle.container}>
            <div className={aboutStyle.leftImg}>
                <img src={me} alt="This is me" />
            </div>
            <div className={aboutStyle.message}>
                <h1>Hi, I am Thore August,<br/> Developer from Germany.</h1>
                <p>
                    I found my passion for programming about {diff} years ago during high school but did not commit to a career as a developer until 2016. 
                    I moved to Hamburg, Germany to pursue my bachelor’s degree in media systems at the HAW Hamburg which I started the following spring.<br />
                    During my studies I created some small projects with my peers which you can find on my github.<br />
                    I got my first and current developer job at Workplace Solutions GmbH in summer 2019 during my fifth semester. <br/>
                    Currently I am starting a blog about working as a developer struggling with media addiction.
                </p>
                <a href="/contact#contactForm">Get in touch!</a>
            </div>
        </div>
    )
}

export default Me
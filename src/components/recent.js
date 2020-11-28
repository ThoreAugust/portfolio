import React from 'react';
import recentStyle from './recent.module.scss';

const Recent = () =>{
    return(
        <div className={recentStyle.container}>
            <h2>My Latest Projects</h2>
            <p>Hi I am Thore and these are some of my latest private projects.</p>
            <div className={recentStyle.projectContainer}>
                <div className={recentStyle.project}>
                    <h3>Good News App</h3>
                        <a href="https://appetize.io/app/n0nnx7qmcvqhp776ug0bqp1310?device=pixel4xl&scale=75&orientation=portrait&osVersion=10.0&deviceColor=black">
                            <img 
                            src="https://appetize.io/images/pixel4xl_black.png" 
                            alt="Good News App- made with ReactNative" 
                            style={{height:"700px", marginLeft:"-5%", width:"auto"}}
                            />
                        </a>
                        <p>The free-Tier of Appetize.io just allows one user a time. <br/>If you experience issues please let me know.</p>
                        <a className={recentStyle.moreInfo} href="/">More Information on this Project</a>
                </div>
                <div className={recentStyle.project}>

                </div>
            </div>
        </div>
    )
}

export default Recent
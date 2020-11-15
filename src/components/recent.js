import React from 'react';
import recentStyle from './recent.module.scss';

const Recent = () =>{
    return(
        <div className={recentStyle.container}>
            <h2>My Latest Projects</h2>
            <p>Hi I am Thore and these are some of my latest private projects.</p>
            <div className={recentStyle.projectContainer}>
                <div className={recentStyle.project}>
                    <h3>Good New App</h3>
                    <iframe
                        src="https://appetize.io/embed/n0nnx7qmcvqhp776ug0bqp1310?device=pixel4xl&scale=75&orientation=portrait&osVersion=10.0&deviceColor=black"
                        width="600px" height="840" frameborder="0" scrolling="no" title="Good News App - made with ReactNative"/>
                        <p className={recentStyle.disclaimer}>The free-Tier of Appetize.io just allows one user a time. If you experience issues please let me know.</p>
                        <a className={recentStyle.moreInfo} href="/">More Information on this Project</a>
                </div>
                <div className={recentStyle.project}>

                </div>
            </div>
        </div>
    )
}

export default Recent
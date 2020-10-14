import React from 'react';
import recentStyle from './recent.module.scss';


const Recent = () =>{
    return(
        <div className={recentStyle.container}>
            <h2>My Latest Projects</h2>
            <p>Hi I am Thore and these are some of my latest private projects.</p>
            <div className={recentStyle.projectContainer}>
                <div className={recentStyle.project}></div>
                <div className={recentStyle.project}></div>
            </div>
        </div>
    )
}

export default Recent
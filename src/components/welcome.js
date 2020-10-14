import React from 'react';
import me from '../../static/200902_Thore_portrait.png'
import welcomeStyle from './welcome.module.scss'

const Welcome = () =>{
    return(
        <div className={welcomeStyle.container}>
            <div className={welcomeStyle.leftImg}>
                <img src={me} alt="This is me" />
            </div>
            <div className={welcomeStyle.message}>
                <h1>Thore August</h1>
                <p>#Web #Mobile #Software <br />#Developer</p>
            </div>
        </div>
    )
}

export default Welcome
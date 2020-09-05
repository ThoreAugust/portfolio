import React from 'react';
import me from '../../static/200902_Thore_portrait.png'
import welcomeStyle from './welcome.module.scss'

const Welcome = () =>{
    return(
        <div className={welcomeStyle.container}>
            <div>
                <img src={me} alt="This is me" />
            </div>
            <div>
                <hr />
                <h1>Thore August</h1>
                <hr />
                <p>#Web #Mobile #Software <br />#Developer</p>
            </div>
        </div>
    )
}

export default Welcome
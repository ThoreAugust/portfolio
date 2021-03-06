import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
const Layout = (props)=>{
    return(
        <div className={layoutStyles.container} style={{background: props.bgColor}}>
            <Header />
            <div className={ props.isIndex ? layoutStyles.welcomeContent : layoutStyles.content}>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
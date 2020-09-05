import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby'
import headerStyles from './header.module.scss'
import logo from '../../static/logo.png'

const Header = () =>{
    const data = useStaticQuery(graphql`
        query{
            site{
               siteMetadata{
                    title
                }
            }
        }
    `)
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.headerWrapper}>
                <Link to='/'>
                    <img src={logo} alt={data.site.siteMetadata.title} />
                </Link>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header
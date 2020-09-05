import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import footerStyles from './footer.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faTwitch, faGithub} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site{
          siteMetadata{
            author,
            published
          }
        }
      }
    `)
    return(
        <footer className={footerStyles.footer}>
            <div className={footerStyles.socialWrapper}>
              <a href="/"><FontAwesomeIcon icon={faTwitter} size="1x" aria-label="twitter" /></a>
              <a href="/"><FontAwesomeIcon icon={faLinkedin} size="1x" aria-label="linkedin" /></a>
              <a href="/"><FontAwesomeIcon icon={faTwitch} size="1x" aria-label="twitch" /></a>
              <a href="/"><FontAwesomeIcon icon={faGithub} size="1x" aria-label="github" /></a>
            </div>
            <p>Created by {data.site.siteMetadata.author}, copyright {data.site.siteMetadata.published}</p>
        </footer>
    )
}

export default Footer
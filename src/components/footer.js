import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'

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
        <footer>
            <p>Created by {data.site.siteMetadata.author}, copyright {data.site.siteMetadata.published}</p>
        </footer>
    )
}

export default Footer
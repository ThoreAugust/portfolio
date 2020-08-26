import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout';
const About = () => {
    return(
        <Layout>
            <h1>About</h1>
            <p>Hi, I am Thore, 28 years old from Hamburg germany.</p>
            <p>I am a Junior Developer @Workplace Solutions GmbH and write in my blog about being a developer struggling with media addiction.</p>
            <p>Want to work with me?<Link to="/contact">Reach out.</Link></p>
        </Layout>
        
    )
}

export default About
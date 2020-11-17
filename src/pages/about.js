import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import Me from '../components/me'
import Experience from '../components/experience'
import Testimony from '../components/testimony'

const About = () => {
    return(
        <Layout isIndex={true}>
            <Head title="About" />
            <Me />
            <Experience />
            <Testimony />
        </Layout>
        
    )
}

export default About
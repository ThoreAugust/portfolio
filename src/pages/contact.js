import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import Imprint from '../components/imprint'
import ContactForm from '../components/contactForm'
const Contact = ()=>{
    return (
        <Layout>
            <Head title="Contact" />
            <Imprint />
            <ContactForm />
        </Layout>
    )
}

export default Contact
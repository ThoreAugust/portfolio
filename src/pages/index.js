import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import Welcome from '../components/welcome'

const Home = () =>{
  return(
    <Layout>
      <Head title="Home" />
      <Welcome />
    </Layout>
  )
}

export default Home;
import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import Welcome from '../components/welcome'
import Recent from '../components/recent';

const Home = () =>{
  return(
    <Layout isIndex={true} bgColor="#0E4343">
      <Head title="Home" />
      <Welcome />
      <Recent />
    </Layout>
  )
}

export default Home;
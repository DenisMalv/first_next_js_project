import '../styles/globals.scss';
import image from "../public/abs-main.jpg"

import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"/>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image src={image} width={800} height={350} alt='preview' placeholder='blur'/>
  </Layout>
);

export default MyApp;

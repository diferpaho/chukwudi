import type { NextPage } from 'next';
import Head from 'next/head';
import Register from '../components/register';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        
        <Register></Register>

      </body>
    </>
  );
};

export default Home;
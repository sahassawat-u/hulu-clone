import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Result from '../components/Result'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div className>
      <Head>
        <title>Hulu Build</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <div>

      <Header />
      {/* NavBar */}
      <NavBar />
      {/* Results */}
      <Result results={results}/>
        
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || 
  requests.fetchTrending}`).then((res) => res.json());

  return {
    props: {
      results: request.results,
    }
  }
};

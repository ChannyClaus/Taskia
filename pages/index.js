import Head from 'next/head'

// Sections
import Hero from '../components/Hero';
import Templates from '../components/Services';
import Management from '../components/Management';
import TrustUs from '../components/TrustUs';
import { useState } from 'react';


export default function Home({ hero }) {
  const [template, setTemplate] = useState('')
  return (
    <>
      <Head>
        <title>Taskia | Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Templates template={template}
        setTemplate={setTemplate} />
    </>
  )
}

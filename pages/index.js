import Head from 'next/head'

// Sections
import Hero from '../components/Hero';
import Templates from '../components/Templates';
import Photos from '../components/Photos';
import Texts from '../components/Texts';
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
      <Photos></Photos>
      <Texts></Texts>
    </>
  )
}

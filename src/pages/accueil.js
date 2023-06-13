import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../public/assets/logos/logoLight.png'
import logo2 from '../../public/assets/logos/logoDark.png'
import styles from '@/styles/Accueil.module.css'


export default function acceuil() {
  return (
    <>
     <Head>
        <title>Coté Design Beta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main className={styles.main}>
        <Image  src={logo} width="450" height="100"/>
        <Image  src={logo2} width="450" height="100"/>
      </main>
       
    </>
  )
}


import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import img from '../public/img.png'
import Image from 'next/image'

const Landing = () => {



  return (
    <div className={`${styles.landing} p-10 flex flex-col justify-center landing`}>
        <div className='italiana lg:text-8xl text-4xl m-5' >
            <h1>SHRIYASH BORHADE</h1>
            <h1>DIGITAL ARTIST</h1>
        </div>
        <div className={styles.landingWork}>
          <Image
            src={img}
            width={2000}
            height={400}
          />
        </div>
        <div className='italiana lg:text-8xl text-4xl m-5 ml-auto text-end'>
            <h1>CREATIVE</h1>
            <h1>DIGITAL ARTIST</h1>
        </div>
    </div>
  )
}

export default Landing
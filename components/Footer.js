import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {


  return (
    <div className='footer text-white'>
      <div className='flex lg:justify-between justify-center  px-10 border-y border-white border-opacity-30 text-opacity-50 text-white contact items-center'>
        <p className='arial w-96 hidden lg:block'>IF YOU HAVE A GENERAL OR PROJECT ENQUIRY, PLEASE DROP ME AN EMAIL — AVAILABLE NOW.</p>
        <a href='mailto:borhadeshiryash@gmail.com' className='italiana text-3xl lg:text-6xl' >SEND AN EMAIL</a>
      </div>
      <div className='socials italiana  grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 cursor-pointer' >
        <div className=' flex justify-center text-white text-opacity-30 hover:text-opacity-100  items-center text-4xl'>
          <p>INSTAGRAM</p>
        </div>
        <div className=' border-y lg:border-x text-white text-opacity-30 hover:text-opacity-100  border-white border-opacity-30 flex justify-center items-center text-4xl'>
          <p>NFT&apos;S</p>
        </div>
        <div className=' flex text-white text-opacity-30 hover:text-opacity-100  justify-center items-center text-4xl'>
          <p>BEHANCE</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
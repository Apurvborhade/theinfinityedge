import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
const Header = ({setCursorVariant,setIsMenuOpen}) => {

  return (
    <div className={`flex justify-between items-center ${styles.header} border-b border-opacity-25`}>
        <div className='logo flex items-center h-pcent'>
            <h1 className='italiana text-4xl mx-5'>TIE.eth</h1>
        </div>
        <div className='flex items-center arial h-pcent'>
            <div className='flex'>
                <p>12:45 PM</p>
                <p className='mx-5'>India</p>
            </div>
            <div className='menu px-10 border-l font-bold transition-colors cursor-pointer border-black border-opacity-25  h-pcent flex justify-center items-center'  onClick={() => setIsMenuOpen(true)}>
                <p className='z-10'>MENU</p>
            </div>
        </div>
    </div>
  )
}

export default Header
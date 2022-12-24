import gsap from 'gsap'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Menu = ({isMenuOpen,setIsMenuOpen,setCursorVariant}) => {
    
    const cursorEnterText = () => {
        setCursorVariant("menu")
    }
    const cursorLeaveText = () => {
        setCursorVariant("default")
    }
    useEffect(() => {
     const tl = gsap.timeline()
     
     if(isMenuOpen) {
         tl.from(".link p",{
            y:100,
            opacity:0,
            duration:0.5,
            delay:0.1,
            stagger:0.1
         })
     } 
    },[isMenuOpen])
  return (
    <div onMouseEnter={() => cursorEnterText()} onMouseLeave={() => cursorLeaveText()} className={` ${styles.menu} ${isMenuOpen ? styles.menuOpen : styles.menuClose}`}>
        <div className='logo absolute italiana'>
            <p className='text-9xl p-10'>TIE</p>
        </div>
        <div className='absolute arial right-5 lg:right-20 top-10 text-white text-opacity-50 text-3xl p-5 hover:text-white' onClick={() => setIsMenuOpen(false)}>CLOSE</div>
        <p className='absolute bottom-5 right-5 lg:right-20 text-white text-opacity-40'>shriayshborhade@gmail.com</p>
        <div className={`flex justify-center items-center  h-pcent `}>
            <div className={`${styles.menudiv} flex items-end justify-between`}>
                <div className='arial text-lg pr-10'>
                    <p>Behance</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                </div>
                <div className='italiana text-4xl lg:text-8xl h-pcent flex flex-col items-stretch  justify-between'>
                    <div className='link  overflow-hidden'>
                        <p>PROJECTS</p>
                    </div>
                    <div className='link  overflow-hidden'>
                        <p>PROJECTS</p>
                    </div>
                    <div className='link  overflow-hidden'>
                        <p>PROJECTS</p>
                    </div>
                    <div className='link  overflow-hidden'>
                        <p>PROJECTS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu
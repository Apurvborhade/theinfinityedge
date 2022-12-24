import React, { useEffect } from 'react'
import Image from 'next/image'
import apocalypticFuture from '../public/img.png'
import fascinatingErth from '../public/fascinatingErythrina.png'
import {FiArrowUpRight} from 'react-icons/fi'

const Works = ({setImageHover,setCursorVariant}) => {
  useEffect(() => {
   const works = document.querySelectorAll(".work")
   const workImg = document.querySelectorAll(".work-img")

   for (let i = 0; i < works.length; i++) {
    const work = works[i];
    const img = workImg[i];

    work.addEventListener('mousemove',() => {
      // img.style.display = "block"
      console.log("hover")
      img.style.opacity = 1
      
    })
    work.addEventListener('mouseleave',() => {
      // img.style.display = "none"
      img.style.opacity = 0
    })
   }
    
  },[])
  const imageHoverEnter = () => {
    setImageHover(true)
    setCursorVariant("image")
  }
  const imageHoverLeave = () => {
    setImageHover(false)
    setCursorVariant("section")
  }
  return (
    <div className=' text-white px-10 py-20 works-section  -z-10 overflow-hidden'>
      <div className='relative'>
        <div className='marque inline-block text-black px-20 absolute -right-24 arial -top-5 rotate-45 '>PROJECTS</div>
      </div>
      <div className='flex justify-center my-36'>
        <p className='italiana text-center text-2xl lg:text-4xl works-header'>I CREATE DIGITAL EXPERIENCES THAT MERGER ART DIRECTION, BRANDING, CREATIVE STRATEGY, WEB DESIGN, PROTOTYPING AND DIGITAL INTERACTIONS.</p>
      </div>

      <div className='works italiana py-20'>

        <div className='work text-4xl lg:text-7xl border-y pb-10 py-6 relative flex justify-between border-white border-opacity-25'>
          <p>ApocalypticFuture</p>
          <FiArrowUpRight />
          <Image
            src={apocalypticFuture}
            width={240}
            className='absolute -top-44 right-96 rotate-12  work-img'
          />
        </div>
        <div className='work text-4xl lg:text-7xl border-b pb-10 py-6 relative flex justify-between border-white border-opacity-25'>
          <p>Fascinating Erythrina</p>
          <FiArrowUpRight />
          <Image
            src={fascinatingErth}
            width={240}
            className='absolute -top-0 right-96 rotate-12 work-img'
          />
        </div>
        <div className='work text-4xl lg:text-7xl border-b pb-10 py-6 relative flex justify-between border-white border-opacity-25'>
          <p>Leap Of Faith</p>
          <FiArrowUpRight />
          <Image
            src={apocalypticFuture}
            width={240}
            className='absolute -top-0 right-96 rotate-12 work-img'
          />
        </div>
        
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center transition-all items-center w-36 h-36 rounded-full border hover:bg-white hover:text-black'>
         <p className='text-lg'>
          ALL PROJECTS
          </p> 
        </div>
      </div>
    </div>
  )
}

export default Works
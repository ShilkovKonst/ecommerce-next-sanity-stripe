import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='text-darkwood bg-beige text-center mt-5 px-8 py-3 font-bold flex flex-col items-center gap-2 justify-center'>
      <p>2023 E-commerce. All rights reserved</p>
      <p className='text-3xl flex gap-2'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </footer>
  )
}

export default Footer
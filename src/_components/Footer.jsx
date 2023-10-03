import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='text-[#324d67] text-center mt-5 px-8 py-3 font-bold flex flex-col items-center gap-2 justify-center'>
      <p>2023 E-commerce. All rights reserved</p>
      <p className='text-3xl flex gap-2'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer
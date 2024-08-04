import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <main>
    <div className="flex bg-black text-white footer-content ">
    <img src="/logo.jpg" alt="Logo" className="h-16 w-16 m-2 rounded-3xl"/>
    <h1 className="text-2xl mt-7 ml-5 font-bold">Bookify</h1>
      <ul className="footer-links"> 
      <div className="flex flex-row ml-40 mt-5">
      <Link className="text-xl mt-2 ml-28 font-semibold hover:underline" href="./contact-us">Contact Us</Link>
      <Link className="text-xl mt-2 ml-28 font-semibold hover:underline" href="./terms">Terms of Service</Link>
      <Link className="text-xl mt-2 ml-28 font-semibold hover:underline" href="./privacy">Privacy Policy</Link>
      </div>
      </ul>
      <div></div>
    </div>
    <div className='text-right bg-black text-white '><p>@ {new Date().getFullYear()} Bookify All rights reserved.</p></div>
    </main>
  )
}
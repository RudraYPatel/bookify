import React from 'react'

export default function Footer() {
  return (
    
    <footer className="footer">
    <div className="flex footer-content bg-gradient-to-r from-sky-500 to-indigo-600">
    <img src="/logo.jpg" alt="Logo" className="h-20 w-20 m-2 ml-10 rounded-3xl"/>
    <h1 className="text-2xl mt-7 ml-5 font-bold">Bookify</h1>
      <ul className="footer-links"> 
      <div className="flex flex-row ml-40 mt-5">
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">Contact Us!</button>
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">About Us</button>
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">Terms of Service</button>
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">Privacy Policy</button>
      </div>
      </ul>
    </div>
    <div className='text-right bg-gradient-to-r from-sky-500 to-indigo-600'><p>&copy; {new Date().getFullYear()} Bookify All rights reserved.</p></div>
  </footer>
  )
}
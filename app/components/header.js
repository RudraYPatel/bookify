import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2">
        <img src="/logo.jpg" alt="Logo" className="h-16 w-16 m-2 rounded-3xl"/>
        <h1 className="text-2xl mt-7 ml-5 font-bold">Bookify</h1>
        <div className="flex flex-row ml-auto">
            <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="../">Home</Link>
            <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="./upcoming-events">Upcoming Events</Link>
            <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="./about-bookify">About Bookify</Link>
            <Link className="text-xl mt-9 ml-28 mr-10 font-semibold hover:underline" href="./upcoming-events">Profile</Link>
        </div>
  </div>
  )
};
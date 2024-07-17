import React from "react";
import Link from "next/link";

export default function Home() {
  return(
    <main className="container-lg bg-white h-screen-3x p-10">
      <div className="flex flex-row">
      <img src="/logo.jpg" alt="Logo" className="h-20 w-20 m-2 rounded-3xl"/>
      <h1 className="text-3xl mt-7 ml-7 font-bold">Bookify</h1>
      <div className="flex flex-row">
      <button className="text-xl mt-2 ml-96 font-semibold">Home</button>
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">Upcoming Events</button>
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">About Bookify</button>
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">Profile</button>
      </div>
      </div>
      <div className="border-t-2 border-black my-2"></div>
      <div className="text-center mt-10 text-2xl font-semibold">
      <p>Welcome to Bookify</p>
      <p>The Premier Portal to exclusive Events, Concerts and Conference.</p>
      </div>
      <div className="flex flex-row justify-center">
        <div className="relative h-80 ml-24 mr-16 mt-10 rounded-3xl overflow-hidden">
          <img src="/rodeo.jpg" alt="Event" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a href="https://www.calgarystampede.com/" className="text-white text-lg font-semibold">Rodeo Show</a>
          </div>
        </div>
        <div className="relative h-80 ml-24 mr-24 mt-10 rounded-3xl overflow-hidden">
          <img src="/image.png" alt="Event" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a href="https://www.adventuresinwellness.ca/" className="text-white text-lg font-semibold">Laughter Conference</a>
          </div>
        </div>
        </div>
        <div className="border-t-2 border-black mt-14 my-2"></div>
        <div className="text-center mt-16 text-2xl font-bold">
        <p>Just Announced</p>
        <div className="flex flex-row relative h-72 w-72 ml-24 mt-10 rounded-3xl overflow-hidden">
          <img src="/musicevent.jpg" alt="Event" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a href="https://www.axs.com/events/541933/ben-platt-tickets" className="text-white text-lg font-semibold">Ben Platt Concert</a>
          </div>
          <p>Ben Platt</p>
        </div>
        </div>
    </main>
  );
}
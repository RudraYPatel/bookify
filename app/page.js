import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-500 text-black min-h-screen">
      <Header />
      <div className="text-center text-4xl mt-5 font-semibold">
        <p>Welcome to Bookify</p>
        <p>The Premier Portal to Exclusive Events, Concerts, and Conferences</p>
      </div>
      <div className="border-t-2 border-black m-12"></div>
      <div className="bg-black text-white p-10 mt-5 mx-16 rounded-3xl mb-12">
        <p className="text-center text-3xl font-extrabold">Co-Sponsored Events</p>
        <div className="flex justify-center space-x-16 rounded-3xl">
          <div className="relative h-80 w-80 mb-5 mt-10 rounded-3xl overflow-hidden">
            <img src="/rodeo.jpg" alt="Event" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link href="https://www.calgarystampede.com/" className="text-white text-lg font-semibold">Rodeo Show</Link>
            </div>
          </div>
          <div className="relative h-80 w-80 mb-5 mt-10 rounded-3xl overflow-hidden">
            <img src="/image.png" alt="Event" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link href="https://www.adventuresinwellness.ca/" className="text-white text-lg font-semibold">Laughter Conference</Link>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-black my-12"></div>
        <div className="text-center mt-10 text-4xl mb-16 font-extrabold ">
          <p>Just Announced Events Collaborations</p>
        </div>
        <div className="flex flex-col space-y-12">
          <div className="flex justify-between mx-10">
            <div className="w-1/3 text-center">
              <p className="text-xl font-bold">Ben Platt</p>
              <p className="text-lg font-normal">The Honeymind Tour with Brandy Clark</p>
              <p className="text-lg font-normal">Eccles Theater</p>
              <p className="text-lg font-normal">131 West South Temple Salt Lake City,</p>
              <p className="text-lg font-normal">UT 84101</p>
              <p className="text-lg font-bold">WED JUL 17, 2024 - 7:30 AM</p>
            </div>
            <div className="w-1/3 text-center">
              <p className="text-xl font-bold">7 Bridges: The Ultimate Eagles Experience</p>
              <p className="text-lg font-normal">Point of the Bluff</p>
              <p className="text-lg font-normal">Rams Head Presents</p>
              <p className="text-lg font-normal">10489 County Road 76 Hammondsport,</p>
              <p className="text-lg font-normal">NY 14840</p>
              <p className="text-lg font-bold">WED JUL 17, 2024 - 6:30 PM</p>
            </div>
            <div className="w-1/3 text-center">
              <p className="text-xl font-bold">Boys Like Girls</p>
              <p className="text-lg font-normal">Grayscale</p>
              <p className="text-lg font-normal">The NorVa</p>
              <p className="text-lg font-normal">317 Monticello Avenue Norfolk</p>
              <p className="text-lg font-normal">VA 23510</p>
              <p className="text-lg font-bold">WED JUL 17, 2024 - 7:30 PM</p>
            </div>
          </div>
          <div className="flex justify-center space-x-16 rounded-3xl bg-black text-white p-10">
            <div className="relative h-80 w-80 rounded-3xl overflow-hidden">
              <img src="/musicevent.jpg" alt="Event" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link href="https://www.axs.com/events/541933/ben-platt-tickets" className="text-white text-lg font-semibold">Ben Platt Concert</Link>
              </div>
            </div>
            <div className="relative h-80 w-80 rounded-3xl overflow-hidden">
              <img src="/Bridges.jpg" alt="Event" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link href="https://www.axs.com/events/525103/7-bridges-the-ultimate-eagles-experience-tickets" className="text-white text-lg font-semibold">7 Bridges</Link>
              </div>
            </div>
            <div className="relative h-80 w-80 rounded-3xl overflow-hidden">
              <img src="/boys like girl.jpg" alt="Event" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link href="https://www.axs.com/events/542520/boys-like-girls-tickets" className="text-white text-lg font-semibold">Boys Like Girls</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import React from "react";
import Link from "next/link";

export default function Home() {
  return(
    <main className="container-lg bg-white h-screen p-10">
      <div className="flex flex-row">
      <img src="/logo.jpg" alt="Logo" className="h-20 w-20 m-2 rounded-3xl"/>
      <h1 className="text-3xl mt-7 ml-7 font-bold">Bookify</h1>
      <div className="flex flex-row">
      <h2 className="text-xl mt-9 ml-96 font-semibold">Home</h2>
      <h2 className="text-xl mt-9 ml-28 font-semibold">Upcoming Events</h2>
      <h2 className="text-xl mt-9 ml-28 font-semibold">Past Events</h2>
      <h2 className="text-xl mt-9 ml-28 font-semibold">Profile</h2>
      </div>
      </div><hr className="border-black-1"/>
    </main>
  );
}
'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Page() {
  return (
    <main className="bg-gray-500 text-black min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Thank You!</h1>
          <p className="text-xl md:text-2xl mb-6 text-center">Your order has been processed successfully.</p>
          <p className="text-lg md:text-xl text-center">Tickets will be sent to your entered email address.</p>
          <div className="mt-8 flex justify-center">
            <Link
              href="./"
              className="bg-white text-black font-semibold py-2 px-4 rounded"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

'use client';
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Page() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg p-8 mt-8">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to our Privacy Policy page! Here at Bookify, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          This privacy policy outlines the types of personal information that is received and collected by Bookify and how it is used.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Random Rule #1</h2>
        <p className="mb-4">
          All users must sing their favorite song while entering their personal information. This ensures a harmonious experience.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Random Rule #2</h2>
        <p className="mb-4">
          Users are encouraged to share their favorite ice cream flavor in their profile. This helps us understand our audience better.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Random Rule #3</h2>
        <p className="mb-4">
          Any attempt to access the website without a smile will be met with a gentle reminder to smile. Happiness is key!
        </p>
        <h2 className="text-2xl font-semibold mb-2">Random Rule #4</h2>
        <p className="mb-4">
          Users must do a little dance when they successfully update their profile. It is a celebration of personal growth!
        </p>
        <h2 className="text-2xl font-semibold mb-2">Random Rule #5</h2>
        <p className="mb-4">
          Sharing photos of your pets is highly encouraged. Pets bring joy and we love to see them!
        </p>
        <h2 className="text-2xl font-semibold mb-2">Information Collection</h2>
        <p className="mb-4">
          We collect various types of information in connection with the services we provide, including:
        </p>
        <p className="mb-4 ml-4">
          • Personal identification information (Name, email address, phone number, etc.)
        </p>
        <p className="mb-4 ml-4">
          • Demographic information (Age, gender, etc.)
        </p>
        <p className="mb-4 ml-4">
          • Technical data (IP address, browser type, etc.)
        </p>
        <h2 className="text-2xl font-semibold mb-2">How We Use Information</h2>
        <p className="mb-4">
          The information we collect is used in various ways, including to:
        </p>
        <p className="mb-4 ml-4">
          • Provide, operate, and maintain our website
        </p>
        <p className="mb-4 ml-4">
          • Improve, personalize, and expand our website
        </p>
        <p className="mb-4 ml-4">
          • Understand and analyze how you use our website
        </p>
        <p className="mb-4 ml-4">
          • Develop new products, services, features, and functionality
        </p>
        <p className="mb-4 ml-4">
          • Communicate with you, either directly contact us
        </p>
      </div>
      <Footer />
    </main>
  );
}

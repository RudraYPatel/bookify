import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Page() {
  return (
    <main className="bg-gray-500 text-black min-h-screen">
      <Header />
      <div className="bg-gray-500 text-black p-10 ">
        <div className="flex flex-col md:flex-row items-start">
          <div className="relative w-full md:w-1/2">
            <img src="/ticket.jpg" alt="Event" className="w-full h-auto rounded-3xl" />
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 text-left px-10">
            <p className="text-4xl text-center font-bold">About Us</p><br/>
            <div className="border-t-2 border-gray-500"></div><br/>
            <p className="text-2xl font-semibold mt-2">Welcome to Bookify!</p><br/>
            <p className="text-xl font-semibold">Our Mission</p>
            <p className="text-lg font-normal mt-4">Our mission is to connect people with amazing events, making the process of finding, booking, and attending events as seamless as possible. Whether you’re looking for concerts, sports events, conferences, or community gatherings, Bookify is your one-stop platform for all your event needs.</p>
            <p className="text-xl font-semibold mt-10">What We Offer</p>
            <p className="text-lg font-normal mt-4">1. Explore a wide variety of events in your area or across the globe. Our extensive database is regularly updated to bring you the latest and most exciting events.</p>
            <p className="text-lg font-normal mt-4">2. With a user-friendly interface, Bookify makes it easy to search for events, check availability, and book your tickets in just a few clicks.</p>
            <p className="text-lg font-normal mt-4">3. Get event suggestions based on your interests and preferences, ensuring you find events that match your tastes.</p>
            <p className="text-lg font-normal mt-4">4. Your security is our priority. We use the latest encryption technologies to ensure your payment information is safe and secure.</p>
            <p className="text-lg font-normal mt-4">5. Stay informed with real-time updates on event changes, cancellations, and new announcements.</p>
          </div>
        </div>
        <div className="mt-10 text-left px-10">
          <p className="text-2xl font-semibold mt-10">Our Story</p>
          <p className="text-lg font-normal mt-4">We are a diverse team of tech experts, event planners, and customer service professionals dedicated to delivering the best possible experience to our users. Our combined expertise ensures that Bookify remains at the forefront of the event booking industry.</p>
          <p className="text-2xl font-semibold mt-10">Join Our Community</p>
          <p className="text-lg font-normal mt-4">At Bookify, we believe that great events have the power to bring people together and create lasting memories. Join our community today and start exploring the world of events like never before. Whether you’re an event organizer or an attendee, Bookify is here to make your event journey extraordinary.</p>
          <p className="text-2xl font-semibold mt-10">Contact Us</p>
          <p className="text-lg font-normal mt-4">Have questions or need assistance? Our support team is here to help. Visit our Contact Us page for more information.</p>
          <p className="text-lg font-normal mt-4">Thank you for choosing Bookify. We look forward to helping you discover and book your next great event!</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

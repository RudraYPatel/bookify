import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Page() {
  return (
    <main className="bg-white text-black min-h-screen">
        <Header/>
        <div className="border-t-2 border-black"></div>
        <div class>
            <p className='text-2xl font-semibold ml-10 mt-5'>About Us</p><br/>
            <p className='text-xl font-medium ml-10'>Welcome to Bookify!</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'>At Bookify, we are passionate about making event booking simple efficient, and enjoyable. Our goal is to revolutionize the way you discover and book events, ensuring younever miss out on an exciting experience.</p><br/>
            <p className='text-xl font-medium ml-10'>Our Mission</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'>Our mission is to connect people with amazing events, making the process of finding, booking, and attending events as seamless as possible. Whether you’re looking for concerts, sports events, conferences, or community gatherings, Bookify is your one-stop platform for all your event needs.</p><br/>
            <p className='text-xl font-medium ml-10'>What We Offer</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'><em>1.</em> Explore a wide variety of events in your area or across the globe. Our extensive database is regularly updated to bring you the latest and most exciting events.</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'><em>2.</em> With a user-friendly interface, Bookify makes it easy to search for events, check availability, and book your tickets in just a few clicks.</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'><em>3.</em> Get event suggestions based on your interests and preferences, ensuring you find events that match your tastes.</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'><em>4.</em> Your security is our priority. We use the latest encryption technologies to ensure your payment information is safe and secure.</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'><em>5.</em> Stay informed with real-time updates on event changes, cancellations, and new announcements.</p><br/>
            <p className='text-lg font-medium ml-10 mr-5'>Our Story</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'>We are a diverse team of tech experts, event planners, and customer service professionals dedicated to delivering the best possible experience to our users. Our combined expertise ensures that Bookify remains at the forefront of the event booking industry.</p><br/>
            <p className='text-lg font-medium ml-10 mr-5'>Join Our Community</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'>At Bookify, we believe that great events have the power to bring people together and create lasting memories. Join our community today and start exploring the world of events like never before. Whether you’re an event organizer or an attendee, Bookify is here to make your event journey extraordinary.</p><br/>
            <p className='text-lg font-medium ml-10 mr-5'>Contact Us</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'>Have questions or need assistance? Our support team is here to help. Visit Contact Us page for more information.</p><br/>
            <p className='text-lg font-normal ml-10 mr-5'>Thank you for choosing Bookify. We look forward to helping you discover and book your next great event!</p><br/>
        </div>
        <div className="border-t-2 border-black"></div>
        <Footer/>
    </main>
  )
}
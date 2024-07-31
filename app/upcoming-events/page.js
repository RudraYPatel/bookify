'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/header';
import Footer from '../components/footer';
import { addEventItem } from '../_services/checkoutdata';
import { useUserAuth } from '../auth-context';

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const handleIncrement = (index) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] += 1;
      return newCounters;
    });
  };

  const handleDecrement = (index) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      if (newCounters[index] > 0) {
        newCounters[index] -= 1;
      }
      return newCounters;
    });
  };

  const handleCheckout = async () => {
    if (!user) {
      alert("You need to be signed in to checkout. Please navigate to profile page to Sign In.");
      return;
    }

    const events = [
      {
        id: "event1",
        imgSrc: "/event1.jpg",
        date: "FRI JUL 19, 2024 - 7:00 PM",
        title: "Montreal Alliance at Calgary Surge",
        location: "WinSport Arena, Calgary, AB",
      },
      {
        id: "event2",
        imgSrc: "/event2.jpg",
        date: "SUN JUL 21, 2024 - 4:00 PM",
        title: "Forge FC at Cavalry FC",
        location: "Spruce Meadows, Calgary, AB",
      },
      {
        id: "event3",
        imgSrc: "/event3.jpg",
        date: "SUN JUL 21, 2024 - 6:00 PM",
        title: "BC Lions at Calgary Stampeders",
        location: "McMahon Stadium, Calgary, AB",
      },
      {
        id: "event4",
        imgSrc: "/event4.jpg",
        date: "FRI AUG 2, 2024 - 8:00 PM",
        title: "Billy Idol",
        location: "Scotiabank Saddledome, Calgary, AB",
      },
    ];

    try {
      for (let i = 0; i < counters.length; i++) {
        if (counters[i] > 0) {
          await addEventItem(user.uid, events[i].id, {
            title: events[i].title,
            date: events[i].date,
            location: events[i].location,
            quantity: counters[i],
          });
        }
      }
      alert("Checkout successful!");
      router.push('/checkout'); // Navigate to the checkout page
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <main className="text-black">
      <Header />
      <div className="bg-black text-white">
        {[
          {
            imgSrc: "/event1.jpg",
            date: "FRI JUL 19, 2024 - 7:00 PM",
            title: "Montreal Alliance at Calgary Surge",
            location: "WinSport Arena, Calgary, AB",
            counterIndex: 0,
          },
          {
            imgSrc: "/event2.jpg",
            date: "SUN JUL 21, 2024 - 4:00 PM",
            title: "Forge FC at Cavalry FC",
            location: "Spruce Meadows, Calgary, AB",
            counterIndex: 1,
          },
          {
            imgSrc: "/event3.jpg",
            date: "SUN JUL 21, 2024 - 6:00 PM",
            title: "BC Lions at Calgary Stampeders",
            location: "McMahon Stadium, Calgary, AB",
            counterIndex: 2,
          },
          {
            imgSrc: "/event4.jpg",
            date: "FRI AUG 2, 2024 - 8:00 PM",
            title: "Billy Idol",
            location: "Scotiabank Saddledome, Calgary, AB",
            counterIndex: 3,
          },
        ].map((event, index) => (
          <div key={index} className="flex flex-row items-center h-28 ml-16 mr-16 rounded-3xl">
            <img src={event.imgSrc} alt="Event" className="h-full" />
            <div className="flex flex-row justify-between w-full">
              <div className="ml-6">
                <p className="text-xl font-bold">
                  {event.date}
                  <h1>{event.title}</h1>
                  {event.location}
                </p>
              </div>
              <div className="flex flex-row items-center mr-16">
                <button
                  className="bg-blue-600 text-white border-none py-2 px-4 rounded-3xl hover:underline"
                  onClick={() => handleIncrement(event.counterIndex)}
                >
                  Add to Cart
                </button>
                <span className="ml-4 text-xl">{counters[event.counterIndex]}</span>
                <button
                  className="bg-red-600 text-white border-none py-2 px-4 rounded-3xl hover:underline ml-4"
                  onClick={() => handleDecrement(event.counterIndex)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-row-reverse mr-32 mt-5">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-6 rounded-2xl shadow-lg text-lg font-semibold hover:from-green-500 hover:to-blue-600 hover:shadow-xl transition duration-300 ease-in-out"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
        <div className="border-t-2 mt-10 border-black"></div>
      </div>
      <Footer />
    </main>
  );
}


'use client'
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Page() {
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

  return (
    <main className=" text-black">
        <Header/>
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
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-6 rounded-2xl shadow-lg text-lg font-semibold hover:from-green-500 hover:to-blue-600 hover:shadow-xl transition duration-300 ease-in-out">
            Checkout
          </button>
        </div>
        <div className="border-t-2 mt-10 border-black"></div>
        </div>
      <Footer />
    </main>
  );
}



// import React, { useState } from 'react';
// import Header from './components/header';
// import Footer from './components/footer';

// export default function Page() {
//   // Create state for counters for each event
//   const [counters, setCounters] = useState([0, 0, 0, 0]);

//   // Function to handle increment
//   const handleIncrement = (index) => {
//     const newCounters = [...counters];
//     newCounters[index] += 1;
//     setCounters(newCounters);
//   };

//   return (
//     <main className="bg-white text-black min-h-screen">
//       <Header />
//       <div className="border-t-2 border-black"></div>

//       <div className="flex flex-row relative h-28 ml-16 mt-10 rounded-3xl">
//         <img src="/event1.jpg" alt="Event" className="object-left" />
//         <div className="absolute inset-0"></div>
//         <div className="flex flex-row">
//           <p className="text-xl font-bold ml-48 mt-5">
//             FRI JUL 19, 2024 - 7:00 PM
//             <h1>Montreal Alliance at Calgary Surge</h1>
//             WinSport Arena, Calgary, AB
//           </p>
//         </div>
//         <div className="flex flex-row items-center ml-48 mt-10">
//           <button
//             className="bg-blue-600 text-white border-none py-2 px-4 rounded-3xl hover:underline"
//             onClick={() => handleIncrement(0)}
//           >
//             Add to Cart
//           </button>
//           <span className="ml-4 text-xl">{counters[0]}</span>
//         </div>
//       </div>

//       <div className="flex flex-row relative h-28 ml-16 mt-10 rounded-3xl">
//         <img src="/event2.jpg" alt="Event" className="object-left" />
//         <div className="absolute inset-0"></div>
//         <div className="flex flex-row">
//           <p className="text-xl font-bold ml-48 mt-5">
//             SUN JUL 21, 2024 - 4:00 PM
//             <h1>Forge FC at Cavalry FC</h1>
//             Spruce Meadows, Calgary, AB
//           </p>
//         </div>
//         <div className="flex flex-row items-center ml-60 mt-10">
//           <button
//             className="bg-blue-600 text-white border-none py-2 px-4 rounded-3xl cursor-pointer hover:underline"
//             onClick={() => handleIncrement(1)}
//           >
//             Add to Cart
//           </button>
//           <span className="ml-4 text-xl">{counters[1]}</span>
//         </div>
//       </div>

//       <div className="flex flex-row relative h-28 ml-16 mt-10 rounded-3xl">
//         <img src="/event3.jpg" alt="Event" className="object-left" />
//         <div className="absolute inset-0"></div>
//         <div className="flex flex-row">
//           <p className="text-xl font-bold ml-48 mt-5">
//             SUN JUL 21, 2024 - 6:00 PM
//             <h1>BC Lions at Calgary Stampeders</h1>
//             McMahon Stadium, Calgary, AB
//           </p>
//         </div>
//         <div className="flex flex-row items-center ml-56 mt-10">
//           <button
//             className="bg-blue-600 text-white border-none py-2 px-4 rounded-3xl cursor-pointer hover:underline"
//             onClick={() => handleIncrement(2)}
//           >
//             Add to Cart
//           </button>
//           <span className="ml-4 text-xl">{counters[2]}</span>
//         </div>
//       </div>

//       <div className="flex flex-row relative h-28 ml-16 mt-10 rounded-3xl">
//         <img src="/event4.jpg" alt="Event" className="object-left" />
//         <div className="absolute inset-0"></div>
//         <div className="flex flex-row">
//           <p className="text-xl font-bold ml-48 mt-5">
//             FRI AUG 2, 2024 - 8:00 PM
//             <h1>Billy Idol</h1>
//             Scotiabank Saddledome, Calgary, AB
//           </p>
//         </div>
//         <div className="flex flex-row items-center ml-44 mt-10">
//           <button
//             className="bg-blue-600 text-white border-none py-2 px-4 rounded-3xl hover:underline"
//             onClick={() => handleIncrement(3)}
//           >
//             Add to Cart
//           </button>
//           <span className="ml-4 text-xl">{counters[3]}</span>
//         </div>
//       </div>

//       <div className="flex flex-row-reverse mr-24 mt-5">
//         <button className="bg-black text-white border-none py-2 px-4 rounded-3xl hover:underline">Checkout</button>
//       </div>
//       <div className="border-t-2 mt-10 border-black"></div>
//       <Footer />
//     </main>
//   );
// }
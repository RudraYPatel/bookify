import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Page() {
  return (
  <main className="bg-white text-black min-h-screen">
   <Header/>
      <div className="border-t-2 border-black"></div>
            <div className="flex flex-row relative h-28  ml-16 mt-10 rounded-3xl">
                <img src="/event1.jpg" alt="Event" className="object-left" />
                <div className="absolute inset-0"> </div>
                <div className='flex flex-row ' >
                    <p className="text-xl font-bold ml-48 mt-5">
                        FRI JUL 19, 2024 - 7:00 PM
                    <h1>Montreal Alliance at Calgary Surge</h1>
                        WinSport Arena, Calgary, AB</p><br/>
                </div>  
        </div>

        <div className="flex flex-row relative h-28  ml-16 mt-10 rounded-3xl">
                <img src="/event2.jpg" alt="Event" className="object-left" />
                <div className="absolute inset-0"> </div>
                <div className='flex flex-row ' >
                    <p className="text-xl font-bold ml-48 mt-5">
                        SUN JUL 21, 2024 - 4:00 PM
                    <h1>Forge FC at Cavalry FC</h1>
                     Spruce Meadows, Calgary, AB</p><br/>
                </div>  
        </div>

        <div className="flex flex-row relative h-28  ml-16 mt-10 rounded-3xl">
                <img src="/event3.jpg" alt="Event" className="object-left" />
                <div className="absolute inset-0"> </div>
                <div className='flex flex-row ' >
                    <p className="text-xl font-bold ml-48 mt-5">  	
                    SUN JUL 21, 2024 - 6:00 PM
                    <h1>BC Lions at Calgary Stampeders</h1>
                    McMahon Stadium, Calgary, AB</p><br/>
                </div>  
        </div>
        
        <div className="flex flex-row relative h-28  ml-16 mt-10 rounded-3xl">
                <img src="/event4.jpg" alt="Event" className="object-left" />
                <div className="absolute inset-0"> </div>
                <div className='flex flex-row ' >
                    <p className="text-xl font-bold ml-48 mt-5">
                    FRI AUG 2, 2024 - 8:00 PM
                    <h1>Billy Idol</h1>
                    Scotiabank Saddledome, Calgary, AB</p><br/>
                </div> 
        </div>
      <div className="border-t-2 mt-10 border-black"></div>
    <Footer/>
   </main>
  )
};
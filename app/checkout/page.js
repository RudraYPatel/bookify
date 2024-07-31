"use client"
import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../auth-context';
import { getEventItems } from '../_services/checkoutdata';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Page() {
  const { user } = useUserAuth();
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCheckoutItems = async () => {
      if (!user) return;

      const eventIds = ["event1", "event2", "event3", "event4"]; // List of event IDs
      let items = [];
      let total = 0;

      try {
        for (const eventId of eventIds) {
          const eventItems = await getEventItems(user.uid, eventId);
          items = [...items, ...eventItems];
        }

        items = items.map(item => ({
          ...item,
          price: item.quantity * 40 // Example pricing: $40 per item
        }));

        total = items.reduce((acc, item) => acc + item.price, 0);
        setCheckoutItems(items);
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching checkout items:', error);
      }
    };

    fetchCheckoutItems();
  }, [user]);

  return (
    <main className="text-black">
      <Header />
      <div className="bg-black text-white p-8">
        <h1 className="text-3xl mb-4">Checkout</h1>
        {checkoutItems.length === 0 ? (
          <p>No items in checkout.</p>
        ) : (
          <div>
            {checkoutItems.map((item, index) => (
              <div key={index} className="flex flex-row items-center mb-4">
                <div className="w-3/4">
                  <h2 className="text-xl">{item.title}</h2>
                  <p>{item.date}</p>
                  <p>{item.location}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="w-1/4 text-right">
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="text-right mt-4">
              <h2 className="text-2xl">Total: ${totalPrice.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

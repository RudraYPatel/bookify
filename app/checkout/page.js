'use client';
import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../auth-context';
import { getEventItems } from '../_utils/checkoutdata';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    creditCardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    creditCardNumber: false,
    expiryDate: false,
    cvv: false
  });

  useEffect(() => {
    const fetchCheckoutItems = async () => {
      if (!user) return;

      const eventIds = ['event1', 'event2', 'event3', 'event4']; 
      let items = [];
      let total = 0;

      try {
        for (const eventId of eventIds) {
          const eventItems = await getEventItems(user.uid, eventId);
          items = [...items, ...eventItems];
        }

        items = items.map((item) => ({
          ...item,
          price: item.quantity * 40 
        }));

        total = items.reduce((acc, item) => acc + item.price + 0.05 * item.price, 0);
        setCheckoutItems(items);
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching checkout items:', error);
      }
    };

    fetchCheckoutItems();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: formData.email.trim() === '',
      creditCardNumber: formData.creditCardNumber.trim() === '',
      expiryDate: formData.expiryDate.trim() === '',
      cvv: formData.cvv.trim() === ''
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Payment processed successfully!');
      router.push('./thanks');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <main>
      <Header />
      <div className="bg-white text-black p-8">
        <h1 className="text-3xl mb-8">Checkout</h1>
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
            <div className="text-right mt-8">
              <h2 className="text-2xl">Total: ${totalPrice.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white text-black p-8">
        <h2 className="text-2xl mb-8">Billing Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-black mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded text-black bg-white ${errors.firstName ? 'border-red-500' : ''}`}
              placeholder="First Name"
            />
            {errors.firstName && <p className="text-red-500 text-sm">First Name is required</p>}
          </div>
          <div className="mb-6">
            <label className="block text-black mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded text-black bg-white ${errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Last Name"
            />
            {errors.lastName && <p className="text-red-500 text-sm">Last Name is required</p>}
          </div>
          <div className="mb-6">
            <label className="block text-black mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded text-black bg-white ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Email Address"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>
          <div className="mb-6">
            <label className="block text-black mb-2">Phone Number (optional)</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-black bg-white"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black mb-2">Credit Card Number</label>
            <input
              type="text"
              name="creditCardNumber"
              value={formData.creditCardNumber}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded text-black bg-white ${errors.creditCardNumber ? 'border-red-500' : ''}`}
              placeholder="Credit Card Number"
            />
            {errors.creditCardNumber && <p className="text-red-500 text-sm">Credit Card Number is required</p>}
          </div>
          <div className="mb-6">
            <label className="block text-black mb-2">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded text-black bg-white ${errors.expiryDate ? 'border-red-500' : ''}`}
              placeholder="MM/YY"
            />
            {errors.expiryDate && <p className="text-red-500 text-sm">Expiry Date is required</p>}
          </div>
          <div className="mb-6">
            <label className="block text-black mb-2">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded text-black bg-white ${errors.cvv ? 'border-red-500' : ''}`}
              placeholder="CVV"
            />
            {errors.cvv && <p className="text-red-500 text-sm">CVV is required</p>}
          </div>
          <button
            type="submit"
            className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:underline"
          >
            Pay Now
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}

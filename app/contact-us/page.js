"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    concern: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your response has been recorded and you will get a reply by mail');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      concern: '',
    });
    router.push('./');
  };

  return (
    <main className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg bg-gray-300 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="concern">
              Concern
            </label>
            <textarea
              id="concern"
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none"
              onClick={() => router.push('./')}
            >
              Home
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

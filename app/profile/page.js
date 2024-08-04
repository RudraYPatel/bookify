"use client";
import React from "react";
import { useUserAuth } from "../auth-context";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main>
    <Header/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500 text-black">
      <h1 className="text-5xl text-black font-bold mb-12">Bookify Application</h1>
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg p-8 max-w-md w-full">
        {user ? (
          <>
            <p className="text-xl mb-6 text-center">
              Welcome, {user.displayName || "Guest"} ({user.email || "Unknown"})
            </p>
            <div className="flex flex-col items-center">
              <button
                className="bg-black text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out mb-4"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
              <Link
                href="./upcoming-events"
                className="text-lg text-white hover:underline"
              >
                Continue to your Bookings
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <button
              className="bg-black text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out mb-4"
              onClick={handleSignIn}
            >
              Sign In with GitHub
            </button>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </main>
  );
};

export default Page;

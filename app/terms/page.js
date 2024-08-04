"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-gray-500 text-gray-900 p-8">
        <div className="max-w-4xl mx-auto bg-black text-white rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="mb-4">
            Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website if you do not accept all of the terms and conditions stated on this page.
          </p>
          <h2 className="text-2xl font-semibold mb-2">License</h2>
          <p className="mb-4">
            Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from our website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Random Rule #1</h2>
          <p className="mb-4">
            Users must wear socks while browsing the website to ensure a comfortable experience. Failure to comply may result in a temporary suspension of access.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Random Rule #2</h2>
          <p className="mb-4">
            All users must perform a happy dance every time they successfully complete a purchase. This helps maintain a joyful atmosphere.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Random Rule #3</h2>
          <p className="mb-4">
            Any attempt to access the website during a full moon must be accompanied by a howling sound. This is a tradition we hold dear.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Random Rule #4</h2>
          <p className="mb-4">
            Users are encouraged to share their favorite cookie recipes in the comments section. The best recipes will be featured on our homepage.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Random Rule #5</h2>
          <p className="mb-4">
            The use of pirate lingo is highly recommended on Talk Like a Pirate Day. Failure to do so may result in having to walk the virtual plank.
          </p>
          <h2 className="text-2xl font-semibold mb-2">User Comments</h2>
          <p className="mb-4">
            Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data (Comments) in areas of the website. Comments do not reflect the views or opinions of our website, its agents, or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Hyperlinking to our Content</h2>
            The following organizations may link to our website without prior written approval:
            <ul className="list-disc list-inside ml-4">
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>Online directory distributors</li>
              <li>Systemwide Accredited Businesses</li>
            </ul>
          <h2 className="text-2xl font-semibold mb-2">Disclaimer</h2>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            <ul className="list-disc list-inside ml-4">
              <li>Limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
            </ul>
            </p>
            </div>
            </div>
            <Footer/>
            </main>
  )
}

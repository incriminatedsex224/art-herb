import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { motion } from "framer-motion";

// HomePage Component
function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = () => {
    alert("You are now subscribed!");
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Welcome Section */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to the Metaverse – Your Exclusive Content Platform
      </motion.h1>
      <p className="text-lg text-gray-400 text-center mb-8 max-w-lg">
        Join to access premium content from top creators. Subscribe, chat, and enjoy exclusive media.
      </p>

      {/* What is the Platform Section */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-2xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">What is this Platform?</h2>
        <p className="text-gray-400 text-lg">
          Welcome to the future of exclusive content, where creators connect directly with their fans. Enjoy
          premium videos, photos, live streams, and interactive content that you can’t find anywhere else.
        </p>
      </div>

      {/* Sign Up Section */}
      <form
        className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscription}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
        >
          Get Started
        </button>
      </form>

      {/* Featured Creator Section */}
      <div className="mt-12 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Featured Creators</h2>
        <div className="flex gap-6 justify-center">
          {/* Creator Card 1 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-64">
            <img
              src="https://via.placeholder.com/150"
              alt="Creator"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Jane Doe</h3>
            <p className="text-gray-400">Exclusive content, daily updates, and more!</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full">
              Subscribe for $9.99/month
            </button>
          </div>

          {/* Creator Card 2 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-64">
            <img
              src="https://fashionista.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2ODM0Mjc0NDQ2OTQzODc0/jungkook-of-bts-for-calvin-klein-spring-2023-by-park-jong-ha1.jpg"
              alt="Creator"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Jung Kook</h3>
            <p className="text-gray-400">Premium content and live streams await you!</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full">
              Subscribe for $19.99/month
            </button>
          </div>

          {/* Creator Card 3 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-64">
            <img
              src="https://www.sydneyoperahouse.com/sites/default/files/collaborodam_assets/MrBeast-Hero-FINAL-16x9.jpg"
              alt="Creator"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Mr. Beast</h3>
            <p className="text-gray-400">Unfiltered, behind-the-scenes content!</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full">
              Subscribe for $14.99/month
            </button>
          </div>
        </div>
      </div>

      {/* Subscription Tiers Section */}
      <div className="mt-12 w-full max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Choose Your Plan</h2>
        <div className="flex gap-6 justify-center overflow-x-auto">
          {/* Bronze Tier */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
            <h3 className="text-xl font-bold mb-4">Bronze</h3>
            <p className="text-gray-400 text-lg mb-4">$9.99/month</p>
            <ul className="text-gray-300 mb-4">
              <li>Access to basic content</li>
              <li>Weekly updates</li>
              <li>Limited interaction</li>
            </ul>
            <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg">
              Subscribe Now
            </button>
          </div>

          {/* Silver Tier */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
            <h3 className="text-xl font-bold mb-4">Silver</h3>
            <p className="text-gray-400 text-lg mb-4">$19.99/month</p>
            <ul className="text-gray-300 mb-4">
              <li>Exclusive content access</li>
              <li>Daily updates</li>
              <li>More interactions</li>
            </ul>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              Subscribe Now
            </button>
          </div>

          {/* Gold Tier */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
            <h3 className="text-xl font-bold mb-4">Gold</h3>
            <p className="text-gray-400 text-lg mb-4">$29.99/month</p>
            <ul className="text-gray-300 mb-4">
              <li>All exclusive content</li>
              <li>Behind-the-scenes access</li>
              <li>Personalized interactions</li>
            </ul>
            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// App Component (Main Routing and Navigation)
function App() {
  return (
    <Router>
      <div className="font-sans">
        {/* Navigation Bar */}
        <nav className="bg-gray-900 p-4 shadow-lg sticky top-0 z-50">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link to="/" className="text-white text-lg hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-white text-lg hover:text-gray-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/subscribe" className="text-white text-lg hover:text-gray-400">
                Subscribe
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

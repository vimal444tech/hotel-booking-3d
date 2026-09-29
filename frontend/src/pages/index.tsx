import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-600">🏨 HotelBook 3D</h1>
        <div className="space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
          <Link href="/signup" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div className="container mx-auto px-8 py-20" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Experience Hotels Like Never Before</h2>
          <p className="text-xl text-gray-600 mb-8">Explore stunning 3D room visualizations and book your perfect stay</p>
          <Link href="/rooms" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700">Browse Rooms</Link>
        </motion.div>

        {/* Featured Rooms */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[{ name: 'Standard Room', price: '$99/night', icon: '🛏️' }, { name: 'Deluxe Suite', price: '$199/night', icon: '👑' }, { name: 'Luxury Penthouse', price: '$399/night', icon: '✨' }].map((room, idx) => (
            <motion.div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition" whileHover={{ y: -10 }}>
              <div className="text-4xl mb-4">{room.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
              <p className="text-indigo-600 text-lg font-semibold">{room.price}</p>
              <button className="mt-4 w-full bg-indigo-100 text-indigo-600 py-2 rounded hover:bg-indigo-200 transition">View 3D</button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const RoomsListing = () => {
  const [filter, setFilter] = useState('all');

  const rooms = [
    { id: 1, name: 'Standard Room', price: 99, rating: 4.5, reviews: 128, maxGuests: 2, amenities: ['WiFi', 'AC', 'TV', 'Bathroom'], image: '🛏️' },
    { id: 2, name: 'Deluxe Room', price: 199, rating: 4.8, reviews: 256, maxGuests: 4, amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'], image: '🎩' },
    { id: 3, name: 'Luxury Suite', price: 399, rating: 5.0, reviews: 89, maxGuests: 6, amenities: ['WiFi', 'AC', 'TV', 'Jacuzzi'], image: '👑' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-bold mb-4">Our Rooms</h1>
          <p className="text-lg">Choose your perfect room with 3D visualization</p>
        </div>
      </div>

      <div className="bg-white shadow py-6 mb-8">
        <div className="container mx-auto px-8">
          <div className="flex gap-4 flex-wrap">
            {['all', 'budget', 'standard', 'luxury'].map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2 rounded-lg font-semibold transition ${filter === f ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <motion.div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition" whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-8xl">{room.image}</div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-2 text-gray-600">{room.rating} ({room.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">Max {room.maxGuests} guests</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((a) => (
                      <span key={a} className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <p className="text-gray-600 text-sm">Per night</p>
                    <p className="text-3xl font-bold text-indigo-600">${room.price}</p>
                  </div>
                  <Link href={`/rooms/${room.id}`} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 font-semibold">View 3D</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsListing;

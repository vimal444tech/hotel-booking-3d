import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

const RoomDetail = () => {
  const room = {
    id: 1,
    name: 'Standard Room',
    description: 'Comfortable and cozy room perfect for couples',
    price: 99,
    rating: 4.5,
    reviews: 128,
    maxGuests: 2,
    amenities: ['🛏️ Queen Bed', '📺 Smart TV', '🌐 WiFi', '❄️ AC', '🚿 Bathroom', '☕ Coffee', '📊 Desk', '🔐 Safe'],
    images: ['🛏️', '🚪', '🛁', '📺'],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow sticky top-0 z-40">
        <div className="container mx-auto px-8 py-4">
          <Link href="/rooms" className="text-indigo-600 hover:text-indigo-700 font-semibold">← Back</Link>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div className="bg-white rounded-lg shadow-lg p-8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3D Room View</h2>
            <div className="w-full h-96 bg-gradient-to-br from-indigo-200 to-purple-100 rounded-lg flex items-center justify-center text-center">
              <div>
                <div className="text-9xl mb-4">🛏️</div>
                <p className="text-gray-600 font-semibold">3D Room Viewer</p>
                <p className="text-xs text-gray-400 mt-4">Interactive 3D model with Three.js</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {room.images.map((img, idx) => (
                <button key={idx} className="aspect-square bg-indigo-100 rounded-lg hover:bg-indigo-200 text-4xl">{img}</button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{room.name}</h1>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★☆</span>
                <span className="ml-2 text-gray-600">{room.rating} ({room.reviews})</span>
              </div>
              <p className="text-gray-600 text-lg">{room.description}</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 mb-8 border-l-4 border-indigo-600">
              <p className="text-gray-600 text-sm mb-2">Price per night</p>
              <p className="text-5xl font-bold text-indigo-600">${room.price}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <span className="text-2xl mr-3">{amenity.split(' ')[0]}</span>
                    <span>{amenity.substring(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href={`/booking/${room.id}`} className="w-full bg-indigo-600 text-white py-4 rounded-lg text-center text-lg font-bold hover:bg-indigo-700 block">
              Reserve Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;

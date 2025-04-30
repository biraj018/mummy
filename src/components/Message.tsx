import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Mom and Dad,

Happy Anniversary! Watching the two of you over the years has shown me what true love, commitment, and partnership look like. Your bond is an inspiration—built on patience, laughter, support, and so much love. I'm endlessly grateful to have grown up in a home filled with warmth and kindness because of the love you share.

Thank you for being my role models, not just as individuals, but as a couple. Here's to many more beautiful years together. You both deserve all the happiness in the world.
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
         
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, i wish you both the happiest anniversary.
        </p>
      </motion.div>
    </div>
  );
};

export default Message;

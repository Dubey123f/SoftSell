// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="text-center py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 md:px-12">
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight "
//         style={{ marginLeft: "500px" }}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         whileHover={{ scale: 1.05, color: "#d6bcfa" }}
//       >
//         Turn Unused Licenses Into Cash
//       </motion.h1>
      
//       <motion.p
//         className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80"
//         style={{ marginLeft: "500px" }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.4 }}
//         whileHover={{ opacity: 1 }}
//       >
//         Join 1000+ satisfied clients and sell your unused software licenses quickly and securely with SoftSell.
//       </motion.p>

//       <motion.button
//         className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
//         style={{ marginLeft: "800px" }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2, delay: 0.6 }}
//         whileHover={{ scale: 1.1 }}
//       >
//         Get a Quote
//       </motion.button>
//     </section>
//   );
// }


import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 md:px-12">
      {/* <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, color: "#d6bcfa" }}
      >
        Turn Unused Licenses Into Cash
      </motion.h1> */}
      <motion.h1
  className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  whileHover={{ scale: 0.95, color: "#d6bcfa" }}
  sx={{ textAlign: 'center', mb: 6 }}
>
Turn Unused Licenses Into Cash
</motion.h1>

      
      <motion.p
        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        whileHover={{ opacity: 1 }}
      >
        Join 1000+ satisfied clients and sell your unused software licenses quickly and securely with SoftSell.
      </motion.p>

      <motion.button
        className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        Get a Quote
      </motion.button>
    </section>
  );
}


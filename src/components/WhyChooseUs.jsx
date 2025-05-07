// import { FaShieldAlt, FaHandshake, FaRegStar } from 'react-icons/fa';
// import { Card, CardContent, Typography, Grid } from '@mui/material';
// import { motion } from 'framer-motion';

// export default function WhyChooseUs() {
//   const features = [
//     { icon: <FaShieldAlt size={40} />, title: 'Secure Transactions', description: 'We ensure a safe and secure transaction process for all your licenses.' },
//     { icon: <FaHandshake size={40} />, title: 'Trusted Partners', description: 'We have partnered with leading software vendors to offer the best deals.' },
//     { icon: <FaRegStar size={40} />, title: 'Customer Satisfaction', description: 'Our customers love us! With 1000+ satisfied clients, we guarantee quality service.' },
//   ];

//   return (
//     <section className="py-20 bg-white text-center">
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight "
//         style={{ marginLeft: "700px" }}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         whileHover={{ scale: 1.05, color: "#d6bcfa" }}
//       >
//         Why Choose Us?
//       </motion.h1>
//       <Grid container spacing={4} justifyContent="center">
//         {features.map(({ icon, title, description }) => (
//           <Grid item xs={12} sm={6} md={4} key={title}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//             >
//               <Card sx={{ p: 3, textAlign: 'center', backgroundColor: '#f7fafc', boxShadow: 3 }}>
//                 <CardContent>
//                   <div className="text-indigo-700 mb-4">{icon}</div>
//                   <Typography variant="h6" component="div" gutterBottom>
//                     {title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </section>
//   );
// }


import { FaShieldAlt, FaHandshake, FaRegStar } from 'react-icons/fa';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    { icon: <FaShieldAlt size={40} />, title: 'Secure Transactions', description: 'We ensure a safe and secure transaction process for all your licenses.' },
    { icon: <FaHandshake size={40} />, title: 'Trusted Partners', description: 'We have partnered with leading software vendors to offer the best deals.' },
    { icon: <FaRegStar size={40} />, title: 'Customer Satisfaction', description: 'Our customers love us! With 1000+ satisfied clients, we guarantee quality service.' },
  ];

  return (
    <section className="py-20 bg-white text-center px-6 md:px-12">
      {/* <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, color: "#d6bcfa" }}
      >
        Why Choose Us?
      </motion.h1> */}
      
<motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 0.95, color: "#d6bcfa" }}
        sx={{ textAlign: 'center', mb: 6 }}
      >
   Why Choose Us?
      </motion.h1>

      <Grid container spacing={4} justifyContent="center">
        {features.map(({ icon, title, description }) => (
          <Grid item xs={12} sm={6} md={4} key={title}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Card sx={{ p: 3, textAlign: 'center', backgroundColor: '#f7fafc', boxShadow: 3 }}>
                <CardContent>
                  <div className="text-indigo-700 mb-4">{icon}</div>
                  <Typography variant="h6" component="div" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

// import { Card, CardContent, Typography, Grid } from '@mui/material';
// import { motion } from 'framer-motion';

// export default function Testimonials() {
//   const reviews = [
//     {
//       name: 'Alice Smith',
//       role: 'CTO',
//       company: 'TechCorp',
//       text: 'SoftSell made it incredibly easy to resell our licenses!',
//     },
//     {
//       name: 'Bob Johnson',
//       role: 'IT Manager',
//       company: 'WebSolutions',
//       text: 'Quick and reliable service. Highly recommend!',
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center px-6">
//      <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight "
//         style={{ marginLeft: "700px" }}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         whileHover={{ scale: 1.05, color: "#d6bcfa" }}
//       >
//         What Our Clients Say
//       </motion.h1>
//       <Grid container spacing={4} justifyContent="center">
//         {reviews.map(({ name, role, company, text }) => (
//           <Grid item xs={12} sm={6} md={4} key={name}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//             >
//               <Card sx={{ p: 3, textAlign: 'center', backgroundColor: '#f7fafc', boxShadow: 3 }}>
//                 <CardContent>
//                   <Typography variant="body2" color="text.secondary" className="italic mb-4 text-lg">
//                     “{text}”
//                   </Typography>
//                   <Typography variant="h6" component="div" gutterBottom>
//                     {name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {role}, {company}
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


import { Card, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Alice Smith',
      role: 'CTO',
      company: 'TechCorp',
      text: 'SoftSell made it incredibly easy to resell our licenses!',
    },
    {
      name: 'Bob Johnson',
      role: 'IT Manager',
      company: 'WebSolutions',
      text: 'Quick and reliable service. Highly recommend!',
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center px-6 md:px-12">
      {/* <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, color: "#d6bcfa" }}
      >
        What Our Clients Say
      </motion.h1> */}

<motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 0.95, color: "#d6bcfa" }}
        sx={{ textAlign: 'center', mb: 6 }}
      >
   What Our Clients Say
      </motion.h1>

      <Grid container spacing={4} justifyContent="center">
        {reviews.map(({ name, role, company, text }) => (
          <Grid item xs={12} sm={6} md={4} key={name}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Card sx={{ p: 3, textAlign: 'center', backgroundColor: '#f7fafc', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary" className="italic mb-4 text-lg">
                    “{text}”
                  </Typography>
                  <Typography variant="h6" component="div" gutterBottom>
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {role}, {company}
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

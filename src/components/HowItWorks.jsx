
// import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';
// import { motion } from 'framer-motion';

// export default function HowItWorks() {
//   // Button click handlers
//   const handleUploadClick = () => {
//     console.log('Upload License button clicked!');
//     // Add your file upload functionality here
//   };

//   const handleValuationClick = () => {
//     alert('Get Valuation button clicked!');
//     // Add your valuation logic here
//   };

//   const handlePaymentClick = () => {
//     alert('Get Paid button clicked!');
//     // Add payment logic here
//   };

//   return (
//     <section className="text-center py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 md:px-12">
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight "
//         style={{ marginLeft: "700px" }}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         whileHover={{ scale: 1.05, color: "#d6bcfa" }}
//       >
//        How It Works
//       </motion.h1>
//     <Box sx={{ py: 8, px: 2, backgroundColor: '#333',marginLeft:'5px',marginTop:'100px' }}>
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//                 {/* <Typography variant="h4" align="center" fontWeight="bold" gutterBottom color="white">
//           How It Works
//         </Typography> */}
//       </motion.div>

//       <Grid container spacing={4} justifyContent="center">
//         {/* Upload License Card */}
//         <Grid item xs={12} sm={4} md={4}>
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <Card sx={{ p: 2, textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
//               <Typography variant="h3" component="div" gutterBottom>
//                 📤
//               </Typography>
//               <Typography variant="h6" gutterBottom>
//                 Upload License
//               </Typography>
//               <input
//                 type="file"
//                 style={{
//                   marginTop: 8,
//                   border: '1px solid #ccc',
//                   borderRadius: 8,
//                   padding: '8px',
//                   width: '100%',
//                 }}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ mt: 2 }}
//                 onClick={handleUploadClick}
//               >
//                 Upload
//               </Button>
//             </Card>
//           </motion.div>
//         </Grid>

//         {/* Get Valuation Card */}
//         <Grid item xs={12} sm={4} md={4}>
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Card sx={{ p: 2, textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
//               <Typography variant="h3" component="div" gutterBottom>
//                 📊
//               </Typography>
//               <Typography variant="h6" gutterBottom>
//                 Get Valuation
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ mt: 2 }}
//                 onClick={handleValuationClick}
//               >
//                 Get Valuation
//               </Button>
//             </Card>
//           </motion.div>
//         </Grid>

//         {/* Get Paid Card */}
//         <Grid item xs={12} sm={4} md={4}>
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             <Card sx={{ p: 2, textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
//               <Typography variant="h3" component="div" gutterBottom>
//                 💸
//               </Typography>
//               <Typography variant="h6" gutterBottom>
//                 Get Paid
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="success"
//                 fullWidth
//                 sx={{ mt: 2 }}
//                 onClick={handlePaymentClick}
//               >
//                 Get Paid
//               </Button>
//             </Card>
//           </motion.div>
//         </Grid>
//       </Grid>
//     </Box>
//     </section>
//   );
// }


import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  // Button click handlers
  const handleUploadClick = () => {
    console.log('Upload License button clicked!');
    // Add your file upload functionality here
  };

  const handleValuationClick = () => {
    alert('Get Valuation button clicked!');
    // Add your valuation logic here
  };

  const handlePaymentClick = () => {
    alert('Get Paid button clicked!');
    // Add payment logic here
  };

  return (
    <section className="text-center py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 md:px-12">
      {/* <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, color: "#d6bcfa" }}
      >
        How It Works
      </motion.h1> */}

          <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 0.95, color: "#d6bcfa" }}
        sx={{ textAlign: 'center', mb: 6 }}
      >
     How It Works
      </motion.h1>

      <Box sx={{ py: 8, px: 2, backgroundColor: '#333', marginTop: '100px' }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <Typography variant="h4" align="center" fontWeight="bold" gutterBottom color="white">
            How It Works
          </Typography> */}
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {/* Upload License Card */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card sx={{ p: 2, textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
                <Typography variant="h3" component="div" gutterBottom>
                  📤
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Upload License
                </Typography>
                <input
                  type="file"
                  style={{
                    marginTop: 8,
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    padding: '8px',
                    width: '100%',
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handleUploadClick}
                >
                  Upload
                </Button>
              </Card>
            </motion.div>
          </Grid>

          {/* Get Valuation Card */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card sx={{ p: 2, textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
                <Typography variant="h3" component="div" gutterBottom>
                  📊
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Get Valuation
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handleValuationClick}
                >
                  Get Valuation
                </Button>
              </Card>
            </motion.div>
          </Grid>

          {/* Get Paid Card */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card sx={{ p: 2, textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
                <Typography variant="h3" component="div" gutterBottom>
                  💸
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Get Paid
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handlePaymentClick}
                >
                  Get Paid
                </Button>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

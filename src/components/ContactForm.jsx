// import { useState } from 'react';
// import {
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Typography,
//   Paper,
//   InputAdornment
// } from '@mui/material';
// import { Email, Person, Business, Message } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// export default function ContactForm() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     company: '',
//     type: '',
//     message: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you! Message submitted. (Mock only)');
//   };

//   return (
//     <section className="py-20 px-4 bg-gray-900 text-white min-h-screen">
//      <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight "
//         style={{ marginLeft: "700px" }}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         whileHover={{ scale: 1.05, color: "#d6bcfa" }}
//       >
//         Contact Us
//       </motion.h1>

//       <Paper
//         elevation={10}
//         sx={{
//           maxWidth: '600px',
//           mx: 'auto',
//           p: 4,
//           borderRadius: '16px',
//           backgroundColor: '#1e1e1e',
//           color: 'white',
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Name"
//             fullWidth
//             required
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             margin="normal"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Person sx={{ color: '#ccc' }} />
//                 </InputAdornment>
//               ),
//               style: { borderRadius: 12, color: 'white' },
//             }}
//             InputLabelProps={{ style: { color: '#aaa' } }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': { borderColor: '#444' },
//                 '&:hover fieldset': { borderColor: '#666' },
//               },
//             }}
//           />

//           <TextField
//             label="Email"
//             type="email"
//             fullWidth
//             required
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             margin="normal"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Email sx={{ color: '#ccc' }} />
//                 </InputAdornment>
//               ),
//               style: { borderRadius: 12, color: 'white' },
//             }}
//             InputLabelProps={{ style: { color: '#aaa' } }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': { borderColor: '#444' },
//                 '&:hover fieldset': { borderColor: '#666' },
//               },
//             }}
//           />

//           <TextField
//             label="Company"
//             fullWidth
//             required
//             value={form.company}
//             onChange={(e) => setForm({ ...form, company: e.target.value })}
//             margin="normal"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Business sx={{ color: '#ccc' }} />
//                 </InputAdornment>
//               ),
//               style: { borderRadius: 12, color: 'white' },
//             }}
//             InputLabelProps={{ style: { color: '#aaa' } }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': { borderColor: '#444' },
//                 '&:hover fieldset': { borderColor: '#666' },
//               },
//             }}
//           />

//           <FormControl fullWidth required margin="normal">
//             <InputLabel sx={{ color: '#aaa' }}>License Type</InputLabel>
//             <Select
//               value={form.type}
//               onChange={(e) => setForm({ ...form, type: e.target.value })}
//               label="License Type"
//               sx={{
//                 borderRadius: 2,
//                 color: 'white',
//                 backgroundColor: '#2a2a2a',
//                 '& .MuiOutlinedInput-notchedOutline': {
//                   borderColor: '#444',
//                 },
//                 '&:hover .MuiOutlinedInput-notchedOutline': {
//                   borderColor: '#666',
//                 },
//               }}
//             >
//               <MenuItem value="windows">Windows</MenuItem>
//               <MenuItem value="office">MS Office</MenuItem>
//               <MenuItem value="antivirus">Antivirus</MenuItem>
//             </Select>
//           </FormControl>

//           <TextField
//             label="Message"
//             multiline
//             rows={4}
//             fullWidth
//             required
//             value={form.message}
//             onChange={(e) => setForm({ ...form, message: e.target.value })}
//             margin="normal"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Message sx={{ color: '#ccc' }} />
//                 </InputAdornment>
//               ),
//               style: { borderRadius: 12, color: 'white' },
//             }}
//             InputLabelProps={{ style: { color: '#aaa' } }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': { borderColor: '#444' },
//                 '&:hover fieldset': { borderColor: '#666' },
//               },
//             }}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{
//               mt: 3,
//               py: 1.5,
//               fontWeight: 'bold',
//               borderRadius: 2,
//               background: 'linear-gradient(to right, #6366f1, #3b82f6)',
//               color: 'white',
//               '&:hover': {
//                 background: 'linear-gradient(to right, #4f46e5, #2563eb)',
//                 transform: 'scale(1.02)',
//               },
//             }}
//           >
//             Send Message
//           </Button>
//         </form>
//       </Paper>
//     </section>
//   );
// }


import { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Paper,
  InputAdornment,
  Grid
} from '@mui/material';
import { Email, Person, Business, Message } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Message submitted. (Mock only)');
  };

  return (
    <section className="py-20 px-4 bg-gray-900 text-white min-h-screen">
      {/* <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, color: "#d6bcfa" }}
        sx={{ textAlign: 'center', mb: 6 }}
      >
        Contact Us
      </motion.h1> */}

<motion.h1
  className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  whileHover={{ scale: 0.95, color: "#d6bcfa" }}
  sx={{ textAlign: 'center', mb: 6 }}
>
  Contact Us
</motion.h1>


      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper
            elevation={10}
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              p: 4,
              borderRadius: '16px',
              backgroundColor: '#1e1e1e',
              color: 'white',
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                fullWidth
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: '#ccc' }} />
                    </InputAdornment>
                  ),
                  style: { borderRadius: 12, color: 'white' },
                }}
                InputLabelProps={{ style: { color: '#aaa' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#444' },
                    '&:hover fieldset': { borderColor: '#666' },
                  },
                }}
              />

              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: '#ccc' }} />
                    </InputAdornment>
                  ),
                  style: { borderRadius: 12, color: 'white' },
                }}
                InputLabelProps={{ style: { color: '#aaa' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#444' },
                    '&:hover fieldset': { borderColor: '#666' },
                  },
                }}
              />

              <TextField
                label="Company"
                fullWidth
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business sx={{ color: '#ccc' }} />
                    </InputAdornment>
                  ),
                  style: { borderRadius: 12, color: 'white' },
                }}
                InputLabelProps={{ style: { color: '#aaa' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#444' },
                    '&:hover fieldset': { borderColor: '#666' },
                  },
                }}
              />

              <FormControl fullWidth required margin="normal">
                <InputLabel sx={{ color: '#aaa' }}>License Type</InputLabel>
                <Select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  label="License Type"
                  sx={{
                    borderRadius: 2,
                    color: 'white',
                    backgroundColor: '#2a2a2a',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#444',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#666',
                    },
                  }}
                >
                  <MenuItem value="windows">Windows</MenuItem>
                  <MenuItem value="office">MS Office</MenuItem>
                  <MenuItem value="antivirus">Antivirus</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Message sx={{ color: '#ccc' }} />
                    </InputAdornment>
                  ),
                  style: { borderRadius: 12, color: 'white' },
                }}
                InputLabelProps={{ style: { color: '#aaa' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#444' },
                    '&:hover fieldset': { borderColor: '#666' },
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: 'bold',
                  borderRadius: 2,
                  background: 'linear-gradient(to right, #6366f1, #3b82f6)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(to right, #4f46e5, #2563eb)',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}

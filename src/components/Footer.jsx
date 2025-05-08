

// import { Box, Container, Typography, Link, Stack, IconButton } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: '#121212', // Dark background
//         color: '#ccc', // Light text
//         py: 4,
//         borderTop: '1px solid #333',
//         mt: 8,
//       }}
//     >
//       <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
//         {/* Text */}
//         <Typography variant="body2" sx={{ color: '#aaa' }} gutterBottom>
//           © {new Date().getFullYear()} <strong>SoftSell</strong>. All rights reserved.
//         </Typography>

//         {/* Links */}
//         <Stack
//           direction="row"
//           spacing={3}
//           justifyContent="center"
//           sx={{ mb: 2 }}
//         >
//           <Link href="#" underline="hover" sx={{ color: '#90caf9' }}>
//             Privacy Policy
//           </Link>
//           <Link href="#" underline="hover" sx={{ color: '#90caf9' }}>
//             Terms of Service
//           </Link>
//           <Link href="#" underline="hover" sx={{ color: '#90caf9' }}>
//             Contact Us
//           </Link>
//         </Stack>

//         {/* Social Icons */}
//         <Stack direction="row" spacing={2} justifyContent="center">
//           <IconButton aria-label="Facebook" sx={{ color: '#90caf9' }}>
//             <FacebookIcon />
//           </IconButton>
//           <IconButton aria-label="Twitter" sx={{ color: '#90caf9' }}>
//             <TwitterIcon />
//           </IconButton>
//           <IconButton aria-label="Instagram" sx={{ color: '#90caf9' }}>
//             <InstagramIcon />
//           </IconButton>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }


import { Box, Container, Typography, Link, Stack, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#121212', // Dark background
        color: '#ccc', // Light text
        py: 4,
        borderTop: '1px solid #333',
        mt: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        {/* Text */}
        <Typography variant="body2" sx={{ color: '#aaa' }} gutterBottom>
          © {new Date().getFullYear()} <strong>SoftSell</strong>. All rights reserved.
        </Typography>

        {/* Links */}
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <Link href="#" underline="hover" sx={{ color: '#90caf9' }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="hover" sx={{ color: '#90caf9' }}>
            Terms of Service
          </Link>
          <Link href="#" underline="hover" sx={{ color: '#90caf9' }}>
            Contact Us
          </Link>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton aria-label="Facebook" sx={{ color: '#90caf9' }}>
            <FaFacebook />
          </IconButton>
          <IconButton aria-label="Twitter" sx={{ color: '#90caf9' }}>
            <FaTwitter />
          </IconButton>
          <IconButton aria-label="Instagram" sx={{ color: '#90caf9' }}>
            <FaInstagram />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

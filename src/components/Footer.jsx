import { Box, Container, Typography, Link, Stack, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

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
            <Facebook />
          </IconButton>
          <IconButton aria-label="Twitter" sx={{ color: '#90caf9' }}>
            <Twitter />
          </IconButton>
          <IconButton aria-label="Instagram" sx={{ color: '#90caf9' }}>
            <Instagram />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

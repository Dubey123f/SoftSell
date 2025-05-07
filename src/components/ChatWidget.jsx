import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Fab,
  useTheme,
} from '@mui/material';
import { Send, Chat, Close } from '@mui/icons-material';

export default function ChatWidget() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  // Random responses for common customer inquiries
  const randomResponses = {
    "What are your working hours?": "Our working hours are Monday to Friday, 9 AM to 5 PM.",
    "Do you offer support on weekends?": "We offer support only on weekdays, Monday to Friday.",
    "What services do you offer?": "We offer a range of services including web development, digital marketing, and SEO optimization.",
    "How can I contact customer support?": "You can reach customer support via email at support@company.com.",
    "Where are you located?": "Our office is located at 123 Business St., City, Country.",
    "Can I speak to a manager?": "Sure! I can schedule a meeting with our manager for you. Please leave your contact details.",
    "How do I make a payment?": "Payments can be made through our secure online portal using credit/debit cards or PayPal.",
    "Do you offer refunds?": "Yes, we offer refunds within 30 days of purchase, subject to our refund policy.",
    "Can I get a quote for your services?": "Sure! Please share more details about the services you're interested in, and we will provide a quote."
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulating a response from the bot based on user input
    const botResponse = randomResponses[input] || "Sorry, I didn't understand your question. Can you please rephrase?";

    const botMsg = { sender: 'bot', text: botResponse };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <Box position="fixed" bottom={16} right={16} zIndex={9999}>
      {open && (
        <Paper
          elevation={12}
          sx={{
            width: 320,
            height: 450,
            display: 'flex',
            flexDirection: 'column',
            p: 2,
            bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'background.paper',
            borderRadius: 3,
            boxShadow: 6,
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="h6" fontWeight="bold">
              💬 SoftSell AI
            </Typography>
            <IconButton size="small" onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          <Box
            flex={1}
            overflow="auto"
            display="flex"
            flexDirection="column"
            gap={1}
            mb={1}
            px={1}
            sx={{
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': {
                width: 6,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.grey[400],
                borderRadius: 3,
              },
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                bgcolor={msg.sender === 'user' ? 'primary.main' : 'grey.300'}
                color={msg.sender === 'user' ? 'white' : 'text.primary'}
                px={2}
                py={1}
                borderRadius={2}
                maxWidth="75%"
              >
                {msg.text}
              </Box>
            ))}
          </Box>

          <Box display="flex" gap={1}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              sx={{
                bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'white',
                borderRadius: 2,
              }}
            />
            <IconButton onClick={sendMessage} color="primary">
              <Send />
            </IconButton>
          </Box>
        </Paper>
      )}

      <Fab
        color="primary"
        onClick={() => setOpen(!open)}
        aria-label="chat"
        sx={{ boxShadow: 6 }}
      >
        {open ? <Close /> : <Chat />}
      </Fab>
    </Box>
  );
}

import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-white relative min-h-screen">
      {/* Light/Dark Mode Toggle */}
      <ThemeToggle />

      {/* Main Sections */}
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* Chat Support Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;

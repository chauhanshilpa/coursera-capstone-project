import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import HeroSection from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'

function App() {
  // function submitForm(formData) {}
  // if  submitAPI then return to confirmedbooking page

  return (
    <>
      <Navbar />
      <main id='main'>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App

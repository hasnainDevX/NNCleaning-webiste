"use client"
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Booking from "./components/Booking"
import Pricing from './components/Pricing';
export default function Home() {

  return (
 
    <main className='h-auto bg-white overflow-hidden'>
      <div>
         <Navbar />
        <Header />
      </div>
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}

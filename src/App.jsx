import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader';
import { FaArrowUp, FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope, FaTimes,FaUser } from 'react-icons/fa';
import RevealOnScroll from './HOOK/RevealOnScroll';
import Navbar from './NAVBAR/Navbar';
import Carousel from './CAROUSEL/Carousel';
import Services from './SERVICES/Services';
import Pricing from './PRICING_RANGE/Pricing';
import About from './ABOUT_US/About';
import Mission_vision_value from './ABOUT_US/Mission_vision_value';
import Choose from './CHOOSE_US/Choose';
import Empower from './EMPOWERING/Empower';
import Completed from './ALL_COMPLETED/Completed';
import Team from './TEAM/Team';
import Review from './REVIEW/Review';
import Footer from './FOOTER/Footer';
import Portfolio from './PORTFOLIO/Projects';
import About_part from './ALL_PART_OF_COMPONENTS/About_part';
import Services_part from './ALL_PART_OF_COMPONENTS/Services_part';
import Portfolio_part from './ALL_PART_OF_COMPONENTS/Portfolio_part';
import Contact_part from './ALL_PART_OF_COMPONENTS/Contact_part';
import Team_part from './ALL_PART_OF_COMPONENTS/Team_part';
import ScrollToTop from './ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Show or hide scroll-to-top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  return (
    <>
      {isLoading ? (
        <div className='flex flex-col gap-4 justify-center items-center h-[100vh]'>
          <PuffLoader color='#3b82f6' />
          <p className='text-white text-xl'>Loading...</p>
        </div>
      ) : (
        <div>
          <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          
          <Routes>


          <Route
                path="/*"
                element={
                  <>
                    <Carousel />
                    <RevealOnScroll>
                      <About />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Mission_vision_value />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Choose />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Completed />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Services />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Team />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Empower />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Pricing />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Portfolio />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Review />
                    </RevealOnScroll>
                    
                  </>
                }
              
              />

          <Route
                path="/home"
                element={
                  <>
                    <Carousel />
                    <RevealOnScroll>
                      <About />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Mission_vision_value />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Choose />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Completed />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Services />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Team />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Empower />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Pricing />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Portfolio />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Review />
                    </RevealOnScroll>
                    
                    
                  </>
                }
              
              />

          
               <Route
                path="/about_us"
                element={
                  <> 
                   <RevealOnScroll>
                    <About_part />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Mission_vision_value />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Choose />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Completed />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/services"
                element={
                  <> 
                   <RevealOnScroll>
                    <Services_part />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/portfolio"
                element={
                  <> 
                   <RevealOnScroll>
                    <Portfolio_part />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/our_team"
                element={
                  <> 
                   <RevealOnScroll>
                    <Team_part />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/contact_us"
                element={
                  <> 
                   <RevealOnScroll>
                    <Contact_part />
                   </RevealOnScroll>
                  </>
                }
                  />



          </Routes>
          
          
          <Footer />
          
          </BrowserRouter>

          {/* Social Media Icon Button */}
          <div className='fixed top-1/2 left-2 transform -translate-y-1/2'>
            {showSocialIcons ? (
              <div className='flex flex-col items-center gap-4 bg-black z-10 animate-fade-in px-3 py-3 rounded-md'>
                <a href="https://www.facebook.com/profile.php?id=61560502701437&mibextid=ZbWKwL" target='_blank'><FaFacebook className='text-blue-500 text-2xl cursor-pointer animate-fade-in' /></a>
                <a href="https://wa.me/8801741987566?text=Hello!" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-green-400 text-2xl cursor-pointer animate-fade-in' /></a>
                <a href="https://www.linkedin.com/company/diffusion-five/" target='_blank'><FaLinkedin className='text-blue-500 text-2xl cursor-pointer animate-fade-in' /></a>
                <a href="mailto:diffusionfive@gmail.com" target='_blank'><FaEnvelope className='text-red-500 text-2xl cursor-pointer animate-fade-in' /></a>
                <FaTimes className='text-white text-2xl cursor-pointer animate-fade-in' onClick={toggleSocialIcons} />
              </div>
            ) : (
              <FaUser className='text-white text-3xl bg-black px-2 -ml-2 cursor-pointer' onClick={toggleSocialIcons} />
            )}
          </div>

          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className='fixed bottom-5 right-5 bg-[black] text-white p-3 rounded-full shadow-lg transition-colors duration-300'
            >
              <FaArrowUp size={20} />
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default App;

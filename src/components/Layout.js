import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from '../assets/images/landing_herosection1.jpeg';
import image2 from '../assets/images/landing_herosection2.jpeg';
import image3 from '../assets/images/landing_herosection3.jpeg';

const images = [image1, image2, image3];

const Layout = ({ children, heroContent }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[60vh] md:h-[80vh] hero-section"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: "background-image 1s ease-in-out"
        }}
      >
        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        
        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-4 md:px-6">
          {heroContent}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="w-full">
          {children}
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
      
      {/* Inline CSS for Hero Section */}
      <style jsx>{`
        @keyframes backgroundTransition {
          0%, 25% {
            background-image: url(${image1});
            background-position: center;
            background-size: cover;
          }
          33%, 58% {
            background-image: url(${image2});
            background-position: center;
            background-size: cover;
          }
          66%, 91% {
            background-image: url(${image3});
            background-position: center;
            background-size: cover;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;

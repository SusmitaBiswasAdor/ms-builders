

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Layout from './components/Layout';
// import LandingPage from './components/LandingPage';
// import AboutUs from './components/AboutUs';
// import CompanyProfile from './components/CompanyProfile';
// import ServicesAndEquipment from './components/ServicesAndEquipment';
// import Clients from './components/Clients';
// import CertificatesAndAwards from './components/CertificatesAndAwards';
// import Gallery from './components/Gallery';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar */}
//         <Navbar />
        
//         <Routes>
//           {/* LandingPage Route */}
//           <Route path="/" element={<LandingPage />} />
          
//           {/* Routes with Layout */}
//           <Route element={<Layout />}>
//             <Route path="/about-us" element={<AboutUs />} />
//             <Route path="/company-profile" element={<CompanyProfile />} />
//             <Route path="/services-and-equipment" element={<ServicesAndEquipment />} />
//             <Route path="/clients" element={<Clients />} />
//             <Route path="/certificates-and-awards" element={<CertificatesAndAwards />} />
//             <Route path="/gallery" element={<Gallery />} />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components

import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import CompanyProfile from "./components/CompanyProfile";
import ServicesAndEquipment from "./components/ServicesAndEquipment";
import Clients from "./components/Clients";
import CertificatesAndAwards from "./components/CertificatesAndAwards";
import Gallery from "./components/Gallery";
//footer
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/services-and-equipment" element={<ServicesAndEquipment />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/certificates-and-awards" element={<CertificatesAndAwards />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Footer Route */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;

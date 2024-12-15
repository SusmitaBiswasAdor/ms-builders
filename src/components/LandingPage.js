import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import gal6 from "../assets/images/gallery/gal6.jpg";
import gal9 from "../assets/images/gallery/gal9.jpg";
import gal4 from "../assets/images/gallery/gal4.jpg";

const LandingPage = () => {
  const heroContent = (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
      <div className="bg-gray-800 bg-opacity-70 p-8 md:p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 mb-4">
          Welcome to MS Builders
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
          Trusted and Experienced in Engineering. 
        </p>
        <Link to="/company-profile">
          <button className="bg-yellow-600 hover:bg-yellow-400 text-white px-8 py-3 text-lg md:text-xl font-semibold rounded-lg transition duration-300 shadow-lg">
            View Portfolio
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <Layout heroContent={heroContent}>
        {/* Services Section */}
        <div className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
                Building Excellence Together
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                With years of experience in the construction industry, we've built our reputation on delivering exceptional quality and innovative solutions. Explore our comprehensive range of services designed to meet your construction needs.
              </p>
            </div>
            <h2 className="text-5xl font-bold text-center text-yellow-600 mb-16">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Construction Services Card */}
              <Link to="/services-and-equipment" className="group">
                <div className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-yellow-100 rounded-full p-4">
                      <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="bg-yellow-50 rounded-full p-3 group-hover:bg-yellow-100 transition-colors duration-300">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    Construction Services
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    From residential projects to commercial developments, we deliver excellence in every brick we lay. Our expert team ensures quality construction that stands the test of time.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm">Building</span>
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm">Renovation</span>
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm">Design</span>
                  </div>
                </div>
              </Link>

              {/* Equipment Card */}
              <Link to="/services-and-equipment" className="group">
                <div className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-yellow-100 rounded-full p-4">
                      <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <div className="bg-yellow-50 rounded-full p-3 group-hover:bg-yellow-100 transition-colors duration-300">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    Equipment Solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Access our state-of-the-art construction equipment fleet. We provide modern machinery and tools to ensure efficient and precise project execution.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm">Heavy Machinery</span>
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm">Tools</span>
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm">Rentals</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-yellow-600 mb-16">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "⭐",
                  title: "Excellence",
                  description: "Over 15 years of delivering exceptional construction services"
                },
                {
                  icon: "🤝",
                  title: "Reliability",
                  description: "Trusted by leading companies and organizations across Bangladesh"
                },
                {
                  icon: "💪",
                  title: "Expertise",
                  description: "Skilled team of professionals with extensive industry experience"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-8 rounded-xl bg-gray-50 transform transition duration-300 hover:scale-105">
                  <div className="inline-block bg-yellow-100 rounded-full p-4 mb-6">
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-yellow-600 mb-12">
              Our Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Project Cards */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src={gal6}
                    alt="Infrastructure Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    Infrastructure Development
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Specialized in large-scale infrastructure projects.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src={gal9}
                    alt="Commercial Construction"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    Commercial Construction
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Building modern commercial spaces with excellence.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src={gal4}
                    alt="Industrial Projects"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    Industrial Projects
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Creating efficient industrial facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-20 bg-yellow-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
              Let's discuss how we can bring your construction vision to life. Our team is ready to help you every step of the way.
            </p>
            <Link to="/company-profile">
              <button className="px-8 py-4 bg-white text-yellow-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 text-lg">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default LandingPage;

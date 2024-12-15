import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import founderImage from "../assets/images/Sanjib.png"; // Add your image path here
import directorImage from "../assets/images/Litu.png"; // Add your image path here

const AboutUs = () => {
  const heroContent = (
    <>
      <div className="absolute bottom-20 left-5 right-5">
        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 mb-4">
            About Us
          </h1>
          <p className="text-xl text-white font-medium drop-shadow">
            Learn more about our journey and leadership
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {/* Pass the centered content to Layout */}
      <Layout heroContent={heroContent}>
        {/* Introduction Section */}
        

        {/* General Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-8">
              Our Journey and Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              M.S. Builders began as a vision to provide exceptional construction
              services with a commitment to quality, integrity, and professionalism. 
              Over the years, we have established a strong reputation in the 
              industry, focusing on both residential and commercial projects. 
              Our mission is to continue delivering excellence and to make lasting 
              contributions to the communities we serve.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 text-center mb-12">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Founder Card */}
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="mb-6">
                  <img
                    src={founderImage}
                    alt="Founder"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-yellow-600 mx-auto shadow-lg object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Md. Sanjib Hasan</h3>
                <p className="text-yellow-600 font-semibold mb-4">Founder & Managing Director</p>
                <p className="text-gray-600 text-sm md:text-base">
                  With over 20 years of experience in construction and project management,
                  Md. Sanjib Hasan has led MS Builders to become one of the most trusted
                  names in the industry.
                </p>
              </div>

              {/* Director Card */}
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="mb-6">
                  <img
                    src={directorImage}
                    alt="Director"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-yellow-600 mx-auto shadow-lg object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Md. Litu</h3>
                <p className="text-yellow-600 font-semibold mb-4">Director</p>
                <p className="text-gray-600 text-sm md:text-base">
                  Md. Litu brings innovative solutions and strategic vision to our projects,
                  ensuring the highest standards of quality and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-yellow-600 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Together
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Whether you are looking to construct your dream home or need a partner
            for large-scale commercial projects, M.S. Builders is ready to bring your
            vision to life. Get in touch with us today and let's start building!
          </p>
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-4">Connect with Us</h3>
            <p className="text-lg mb-6">Reach out for further information or collaboration opportunities</p>
            <Link to="/company-profile">
              <button className="px-6 py-3 bg-white text-yellow-600 font-bold rounded-lg shadow hover:bg-gray-200">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default AboutUs;

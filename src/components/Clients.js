// src/pages/Clients.js
// import React from "react";

// function Clients() {
//   return (
//     <div className="bg-white shadow p-6 rounded">
//       <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
//       <ul className="list-disc ml-5">
//         <li>Client 1</li>
//         <li>Client 2</li>
//       </ul>
//     </div>
//   );
// }

// export default Clients;
import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const clients = [
  "OSJI JOINT VENTURE Japan",
  "OTJ JOINT VENTURE Japan",
  "PWD",
  "BIWTA",
  "Department of prison",
  "Mir Akhter Hossain Ltd.",
  "Mir Ceramic Ltd.",
  "Mir Holdings Ltd.",
  "Mir Cement Ltd.",
  "Bangladesh Railway",
  "Samwhan Corporation",
  "Hyundai South Korea",
  "Abdul Momen Ltd.",
  "Hanil Holdings South Korea",
  "Obayashi Corporation Japan",
  "Toa Corporation Japan",
  "LGRD",
  "Ministry of Youth and Sports",
];

const Clients = () => {
  const heroContent = (
    <>
      <div className="absolute bottom-20 left-5 right-5">
        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 mb-4">
            Our Clients
          </h1>
          <p className="text-xl text-white font-medium drop-shadow">
            Trusted by leading organizations across industries
          </p>
        </div>
      </div>
    </>
  );

  return (
    <Layout heroContent={heroContent}>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 text-center mb-12">
            Our Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 rounded-lg shadow-sm text-center hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-gray-800">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-yellow-600 text-center text-white">
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
  );
};

export default Clients;

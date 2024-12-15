// src/pages/CompanyProfile.js
import React from "react";
import Layout from "./Layout";

const companyDetails = {
  address: "A&A Tower, 173 Arambag, Level-5, Flat-5A, Motijheel, Dhaka-1000, Bangladesh",
  telephone: "+8801735731119 & +8801710787711",
  email: "msbuilders777@gmail.com",
  officeSpace: "1450 sft.",
  status: "Self Proprietorship",
  yearOfEstablishment: "2012",
  tradeLicenseNo: "TRAD/DSCE/26728/2012",
  vatRegistration: "003548724-0202",
  pin: "27494119715",
  proprietors: ["Mr. Sanjib Kumar Biswas"],
  partnersAndDirectors: ["Md. Erfam Ahmed"],
  employeeParticulars: ["165 Employees Consisting Technical Professionals Administrative and Financial Employees"],
};

const heroContent = (
  <>
    <div className="absolute bottom-20 left-5 right-5">
      <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 mb-4">
          Company Profile
        </h1>
        <p className="text-xl text-white font-medium drop-shadow">
          Building excellence, delivering trust
        </p>
      </div>
    </div>
  </>
);


const CompanyProfile = () => {
  return (
    <div>
      {/* Hero Section */}
      <Layout heroContent={heroContent}>
      {/* Company Details Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-yellow-600 text-center mb-12">About the Company</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-lg text-gray-700"><strong>Address:</strong> {companyDetails.address}</p>
              <p className="text-lg text-gray-700"><strong>Telephone:</strong> {companyDetails.telephone}</p>
              <p className="text-lg text-gray-700"><strong>Email:</strong> {companyDetails.email}</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Details</h3>
              <p className="text-lg text-gray-700"><strong>Office Space:</strong> {companyDetails.officeSpace}</p>
              <p className="text-lg text-gray-700"><strong>Status:</strong> {companyDetails.status}</p>
              <p className="text-lg text-gray-700"><strong>Year of Establishment:</strong> {companyDetails.yearOfEstablishment}</p>
              <p className="text-lg text-gray-700"><strong>Trade License No.:</strong> {companyDetails.tradeLicenseNo}</p>
              <p className="text-lg text-gray-700"><strong>VAT Registration:</strong> {companyDetails.vatRegistration}</p>
              <p className="text-lg text-gray-700"><strong>PIN:</strong> {companyDetails.pin}</p>
            </div>
          </div>

          <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Key Personnel</h3>

            <div className="mb-8">
              <h4 className="text-2xl font-medium text-yellow-600">Proprietors</h4>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {companyDetails.proprietors.map((proprietor, index) => (
                  <li key={index}>{proprietor}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-medium text-yellow-600">Partners and Directors</h4>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {companyDetails.partnersAndDirectors.map((partner, index) => (
                  <li key={index}>{partner}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-medium text-yellow-600">Employee Particulars</h4>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {companyDetails.employeeParticulars.map((employee, index) => (
                  <li key={index}>{employee}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      
    </Layout>
    </div>
  );
};

export default CompanyProfile;




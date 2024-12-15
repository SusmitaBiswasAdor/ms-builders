import React, { useState } from "react";
import Layout from "./Layout";

// Import gallery images
import img1 from "../assets/images/gallery/gal1.jpg";
import img2 from "../assets/images/gallery/gal2.jpg";
import img3 from "../assets/images/gallery/gal3.jpg";
import img4 from "../assets/images/gallery/gal4.jpg";
import img5 from "../assets/images/gallery/gal5.jpg";
import img6 from "../assets/images/gallery/gal6.jpg";
import img7 from "../assets/images/gallery/gal7.jpg";
import img8 from "../assets/images/gallery/gal8.jpg";
import img9 from "../assets/images/gallery/gal9.jpg";
import img10 from "../assets/images/gallery/gal10.jpg";
import img11 from "../assets/images/gallery/gal11.jpg";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const heroContent = (
    <>
      <div className="absolute bottom-20 left-5 right-5">
        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-white font-medium drop-shadow">
            A glimpse into our work
          </p>
        </div>
      </div>
    </>
  );

  // Handlers for navigation
  const showPreviousImage = () => {
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : galleryImages.length - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div>
      <Layout heroContent={heroContent}>
        {/* Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 text-center mb-12">
              Our Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  {/* Overlay for Hover Effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center rounded-lg transition duration-300">
                    <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                      View Image
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for Full-View Image */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-screen-lg w-full p-4">
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold bg-gray-700 bg-opacity-70 px-4 py-2 rounded-full hover:bg-gray-800 transition"
                onClick={() => setSelectedImageIndex(null)}
              >
                &times;
              </button>

              {/* Display the selected image */}
              <img
                src={galleryImages[selectedImageIndex]}
                alt={`Gallery ${selectedImageIndex + 1}`}
                className="max-w-full max-h-screen mx-auto rounded-lg"
              />

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-700 bg-opacity-70 px-3 py-2 rounded-full hover:bg-gray-800 transition"
                onClick={showPreviousImage}
              >
                &#8249;
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-700 bg-opacity-70 px-3 py-2 rounded-full hover:bg-gray-800 transition"
                onClick={showNextImage}
              >
                &#8250;
              </button>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Gallery;

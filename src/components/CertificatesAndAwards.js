// CertificatesAndAwards.js

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Layout from "./Layout";

// Import award images
import award1 from "../assets/images/awards/award1.jpg";
import award2 from "../assets/images/awards/award2.jpg";
import award3 from "../assets/images/awards/award3.jpg";
import award4 from "../assets/images/awards/award4.jpg";
import award5 from "../assets/images/awards/award5.jpg";
import award7 from "../assets/images/awards/award7.jpg";
import award10 from "../assets/images/awards/award10.jpg";
import award11 from "../assets/images/awards/award11.jpg";
import award12 from "../assets/images/awards/award12.jpg";

const CertificatesAndAwards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const awardImages = useMemo(() => [
    award1,
    award2,
    award3,
    award4,
    award5,
    award7,
    award10,
    award11,
    award12,
  ], []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handlePrevious = useCallback((e) => {
    e.stopPropagation();
    const newIndex = (awardImages.indexOf(selectedImage) - 1 + awardImages.length) % awardImages.length;
    setSelectedImage(awardImages[newIndex]);
  }, [awardImages, selectedImage]);

  const handleNext = useCallback((e) => {
    e.stopPropagation();
    const newIndex = (awardImages.indexOf(selectedImage) + 1) % awardImages.length;
    setSelectedImage(awardImages[newIndex]);
  }, [awardImages, selectedImage]);

  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return;
    
    if (e.key === 'ArrowLeft') {
      handlePrevious(e);
    } else if (e.key === 'ArrowRight') {
      handleNext(e);
    } else if (e.key === 'Escape') {
      closeModal();
    }
  }, [selectedImage, closeModal, handlePrevious, handleNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const heroContent = (
    <>
      <div className="absolute bottom-20 left-5 right-5">
        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 mb-4">
            Certificates & Awards
          </h1>
          <p className="text-xl text-white font-medium drop-shadow">
            Recognition of our excellence and achievements
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Layout heroContent={heroContent}>
        
        {/* Introduction Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-6">
              Achievements and Recognition
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              At M.S. Builders, we are honored to have received numerous awards,
              certifications, and licenses that showcase our commitment to quality
              and excellence. Here is a collection of our proudest achievements.
            </p>
          </div>
        </section>

        {/* Awards Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[800px] scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-200 pr-2">
              {awardImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image}
                      alt={`Award ${index + 1}`}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <p className="text-lg font-semibold">Click to view</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-500 transition-colors z-10"
              >
                ×
              </button>

              {/* Previous button */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-yellow-500 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ‹
              </button>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-yellow-500 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ›
              </button>

              {/* Image container */}
              <div className="w-full h-full overflow-auto p-4">
                <img
                  src={selectedImage}
                  alt="Award"
                  className="w-full h-auto max-h-full object-contain mx-auto rounded-lg shadow-2xl"
                  style={{ maxHeight: 'calc(90vh - 2rem)' }}
                />
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default CertificatesAndAwards;

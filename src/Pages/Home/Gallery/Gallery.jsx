import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Fake array of scholarship event photos
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
      alt: "Graduation ceremony",
      span: "row-span-1",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Students in classroom",
      span: "",
    },

    {
      id: 3,
      url: "https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Academics",
      span: "col-span-1 row-span-1", // Takes 2 columns and 1 row
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      alt: "Scholarship winners",
      span: "row-span-2", // Takes 2 columns
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
      alt: "Educational workshop",
      span: "col-span-1 row-span-2",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
      alt: "Student achievement",
      span: "row-span-1 col-span-2", // Takes 2 rows
    },

    {
      id: 8,
      url: "https://plus.unsplash.com/premium_photo-1681506093231-597d66458774?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Students studying",
      span: "",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      alt: "Academic excellence",
      span: "col-span-1 row-span-1", // Takes 2 columns and 2 rows
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      alt: "Students celebrating",
      span: "row-span-1 col-span-1", // Takes 1 row and 2 columns
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="py-16  bg-gradient-to-b from-gray-100 to-white">
      <div className=" mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Heading part */}
          <motion.div
            className="pl-6  text-start "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-3 text-4xl font-bold text-black">
              Our <span className="text-[#4A40F7]">Gallery</span>
            </h1>
            <p className="text-lg text-gray-600">
              Celebrating moments of achievement, learning, and success with our
              scholarship recipients
            </p>
            {/* Decorative line */}
            <motion.div
              className=" mt-4 h-1 w-52 rounded-full
             bg-gradient-to-r from-[#4A40F7] to-purple-500"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4"></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"></p>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl ${image.span}`}
              onClick={() => openModal(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full z-10"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            <div
              className="relative max-w-5xl max-h-[90vh] animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />

              <div className="mt-4 text-center">
                <p className="text-white text-lg font-medium">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Gallery;

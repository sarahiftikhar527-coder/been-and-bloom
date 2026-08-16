import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

import specialbagles from "../../assets/images/specialbagles.jpg";
import premiumbagles from "../../assets/images/premiumbagles.jpg";
import burrito from "../../assets/images/burrito.png";
import breakfastbagles from "../../assets/images/breakfastbagles.jpg";
import baglesdeal from "../../assets/images/baglesdeal.jpg";
import alldaybagles from "../../assets/images/alldaybagles.jpg";

const gallery = [
  {
    id: 1,
    image: specialbagles,
    title: "Signature Latte",
    category: "Coffee",
    description:
      "Smooth, creamy and carefully crafted for the perfect coffee moment.",
  },
  {
    id: 2,
    image: premiumbagles,
    title: "Fresh Espresso",
    category: "Signature",
    description:
      "Rich espresso made from carefully selected premium coffee beans.",
  },
  {
    id: 3,
    image: burrito,
    title: "Coffee Beans",
    category: "Premium",
    description:
      "Freshly selected beans bringing exceptional aroma and flavor.",
  },
  {
    id: 4,
    image: breakfastbagles,
    title: "Coffee Shop",
    category: "Café",
    description:
      "A warm and welcoming atmosphere designed for memorable moments.",
  },
  {
    id: 5,
    image: baglesdeal,
    title: "Barista",
    category: "Experience",
    description:
      "Passionate craftsmanship behind every carefully prepared cup.",
  },
  {
    id: 6,
    image: alldaybagles,
    title: "Desserts",
    category: "Sweet Treats",
    description:
      "Delicious treats made to perfectly complement your favorite coffee.",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeGallery = () => {
    setSelectedIndex(null);
  };

  const previousImage = (event) => {
    event?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === 0 ? gallery.length - 1 : current - 1;
    });
  };

  const nextImage = (event) => {
    event?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === gallery.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => {
          if (current === null) return null;
          return current === 0 ? gallery.length - 1 : current - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => {
          if (current === null) return null;
          return current === gallery.length - 1 ? 0 : current + 1;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#F8F5F2] py-24 sm:py-28 lg:py-32"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D6A354]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#8B5A2B]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#B37A33]" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#B37A33]">
                Gallery
              </span>

              <span className="h-px w-10 bg-[#B37A33]" />
            </div>

            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#2C1810] sm:text-5xl lg:text-6xl">
              Our{" "}
              <span className="text-[#B37A33]">
                Coffee Moments
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6F625A] sm:text-base sm:leading-8">
              A glimpse into our handcrafted coffee, premium ingredients,
              cozy café atmosphere, and unforgettable customer experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group relative h-[360px] overflow-hidden rounded-[2rem] text-left shadow-[0_15px_40px_rgba(44,24,16,0.12)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/35 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B5A2B] shadow-lg backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#2C1810] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <FiMaximize2 size={17} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#D6A354]">
                    <span>View Moment</span>
                    <FiArrowRight size={14} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#8B5A2B] via-[#D6A354] to-[#B37A33] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-14 flex justify-center"
          >
            <motion.button
              type="button"
              onClick={() => setSelectedIndex(0)}
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex items-center gap-3 rounded-full bg-[#2C1810] px-7 py-4 text-sm font-bold text-white shadow-xl transition-colors duration-300 hover:bg-[#B37A33]"
            >
              <span>View Full Gallery</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <FiArrowRight size={15} />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={closeGallery}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#160C08]/95 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center"
            >
              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close gallery"
                className="absolute right-0 top-0 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <FiX size={22} />
              </button>

              <div className="absolute left-0 top-0 z-30 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                {selectedIndex + 1} / {gallery.length}
              </div>

              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 sm:left-2"
              >
                <FiChevronLeft size={28} />
              </button>

              <div className="flex max-h-[78vh] max-w-[90vw] items-center justify-center overflow-hidden rounded-3xl bg-black/20 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={gallery[selectedIndex].id}
                    src={gallery[selectedIndex].image}
                    alt={gallery[selectedIndex].title}
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="max-h-[78vh] max-w-[90vw] object-contain"
                  />
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 sm:right-2"
              >
                <FiChevronRight size={28} />
              </button>

              <motion.div
                key={gallery[selectedIndex].id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                }}
                className="mt-5 max-w-xl text-center"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D6A354] sm:text-xs">
                  {gallery[selectedIndex].category}
                </span>

                <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {gallery[selectedIndex].title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/60 sm:text-sm">
                  {gallery[selectedIndex].description}
                </p>
              </motion.div>

              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {gallery.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Open ${item.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "w-8 bg-[#D6A354]"
                        : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
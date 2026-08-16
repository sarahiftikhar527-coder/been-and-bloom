import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiStar,
  FiShoppingBag,
  FiEye,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import coffee1 from "../../assets/images/coffee1.jpg";
import coffee2 from "../../assets/images/coffee2.jpg";
import coffee3 from "../../assets/images/coffee3.jpg";

const coffees = [
  {
    id: 1,
    image: coffee1,
    name: "Caramel Latte",
    category: "Signature",
    price: "$8.99",
    rating: "4.9",
    reviews: "128",
    description:
      "A smooth and creamy latte blended with rich caramel flavor and freshly brewed espresso.",
  },
  {
    id: 2,
    image: coffee2,
    name: "Espresso",
    category: "Classic",
    price: "$6.49",
    rating: "4.8",
    reviews: "96",
    description:
      "A bold and aromatic espresso crafted from carefully selected premium coffee beans.",
  },
  {
    id: 3,
    image: coffee3,
    name: "Mocha",
    category: "Chocolate",
    price: "$9.49",
    rating: "5.0",
    reviews: "154",
    description:
      "A delicious combination of rich espresso, smooth chocolate and creamy milk.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeaturedCoffee() {
  const navigate = useNavigate();

  const openDetails = (id) => {
    navigate(`/coffee/${id}`);
  };

  const openMenu = () => {
    navigate("/menu");
  };

  return (
    <section
      id="featured-coffee"
      className="relative overflow-hidden bg-[#F8F5F2] py-24 sm:py-28 lg:py-32"
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D6A354]/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.08, 1, 1.08],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#8B5A2B]/10 blur-3xl"
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A354]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 40,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="h-px bg-[#B37A33]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#B37A33] sm:text-sm">
              Best Coffee
            </span>

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 40,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="h-px bg-[#B37A33]"
            />
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.1,
            }}
            className="font-serif text-4xl font-bold tracking-tight text-[#2C1810] sm:text-5xl lg:text-6xl"
          >
            Featured{" "}
            <span className="text-[#B37A33]">
              Coffee
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
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
              delay: 0.2,
            }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6F625A] sm:text-base sm:leading-8"
          >
            Discover our most loved handcrafted coffee, prepared with premium
            beans and roasted to perfection for an unforgettable experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {coffees.map((coffee) => (
            <motion.article
              key={coffee.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: {
                  duration: 0.35,
                  ease: "easeOut",
                },
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-[#E8DED5] bg-white shadow-[0_12px_40px_rgba(44,24,16,0.07)] transition-all duration-500 hover:border-[#D6A354]/40 hover:shadow-[0_28px_70px_rgba(44,24,16,0.15)]"
            >
              <button
                type="button"
                onClick={() => openDetails(coffee.id)}
                aria-label={`View ${coffee.name} details`}
                className="absolute inset-0 z-10 cursor-pointer"
              />

              <div className="relative h-[340px] overflow-hidden sm:h-[370px]">
                <motion.img
                  src={coffee.image}
                  alt={coffee.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/85 via-[#2C1810]/15 to-transparent"
                  initial={{
                    opacity: 0.8,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="rounded-full border border-white/30 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B5A2B] shadow-lg backdrop-blur-md"
                  >
                    {coffee.category}
                  </motion.span>

                  <motion.span
                    whileHover={{
                      scale: 1.08,
                      rotate: -5,
                    }}
                    className="relative z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#2C1810] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-[#B37A33] group-hover:text-white"
                  >
                    <FiShoppingBag size={18} />
                  </motion.span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
                      <FiStar
                        className="fill-[#D6A354] text-[#D6A354]"
                        size={13}
                      />

                      <span className="text-xs font-bold text-white">
                        {coffee.rating}
                      </span>
                    </span>

                    <span className="text-xs text-white/65">
                      {coffee.reviews} reviews
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                    {coffee.name}
                  </h3>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileHover={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="pointer-events-none absolute bottom-6 right-6 hidden items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#2C1810] shadow-lg backdrop-blur-md sm:flex"
                >
                  <FiEye size={14} />
                  Quick View
                </motion.div>
              </div>

              <div className="relative z-20 p-7 sm:p-8">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B8D84]">
                      Starting from
                    </p>

                    <motion.h4
                      initial={{
                        x: 0,
                      }}
                      whileHover={{
                        x: 3,
                      }}
                      className="mt-2 text-3xl font-bold text-[#B37A33]"
                    >
                      {coffee.price}
                    </motion.h4>
                  </div>

                  <motion.button
                    type="button"
                    onClick={() => openDetails(coffee.id)}
                    whileHover={{
                      scale: 1.1,
                      x: 3,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    aria-label={`View ${coffee.name}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C1810] text-white shadow-lg transition-colors duration-300 hover:bg-[#B37A33]"
                  >
                    <FiArrowRight size={20} />
                  </motion.button>
                </div>

                <div className="mt-7 h-px bg-[#EEE7E1]" />

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#756A63] sm:text-sm">
                    Premium handcrafted
                  </span>

                  <motion.span
                    whileHover={{
                      x: 3,
                    }}
                    className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B37A33]"
                  >
                    View Details
                  </motion.span>
                </div>
              </div>

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-[#8B5A2B] via-[#D6A354] to-[#B37A33]"
              />
            </motion.article>
          ))}
        </motion.div>

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
            delay: 0.2,
          }}
          className="mt-14 flex justify-center"
        >
          <motion.button
            type="button"
            onClick={openMenu}
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group flex items-center gap-3 rounded-full bg-[#2C1810] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#2C1810]/15 transition-all duration-300 hover:bg-[#B37A33]"
          >
            Explore All Coffee

            <motion.span
              whileHover={{
                x: 4,
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10"
            >
              <FiArrowRight size={15} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCoffee,
  FaLeaf,
  FaHeart,
  FaAward,
  FaCheck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import hero from "../assets/images/hero.jpg";
import aboutleft from "../assets/images/aboutleft.jpg";
import aboutright from "../assets/images/aboutright.jpg";

const values = [
  {
    icon: FaCoffee,
    title: "Exceptional Coffee",
    description:
      "Every cup is carefully crafted using premium beans and expert brewing techniques.",
  },
  {
    icon: FaLeaf,
    title: "Quality Ingredients",
    description:
      "We believe great coffee starts with responsibly sourced, high-quality ingredients.",
  },
  {
    icon: FaHeart,
    title: "Made With Passion",
    description:
      "Our baristas put care and passion into every drink we prepare for our guests.",
  },
  {
    icon: FaAward,
    title: "Premium Experience",
    description:
      "From the first sip to the last, we create memorable moments worth coming back for.",
  },
];

const stats = [
  {
    number: "15K+",
    label: "Happy Customers",
  },
  {
    number: "30+",
    label: "Coffee Flavors",
  },
  {
    number: "18+",
    label: "Expert Baristas",
  },
  {
    number: "12",
    label: "Years Experience",
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/menu");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <main className="overflow-hidden bg-[#FBF9F6]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          src={hero}
          alt="Premium handcrafted coffee"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#1E120B]/75 via-[#2C1810]/60 to-[#1E120B]/90" />

        <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#D6A354]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#B37A33]/10 blur-3xl" />

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D6A354]/30 bg-[#D6A354]/10 px-5 py-2.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A354]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F5D79D]">
              Our Story
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A354]" />
          </motion.div>

          <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-8xl">
            More Than{" "}
            <span className="text-[#D6A354]">Coffee</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 lg:text-lg">
            A place where exceptional coffee, meaningful conversations and
            unforgettable moments come together in every cup.
          </p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <motion.button
              type="button"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={goToMenu}
              className="flex items-center gap-3 rounded-full bg-[#D6A354] px-7 py-3.5 text-sm font-bold text-[#2C1810] shadow-xl transition hover:bg-[#E2B66A]"
            >
              Explore Our Menu

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                <FaArrowRight className="text-xs" />
              </span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={goToContact}
              className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#2C1810]"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">
              Discover
            </span>

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
              }}
              className="h-8 w-px bg-gradient-to-b from-[#D6A354] to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FBF9F6] py-24 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D6A354]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#8B5A2B]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24"
          >
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full border border-[#D6A354]/20" />

              <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full border border-[#D6A354]/20" />

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_25px_70px_rgba(44,24,16,0.15)]"
              >
                <img
                  src={aboutleft}
                  alt="Freshly prepared coffee"
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66E2C]">
                    Since 1998
                  </p>

                  <p className="mt-1 font-serif text-xl font-bold text-[#2C1810]">
                    Crafted With Love
                  </p>
                </div>
              </motion.div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B37A33]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B37A33]">
                  Coffee Heaven
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight text-[#2C1810] sm:text-5xl lg:text-6xl">
                Where Every Cup{" "}
                <span className="text-[#B37A33]">
                  Tells A Story
                </span>
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#6F625A] sm:text-base">
                Our coffee house was created from a simple belief: great coffee
                should make ordinary moments feel special. We carefully select
                premium beans, roast them with precision, and prepare every
                drink with genuine passion.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#6F625A] sm:text-base">
                From your first morning espresso to an evening latte shared
                with friends, we want every visit to feel warm, personal and
                memorable.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Premium coffee beans",
                  "Expertly trained baristas",
                  "Fresh ingredients",
                  "Warm café atmosphere",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F1E2D1] text-[#A66E2C]">
                      <FaCheck className="text-[10px]" />
                    </span>

                    <span className="text-sm font-semibold text-[#5F5149]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={goToMenu}
                className="group mt-9 flex items-center gap-3 rounded-full bg-[#2C1810] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#B37A33]"
              >
                Explore Our Coffee

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
                  <FaArrowRight className="text-xs" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#2C1810] py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#D6A354]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#8B5A2B]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`px-4 py-7 text-center sm:px-8 lg:py-3 ${
                index < 2
                  ? "border-b border-white/10 lg:border-b-0"
                  : ""
              } ${
                index % 2 === 0
                  ? "border-r border-white/10 lg:border-r"
                  : ""
              } ${
                index === 3
                  ? "lg:border-r-0"
                  : ""
              }`}
            >
              <h3 className="font-serif text-4xl font-bold text-[#D6A354] sm:text-5xl">
                {stat.number}
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/50 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#B37A33]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B37A33]">
                What We Believe
              </span>

              <span className="h-px w-10 bg-[#B37A33]" />
            </div>

            <h2 className="font-serif text-4xl font-bold text-[#2C1810] sm:text-5xl lg:text-6xl">
              The Heart Behind{" "}
              <span className="text-[#B37A33]">
                Every Cup
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6F625A] sm:text-base sm:leading-8">
              Our values guide everything we do, from choosing our beans to
              welcoming every customer through our doors.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#E9E0D8] bg-[#FBF9F6] p-7 shadow-[0_10px_35px_rgba(44,24,16,0.05)] transition-all duration-500 hover:border-[#D6A354]/40 hover:bg-white hover:shadow-[0_25px_60px_rgba(44,24,16,0.1)]"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#D6A354]/5 blur-2xl transition group-hover:bg-[#D6A354]/10" />

                  <div className="relative">
                    <motion.div
                      whileHover={{
                        rotate: [0, -8, 8, 0],
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2C1810] text-[#D6A354] shadow-lg transition-colors duration-300 group-hover:bg-[#D6A354] group-hover:text-[#2C1810]"
                    >
                      <Icon className="text-2xl" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-[#2C1810]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#756A63]">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#8B5A2B] via-[#D6A354] to-[#B37A33] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          DAILY RITUAL
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F8F5F2] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24"
          >
            <div className="order-2 lg:order-1">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B37A33]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B37A33]">
                  Your Daily Ritual
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight text-[#2C1810] sm:text-5xl lg:text-6xl">
                Nothing A Good{" "}
                <span className="text-[#B37A33]">
                  Coffee
                </span>{" "}
                Can't Fix
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#6F625A] sm:text-base">
                Life can be busy, unpredictable and sometimes exhausting. That
                is why we believe everyone deserves a moment to slow down,
                take a breath and enjoy something made just for them.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#6F625A] sm:text-base">
                Whether you are starting your morning, catching up with
                friends, working on your next big idea or simply treating
                yourself, our coffee house is here to make that moment better.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={goToMenu}
                  className="group flex items-center gap-3 rounded-full bg-[#2C1810] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#B37A33]"
                >
                  Find Your Favorite

                  <span className="transition-transform group-hover:translate-x-1">
                    <FaArrowRight />
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={goToContact}
                  className="rounded-full border border-[#D6A354]/50 bg-white px-7 py-4 text-sm font-bold text-[#8B5A2B] transition hover:border-[#B37A33] hover:bg-[#F7EBD9]"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-[#D6A354]/20" />

              <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full border border-[#D6A354]/20" />

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_25px_70px_rgba(44,24,16,0.15)]"
              >
                <img
                  src={aboutright}
                  alt="Coffee house experience"
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66E2C]">
                        Your Perfect Moment
                      </p>

                      <p className="mt-1 font-serif text-xl font-bold text-[#2C1810]">
                        Brew. Relax. Enjoy.
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D6A354] text-[#2C1810]">
                      <FaCoffee />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#2C1810] py-24 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D6A354]/10 blur-3xl" />

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto max-w-3xl px-5 text-center sm:px-8"
        >
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#D6A354]">
            Come Visit Us
          </span>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your Next Favorite{" "}
            <span className="text-[#D6A354]">
              Coffee Moment
            </span>{" "}
            Awaits
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Step inside and discover handcrafted coffee, warm hospitality and
            a place designed for moments that matter.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <motion.button
              type="button"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={goToMenu}
              className="flex items-center gap-3 rounded-full bg-[#D6A354] px-8 py-4 text-sm font-bold text-[#2C1810] shadow-xl transition hover:bg-[#E2B66A]"
            >
              Explore Menu

              <FaArrowRight className="text-xs" />
            </motion.button>

            <motion.button
              type="button"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={goToContact}
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#2C1810]"
            >
              Talk To Us
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaCoffee,
  FaUserTie,
  FaAward,
  FaArrowUp,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    number: 15000,
    suffix: "+",
    title: "Happy Customers",
    description: "Coffee lovers served",
    icon: FaUsers,
  },
  {
    id: 2,
    number: 30,
    suffix: "+",
    title: "Coffee Flavors",
    description: "Unique tastes to explore",
    icon: FaCoffee,
  },
  {
    id: 3,
    number: 18,
    suffix: "+",
    title: "Expert Baristas",
    description: "Passionate coffee experts",
    icon: FaUserTie,
  },
  {
    id: 4,
    number: 12,
    suffix: "",
    title: "Years Experience",
    description: "Crafting perfect coffee",
    icon: FaAward,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.94,
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

export default function Counter() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-[#2C1810] py-20 sm:py-24 lg:py-28"
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#D6A354]/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.08, 1, 1.08],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#8B5A2B]/10 blur-3xl"
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#D6A354]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-2xl text-center lg:mb-16"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
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
              className="h-px bg-[#D6A354]/60"
            />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#D6A354]">
              Our Journey
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
              className="h-px bg-[#D6A354]/60"
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
            className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Numbers That Tell Our{" "}
            <span className="text-[#D6A354]">Story</span>
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
            className="mt-5 text-sm leading-7 text-white/60 sm:text-base"
          >
            Every cup, every customer and every year has helped us create a
            coffee experience worth remembering.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className={`group relative px-5 py-9 text-center sm:px-8 lg:py-5 ${
                  index < 2
                    ? "border-b border-white/10 lg:border-b-0"
                    : ""
                } ${
                  index % 2 === 0
                    ? "sm:border-r sm:border-white/10 lg:border-r"
                    : ""
                } ${
                  index === 3
                    ? "lg:border-r-0"
                    : ""
                }`}
              >
                <div className="absolute inset-3 rounded-[2rem] bg-[#D6A354]/0 transition-all duration-500 group-hover:bg-[#D6A354]/[0.035]" />

                <div className="relative">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 6,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D6A354]/20 bg-[#D6A354]/10 text-[#D6A354] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:border-[#D6A354]/50 group-hover:bg-[#D6A354]/15"
                  >
                    <Icon className="text-xl" />
                  </motion.div>

                  <div className="relative inline-block">
                    <h3 className="font-serif text-4xl font-bold tracking-tight text-[#D6A354] sm:text-5xl lg:text-6xl">
                      <CountUp
                        end={item.number}
                        duration={2.8}
                        enableScrollSpy
                        scrollSpyOnce
                        separator=","
                      />
                      {item.suffix}
                    </h3>

                    <motion.span
                      initial={{
                        width: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        width: 48,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + index * 0.1,
                      }}
                      className="absolute -bottom-3 left-1/2 h-px -translate-x-1/2 bg-[#D6A354]/50"
                    />
                  </div>

                  <h4 className="mt-8 text-sm font-bold uppercase tracking-[0.12em] text-white sm:text-base">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs text-white/45 sm:text-sm">
                    {item.description}
                  </p>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileHover={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-5 flex items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D6A354]"
                  >
                    <span>Growing Together</span>
                    <FaArrowUp className="text-[9px]" />
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-14 h-px max-w-4xl origin-center bg-gradient-to-r from-transparent via-[#D6A354]/30 to-transparent"
        />
      </div>
    </section>
  );
}
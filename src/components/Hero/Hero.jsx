import { motion } from "framer-motion";
import { FiArrowDown, FiArrowRight, FiPlay } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import hero from "../../assets/images/hero.jpg";
import HeroStats from "./HeroStats";

export default function Hero() {
  const navigate = useNavigate();

  const handleExploreMenu = () => {
    navigate("/menu");
  };

  const handleWatchStory = () => {
    const gallerySection = document.getElementById("gallery");

    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("categories");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#1E120B]"
    >
      <motion.img
        src={hero}
        alt="Premium handcrafted coffee"
        initial={{
          scale: 1.08,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#160B06]/95 via-[#1E120B]/78 to-[#1E120B]/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#160B06]/80 via-transparent to-[#160B06]/20" />

      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#D6A354]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#8B5A2B]/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A354]/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-32 sm:px-8 sm:py-36 lg:px-10 lg:py-40">
        <div className="max-w-5xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D6A354]/25 bg-white/[0.07] px-4 py-2.5 shadow-xl backdrop-blur-xl sm:px-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D6A354] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D6A354]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F8D28B] sm:text-xs sm:tracking-[0.25em]">
              Premium Coffee Since 1998
            </span>
          </motion.div>

          <motion.h1
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
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl font-serif text-5xl font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.7rem] xl:text-[6.5rem]"
          >
            Freshly Brewed
            <br />
            Coffee
            <span className="relative inline-block text-[#D6A354]">
              {" "}
              Crafted
              <motion.span
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-[#D6A354]/60 sm:-bottom-2"
              />
            </span>
            <br />
            <span className="text-white/95">For Every Moment</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-lg"
          >
            Discover handcrafted coffee made from ethically sourced beans,
            roasted to perfection and served with passion. Every cup is
            created to turn ordinary moments into memorable ones.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <motion.button
              type="button"
              onClick={handleExploreMenu}
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-3 rounded-full bg-[#D6A354] px-6 py-3.5 text-sm font-bold text-[#1E120B] shadow-[0_15px_40px_rgba(214,163,84,0.2)] transition-all duration-300 hover:bg-[#E4B66B] sm:px-8 sm:py-4"
            >
              <span>Explore Menu</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1">
                <FiArrowRight size={15} />
              </span>
            </motion.button>

            <motion.button
              type="button"
              onClick={handleWatchStory}
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.07] px-6 py-3.5 text-sm font-bold text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-[#1E120B] sm:px-8 sm:py-4"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-[#2C1810]/10">
                <FiPlay
                  size={13}
                  className="ml-0.5"
                />
              </span>

              <span>Watch Story</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
          >
            <HeroStats />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2"
      >
        <button
          type="button"
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-2 text-white/45 transition-colors duration-300 hover:text-[#D6A354]"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
            Discover
          </span>

          <motion.span
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-colors duration-300 group-hover:border-[#D6A354]/40"
          >
            <FiArrowDown size={14} />
          </motion.span>
        </button>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F5F2] to-transparent opacity-20" />
    </section>
  );
}
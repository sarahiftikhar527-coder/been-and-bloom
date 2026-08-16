import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setShow(scrollTop > 450);

      if (documentHeight > 0) {
        const currentProgress = Math.min(
          (scrollTop / documentHeight) * 100,
          100
        );

        setProgress(currentProgress);
      } else {
        setProgress(0);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 30,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed bottom-5 right-5 z-[9999] sm:bottom-8 sm:right-8"
        >
          <div className="group relative">
            <svg
              className="pointer-events-none absolute -inset-[3px] h-[62px] w-[62px] -rotate-90 sm:h-[66px] sm:w-[66px]"
              viewBox="0 0 66 66"
            >
              <circle
                cx="33"
                cy="33"
                r="30"
                fill="none"
                stroke="rgba(214,163,84,0.18)"
                strokeWidth="2"
              />

              <motion.circle
                cx="33"
                cy="33"
                r="30"
                fill="none"
                stroke="#D6A354"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="188.5"
                strokeDashoffset={
                  188.5 - (188.5 * progress) / 100
                }
                animate={{
                  strokeDashoffset:
                    188.5 - (188.5 * progress) / 100,
                }}
                transition={{
                  duration: 0.15,
                  ease: "linear",
                }}
              />
            </svg>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{
                scale: 1.08,
                y: -3,
              }}
              whileTap={{
                scale: 0.92,
              }}
              aria-label="Scroll to top"
              title="Back to top"
              className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#2C1810] text-[#D6A354] shadow-[0_15px_40px_rgba(44,24,16,0.25)] backdrop-blur-xl transition-all duration-300 hover:bg-[#B37A33] hover:text-white sm:h-16 sm:w-16"
            >
              <motion.span
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiArrowUp className="text-xl sm:text-2xl" />
              </motion.span>
            </motion.button>

            <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#2C1810] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
              Back to Top

              <span className="absolute left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-[#2C1810]" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
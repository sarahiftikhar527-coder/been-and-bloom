import { motion, AnimatePresence } from "framer-motion";
import { FaCoffee } from "react-icons/fa";
import { Coffee, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#100905]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A354]/10 blur-[150px]" />

            <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#8B5E34]/10 blur-[130px]" />

            <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#D6A354]/10 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(214,163,84,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(214,163,84,.8) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.55, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-8 rounded-full bg-[#D6A354]/20 blur-2xl"
              />

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex h-28 w-28 items-center justify-center rounded-[32px] border border-[#D6A354]/30 bg-gradient-to-br from-[#D6A354] to-[#A87335] shadow-[0_20px_70px_rgba(214,163,84,0.25)]"
              >
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                >
                  <FaCoffee className="text-5xl text-[#160C06]" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [-4, -15, -4],
                    opacity: [0, 0.8, 0],
                    scale: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 -top-7"
                >
                  <Coffee
                    size={18}
                    className="text-[#E8C27C]"
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [-3, -13, -3],
                    opacity: [0, 0.6, 0],
                    scale: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 -top-8"
                >
                  <Sparkles
                    size={15}
                    className="text-[#E8C27C]"
                  />
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
            >
              <h1 className="mt-9 bg-gradient-to-r from-[#F1C77A] via-[#D6A354] to-[#A87335] bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
                Coco Beanz
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 70 }}
                transition={{
                  delay: 0.8,
                  duration: 0.7,
                }}
                className="mx-auto mt-4 h-px bg-gradient-to-r from-transparent via-[#D6A354] to-transparent"
              />

              <p className="mt-4 text-[10px] font-bold uppercase tracking-[5px] text-[#8F7B6C]">
                Specialty Coffee
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
              className="mt-10 w-full max-w-xs"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#756257]">
                  Preparing
                </span>

                <motion.span
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                  className="text-[10px] font-bold uppercase tracking-[2px] text-[#D6A354]"
                >
                  Brewing...
                </motion.span>
              </div>

              <div className="relative h-2 overflow-hidden rounded-full border border-[#D6A354]/10 bg-white/[0.06]">
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 2.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-[#A87335] via-[#D6A354] to-[#F1C77A] shadow-[0_0_20px_rgba(214,163,84,0.35)]"
                >
                  <motion.div
                    animate={{
                      x: ["-100%", "250%"],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.1,
                duration: 0.6,
              }}
              className="mt-7 text-sm text-[#8F7B6C]"
            >
              Brewing something special for you
              <motion.span
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                ...
              </motion.span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.4,
              }}
              className="mt-10 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D6A354]/30" />

              <span className="h-1 w-1 rounded-full bg-[#D6A354] shadow-[0_0_8px_rgba(214,163,84,0.8)]" />

              <span className="text-[8px] font-bold uppercase tracking-[3px] text-[#5F5046]">
                Crafted With Love
              </span>

              <span className="h-1 w-1 rounded-full bg-[#D6A354] shadow-[0_0_8px_rgba(214,163,84,0.8)]" />

              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D6A354]/30" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
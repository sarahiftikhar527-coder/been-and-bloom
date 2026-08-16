import { motion } from "framer-motion";
import {
  FaStar,
  FaCoffee,
  FaUsers,
  FaArrowUp,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: FaStar,
    value: "4.9",
    label: "Customer Rating",
    description: "Loved by coffee enthusiasts",
  },
  {
    id: 2,
    icon: FaCoffee,
    value: "30+",
    label: "Premium Coffee",
    description: "Handcrafted flavors",
  },
  {
    id: 3,
    icon: FaUsers,
    value: "15+",
    label: "Expert Baristas",
    description: "Passionate coffee experts",
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroStats() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:gap-5"
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{
              y: -7,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-[#D6A354]/50 hover:bg-white/[0.13] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-5"
          >
            <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#D6A354]/10 blur-2xl transition-all duration-500 group-hover:bg-[#D6A354]/25" />

            <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#8B5A2B] via-[#D6A354] to-[#E5B96A] transition-transform duration-500 group-hover:scale-x-100" />

            <div className="relative flex items-center gap-3 sm:gap-4">
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D6A354]/25 bg-[#D6A354]/10 text-[#D6A354] shadow-lg shadow-[#D6A354]/5 transition-all duration-300 group-hover:border-[#D6A354]/50 group-hover:bg-[#D6A354]/20"
              >
                <Icon className="text-lg sm:text-xl" />
              </motion.div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-2xl font-bold leading-none text-white sm:text-3xl">
                    {item.value}
                  </h2>

                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -5,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.8,
                      duration: 0.4,
                    }}
                    className="text-[#D6A354]"
                  >
                    <FaArrowUp className="text-[10px]" />
                  </motion.span>
                </div>

                <p className="mt-1.5 truncate text-[11px] font-bold uppercase tracking-[0.08em] text-white/90 sm:text-xs">
                  {item.label}
                </p>

                <p className="mt-1 hidden truncate text-[10px] text-white/45 sm:block">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.06] via-transparent to-[#D6A354]/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
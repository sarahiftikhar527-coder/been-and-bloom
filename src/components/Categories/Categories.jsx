import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCoffee,
  FaLeaf,
  FaMugHot,
  FaIceCream,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Hot Coffee",
    slug: "hot-coffee",
    description:
      "Freshly brewed premium hot coffee made from handpicked beans.",
    icon: FaMugHot,
    color: "from-[#8B5A2B] to-[#5C3A21]",
    glow: "bg-[#8B5A2B]/10",
  },
  {
    id: 2,
    title: "Cold Coffee",
    slug: "cold-coffee",
    description:
      "Refreshing iced coffee with rich flavors and a smooth creamy texture.",
    icon: FaCoffee,
    color: "from-[#D6A354] to-[#A86F27]",
    glow: "bg-[#D6A354]/10",
  },
  {
    id: 3,
    title: "Organic Beans",
    slug: "organic-beans",
    description:
      "100% organic coffee beans sourced from sustainable and trusted farms.",
    icon: FaLeaf,
    color: "from-[#687A35] to-[#3F5422]",
    glow: "bg-[#687A35]/10",
  },
  {
    id: 4,
    title: "Desserts",
    slug: "desserts",
    description:
      "Fresh cakes, pastries and sweet treats perfectly paired with coffee.",
    icon: FaIceCream,
    color: "from-[#C58F5C] to-[#8B5A2B]",
    glow: "bg-[#C58F5C]/10",
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
    y: 60,
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

const buttonVariants = {
  rest: {
    x: 0,
  },
  hover: {
    x: 5,
  },
};

export default function Categories() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.slug);

    navigate(
      `/products?category=${encodeURIComponent(category.slug)}`
    );
  };

  const handleViewAll = () => {
    setActiveCategory(null);
    navigate("/products");
  };

  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[#FBF9F6] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#D6A354]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#8B5A2B]/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C68B35]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 inline-flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-px bg-[#B37A33]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#B37A33] sm:text-sm">
              Explore
            </span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-px bg-[#B37A33]"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="font-serif text-4xl font-bold tracking-tight text-[#2C1810] sm:text-5xl lg:text-6xl"
          >
            Coffee{" "}
            <span className="text-[#B37A33]">
              Categories
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6F625A] sm:text-base sm:leading-8"
          >
            Discover your perfect coffee experience from our carefully
            selected collection, crafted with premium ingredients and
            exceptional quality.
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((item) => {
            const Icon = item.icon;
            const isActive = activeCategory === item.slug;

            return (
              <motion.article
                key={item.id}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  transition: {
                    duration: 0.35,
                    ease: "easeOut",
                  },
                }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-px rounded-[2rem] bg-gradient-to-br from-[#D6A354]/30 via-transparent to-[#8B5A2B]/20 blur-sm transition-all duration-500 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div
                  className={`relative h-full overflow-hidden rounded-[2rem] border bg-white p-7 shadow-[0_10px_35px_rgba(44,24,16,0.05)] transition-all duration-500 sm:p-8 ${
                    isActive
                      ? "border-[#D6A354]/60 shadow-[0_25px_60px_rgba(44,24,16,0.14)]"
                      : "border-[#E9E0D8] group-hover:border-[#D6A354]/40 group-hover:shadow-[0_25px_60px_rgba(44,24,16,0.12)]"
                  }`}
                >
                  <div
                    className={`absolute right-0 top-0 h-32 w-32 rounded-full blur-2xl transition-all duration-500 ${item.glow} ${
                      isActive
                        ? "scale-125 opacity-100"
                        : "opacity-70 group-hover:scale-125"
                    }`}
                  />

                  <div className="relative">
                    <motion.div
                      whileHover={{
                        rotate: [0, -8, 8, 0],
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className={`relative mb-8 flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${item.color} text-white shadow-lg`}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-white/15"
                      />

                      <Icon className="relative z-10 text-[34px]" />
                    </motion.div>

                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-2xl font-bold text-[#2C1810] transition-colors duration-300 group-hover:text-[#9B652A]">
                        {item.title}
                      </h3>

                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.5,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#557A45] text-white"
                        >
                          <FaCheck className="text-[11px]" />
                        </motion.div>
                      )}
                    </div>

                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#756A63]">
                      {item.description}
                    </p>

                    <div className="mt-7 h-px w-full bg-[#EEE7E1]" />

                    <motion.button
                      type="button"
                      variants={buttonVariants}
                      initial="rest"
                      whileHover="hover"
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleCategoryClick(item)}
                      className="mt-6 flex w-full items-center justify-between text-left text-sm font-bold text-[#A66E2C]"
                    >
                      <span>
                        {isActive
                          ? "Viewing Category"
                          : "Explore Category"}
                      </span>

                      <motion.span
                        whileHover={{
                          rotate: -45,
                        }}
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-[#B37A33] bg-[#B37A33] text-white"
                            : "border-[#D6A354]/40 group-hover:bg-[#B37A33] group-hover:text-white"
                        }`}
                      >
                        <FaArrowRight className="text-xs" />
                      </motion.span>
                    </motion.button>
                  </div>

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                    }}
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r ${item.color} transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              </motion.article>
            );
          })}
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
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={handleViewAll}
            className="group flex items-center gap-3 rounded-full bg-[#2C1810] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2C1810]/15 transition-all duration-300 hover:bg-[#8B5A2B]"
          >
            View All Categories

            <motion.span
              whileHover={{
                x: 4,
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10"
            >
              <FaArrowRight className="text-xs" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
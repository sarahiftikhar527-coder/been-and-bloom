import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiPlus,
  FiStar,
  FiCheck,
  FiShoppingBag,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import menu from "../assets/images/menu.jpg";
import caramelCloud from "../assets/images/caramel-cloud.jpg";
import velvetLatte from "../assets/images/velvet-latte.jpg";
import mochaDream from "../assets/images/mocha-dream.jpg";
import goldenCappuccino from "../assets/images/golden-cappuccino.jpg";
import icedCaramelBrew from "../assets/images/iced-caramel-brew.jpg";
import hazelnutBliss from "../assets/images/hazelnut-bliss.jpg";

import { useCart } from "../context/CartContext";

const menuItems = [
  {
    id: 1,
    slug: "caramel-cloud",
    name: "Caramel Cloud",
    category: "Signature",
    description:
      "Smooth espresso with rich caramel and creamy foam for a sweet, luxurious finish.",
    price: 12.29,
    rating: "4.9",
    reviews: "128",
    image: caramelCloud,
  },
  {
    id: 2,
    slug: "velvet-latte",
    name: "Velvet Latte",
    category: "Hot Coffee",
    description:
      "Silky espresso blended with perfectly steamed milk for a beautifully balanced cup.",
    price: 10.99,
    rating: "4.8",
    reviews: "96",
    image: velvetLatte,
  },
  {
    id: 3,
    slug: "mocha-dream",
    name: "Mocha Dream",
    category: "Chocolate",
    description:
      "Bold espresso combined with premium chocolate and velvety steamed milk.",
    price: 11.49,
    rating: "4.9",
    reviews: "154",
    image: mochaDream,
  },
  {
    id: 4,
    slug: "golden-cappuccino",
    name: "Golden Cappuccino",
    category: "Hot Coffee",
    description:
      "Classic espresso and steamed milk finished with a delicate layer of golden foam.",
    price: 9.99,
    rating: "4.8",
    reviews: "87",
    image: goldenCappuccino,
  },
  {
    id: 5,
    slug: "iced-caramel-brew",
    name: "Iced Caramel Brew",
    category: "Cold Coffee",
    description:
      "Refreshing cold brew blended with caramel and a smooth creamy texture.",
    price: 11.29,
    rating: "4.9",
    reviews: "112",
    image: icedCaramelBrew,
  },
  {
    id: 6,
    slug: "hazelnut-bliss",
    name: "Hazelnut Bliss",
    category: "Signature",
    description:
      "Aromatic hazelnut, rich espresso and smooth milk foam in one indulgent cup.",
    price: 12.49,
    rating: "5.0",
    reviews: "141",
    image: hazelnutBliss,
  },
];

const categories = [
  "All",
  "Hot Coffee",
  "Cold Coffee",
  "Signature",
  "Chocolate",
];

function Menu() {
  const navigate = useNavigate();

  const {
    addToCart,
    cartCount,
  } = useCart();

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [favorites, setFavorites] = useState([]);
  const [addedItem, setAddedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter(
            (itemId) => itemId !== id
          )
        : [...current, id]
    );
  };

  const handleAddToCart = (item) => {
    addToCart(item, 1);

    setAddedItem(item.id);

    window.setTimeout(() => {
      setAddedItem(null);
    }, 1500);
  };

  const scrollToMenu = () => {
    document
      .getElementById("menu-items")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const openDetails = (slug) => {
    navigate(`/coffee/${slug}`);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#120B07] text-white">
      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          src={menu}
          alt="Coco Beanz coffee menu"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#120B07]/90 via-[#120B07]/65 to-[#120B07]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,163,84,0.14),transparent_45%)]" />

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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center"
        >
          <motion.span
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
            }}
            className="mb-6 inline-flex rounded-full border border-[#D6A354]/30 bg-[#D6A354]/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[4px] text-[#D6A354] backdrop-blur-md sm:text-xs"
          >
            Coco Beanz Menu
          </motion.span>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Crafted For
            <span className="block bg-gradient-to-r from-[#D6A354] to-[#F2D095] bg-clip-text text-transparent">
              Coffee Lovers
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg">
            Discover handcrafted coffee, rich flavors and
            unforgettable moments made fresh especially for you.
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToMenu}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D6A354] px-7 py-4 text-sm font-bold text-[#120B07] shadow-[0_15px_40px_rgba(214,163,84,0.2)] transition hover:bg-[#E7BC70]"
          >
            Explore Our Menu
            <FiArrowRight size={18} />
          </motion.button>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/30">
          <span className="text-[9px] uppercase tracking-[3px]">
            Scroll
          </span>

          <div className="h-8 w-px bg-gradient-to-b from-[#D6A354] to-transparent" />
        </div>
      </section>

      <section
        id="menu-items"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-[#D6A354]">
              Our Selection
            </p>

            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              Find Your Perfect Cup
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">
              Choose from our carefully crafted selection of
              premium coffee and signature creations.
            </p>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/cart")}
            className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5"
          >
            <FiShoppingBag className="text-[#D6A354]" />

            <span className="text-sm text-white/60">
              Your Order
            </span>

            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#D6A354] px-2 text-xs font-black text-[#120B07]">
              {cartCount}
            </span>
          </motion.button>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive =
              activeCategory === category;

            return (
              <motion.button
                key={category}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#D6A354] bg-[#D6A354] text-[#120B07] shadow-[0_8px_25px_rgba(214,163,84,0.15)]"
                    : "border-white/10 bg-white/[0.035] text-white/60 hover:border-[#D6A354]/40 hover:bg-[#D6A354]/10 hover:text-[#D6A354]"
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isFavorite =
                favorites.includes(item.id);

              const isAdded =
                addedItem === item.id;

              return (
                <motion.article
                  layout
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 25,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                >
                  <div className="relative h-[340px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#120B07] via-[#120B07]/10 to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#120B07]/70 px-4 py-2 text-xs font-bold text-[#D6A354] backdrop-blur-xl">
                      {item.category}
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() =>
                        toggleFavorite(item.id)
                      }
                      className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
                        isFavorite
                          ? "border-[#D6A354] bg-[#D6A354] text-[#120B07]"
                          : "border-white/10 bg-[#120B07]/70 text-white hover:border-[#D6A354]/50 hover:text-[#D6A354]"
                      }`}
                    >
                      <FiHeart
                        size={18}
                        fill={
                          isFavorite
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </motion.button>

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <div className="mb-2 flex items-center gap-1.5 text-[#D6A354]">
                          <FiStar
                            fill="currentColor"
                            size={14}
                          />

                          <span className="text-xs font-bold">
                            {item.rating}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black">
                          {item.name}
                        </h3>
                      </div>

                      <div className="shrink-0 rounded-2xl bg-[#D6A354] px-4 py-2.5 text-sm font-black text-[#120B07] shadow-lg">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="min-h-[72px] text-sm leading-6 text-white/45">
                      {item.description}
                    </p>

                    <div className="mt-6 flex gap-3">
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={() =>
                          handleAddToCart(item)
                        }
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all duration-300 ${
                          isAdded
                            ? "bg-emerald-500 text-white"
                            : "bg-[#D6A354] text-[#120B07] hover:bg-[#E7BC70] hover:shadow-[0_10px_30px_rgba(214,163,84,0.2)]"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <FiCheck size={17} />
                            Added
                          </>
                        ) : (
                          <>
                            <FiPlus size={17} />
                            Add to Order
                          </>
                        )}
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={() =>
                          openDetails(item.slug)
                        }
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#D6A354]/50 hover:bg-[#D6A354] hover:text-[#120B07]"
                      >
                        <FiArrowRight size={18} />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:px-8">
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
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#D6A354]/20 bg-gradient-to-r from-[#21140C] to-[#170D08] px-7 py-12 sm:px-12 lg:px-16"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D6A354]/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#D6A354]/5 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-[#D6A354]">
                Made With Love
              </p>

              <h2 className="max-w-xl text-3xl font-black sm:text-4xl">
                Your next favorite coffee is waiting.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/45">
                Discover a flavor that makes every moment a
                little better.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToMenu}
              className="group flex shrink-0 items-center gap-3 rounded-full bg-[#D6A354] px-7 py-4 font-bold text-[#120B07] transition hover:bg-[#E7BC70]"
            >
              Browse Menu
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Menu;
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiPlus,
  FiSearch,
  FiStar,
  FiCheck,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

import caramelCloud from "../assets/images/caramel-cloud.jpg";
import velvetLatte from "../assets/images/velvet-latte.jpg";
import mochaDream from "../assets/images/mocha-dream.jpg";
import goldenCappuccino from "../assets/images/golden-cappuccino.jpg";
import icedCaramelBrew from "../assets/images/iced-caramel-brew.jpg";
import hazelnutBliss from "../assets/images/hazelnut-bliss.jpg";

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
    image: hazelnutBliss,
  },
];

const CART_KEY = "coffee_cart";

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("q") || "";

  const [search, setSearch] = useState(initialQuery);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedItem, setAddedItem] = useState(null);

  useEffect(() => {
    setSearch(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem(CART_KEY) || "[]"
      );

      setCart(Array.isArray(savedCart) ? savedCart : []);
    } catch {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    const handleCartUpdate = (event) => {
      if (Array.isArray(event.detail)) {
        setCart(event.detail);
        return;
      }

      try {
        const savedCart = JSON.parse(
          localStorage.getItem(CART_KEY) || "[]"
        );

        setCart(Array.isArray(savedCart) ? savedCart : []);
      } catch {
        setCart([]);
      }
    };

    window.addEventListener(
      "coffee-cart-updated",
      handleCartUpdate
    );

    window.addEventListener("storage", handleCartUpdate);

    return () => {
      window.removeEventListener(
        "coffee-cart-updated",
        handleCartUpdate
      );

      window.removeEventListener("storage", handleCartUpdate);
    };
  }, []);

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return menuItems;
    }

    return menuItems.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.slug.toLowerCase().includes(query)
      );
    });
  }, [search]);

  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const handleSearch = (value) => {
    setSearch(value);

    const trimmedValue = value.trim();

    if (trimmedValue) {
      navigate(`/search?q=${encodeURIComponent(trimmedValue)}`, {
        replace: true,
      });
    } else {
      navigate("/search", {
        replace: true,
      });
    }
  };

  const clearSearch = () => {
    setSearch("");
    navigate("/search", {
      replace: true,
    });
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id]
    );
  };

  const addToCart = (item) => {
    try {
      const existingCart = JSON.parse(
        localStorage.getItem(CART_KEY) || "[]"
      );

      const safeCart = Array.isArray(existingCart)
        ? existingCart
        : [];

      const existingIndex = safeCart.findIndex(
        (cartItem) =>
          String(cartItem.id) === String(item.id)
      );

      let updatedCart;

      if (existingIndex !== -1) {
        updatedCart = safeCart.map((cartItem, index) =>
          index === existingIndex
            ? {
                ...cartItem,
                quantity:
                  Number(cartItem.quantity || 0) + 1,
              }
            : cartItem
        );
      } else {
        updatedCart = [
          ...safeCart,
          {
            id: item.id,
            slug: item.slug,
            name: item.name,
            image: item.image,
            price: Number(item.price),
            category: item.category,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        CART_KEY,
        JSON.stringify(updatedCart)
      );

      setCart(updatedCart);
      setAddedItem(item.id);

      window.dispatchEvent(
        new CustomEvent("coffee-cart-updated", {
          detail: updatedCart,
        })
      );

      window.setTimeout(() => {
        setAddedItem(null);
      }, 1500);
    } catch (error) {
      console.error("Unable to add item to cart:", error);
    }
  };

  const openDetails = (slug) => {
    navigate(`/coffee/${slug}`);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#120B07] text-white">
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D6A354]/10 blur-[140px]" />
        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#8B5E34]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-32 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D6A354]/20 bg-[#D6A354]/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[4px] text-[#D6A354]">
              <FiSearch size={13} />
              Find Your Coffee
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Search Our
              <span className="block bg-gradient-to-r from-[#D6A354] to-[#F2D095] bg-clip-text text-transparent">
                Coffee Collection
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              Find your favorite coffee, explore new flavors and
              discover something delicious.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative mx-auto mt-10 max-w-2xl"
          >
            <FiSearch
              size={21}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D6A354]"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search coffee, latte, caramel..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.05] py-5 pl-14 pr-14 text-sm text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-white/25 focus:border-[#D6A354]/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-[#D6A354]/10"
              autoFocus
            />

            {search && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.9 }}
                onClick={clearSearch}
                className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl bg-white/10 text-white/60 transition hover:bg-[#D6A354] hover:text-[#120B07]"
                aria-label="Clear search"
              >
                <FiX size={17} />
              </motion.button>
            )}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[4px] text-[#D6A354]">
              {search ? "Search Results" : "Our Collection"}
            </p>

            <h2 className="text-2xl font-black sm:text-3xl">
              {search
                ? `Results for "${search}"`
                : "Explore Our Coffee"}
            </h2>

            <p className="mt-2 text-sm text-white/35">
              {filteredItems.length}{" "}
              {filteredItems.length === 1
                ? "coffee"
                : "coffees"}{" "}
              found
            </p>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/cart")}
            className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 transition hover:border-[#D6A354]/40 hover:bg-[#D6A354]/10"
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

        {filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const isFavorite = favorites.includes(item.id);
                const isAdded = addedItem === item.id;

                return (
                  <motion.article
                    layout
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 30,
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
                    <div className="relative h-[330px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#120B07] via-[#120B07]/10 to-transparent" />

                      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#120B07]/75 px-4 py-2 text-xs font-bold text-[#D6A354] backdrop-blur-xl">
                        {item.category}
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() =>
                          toggleFavorite(item.id)
                        }
                        aria-label={
                          isFavorite
                            ? `Remove ${item.name} from favorites`
                            : `Add ${item.name} to favorites`
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
                          onClick={() => addToCart(item)}
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
                          aria-label={`View ${item.name}`}
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-24 text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D6A354]/20 bg-[#D6A354]/10 text-[#D6A354]">
              <FiSearch size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-black">
              No Coffee Found
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
              We couldn't find anything matching "
              {search}". Try another coffee name or category.
            </p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={clearSearch}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D6A354] px-6 py-3.5 text-sm font-bold text-[#120B07] transition hover:bg-[#E7BC70]"
            >
              View All Coffee
              <FiArrowRight size={17} />
            </motion.button>
          </motion.div>
        )}
      </section>
    </main>
  );
}
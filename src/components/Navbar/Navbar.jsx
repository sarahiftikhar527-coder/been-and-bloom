import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiChevronRight,
} from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "../../context/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Location", path: "/location" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems = [] } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || loginOpen || signupOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, loginOpen, signupOpen]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    if (location.hash !== "#gallery") return;

    const timer = setTimeout(() => {
      const gallerySection = document.getElementById("gallery");

      if (gallerySection) {
        gallerySection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const handleGalleryClick = () => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      const gallerySection = document.getElementById("gallery");

      if (gallerySection) {
        gallerySection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}#gallery`
        );
      }

      return;
    }

    navigate("/#gallery");
  };

  const handleSearchClick = () => {
    setMenuOpen(false);
    navigate("/search");
  };

  const handleCartClick = () => {
    setMenuOpen(false);
    navigate("/cart");
  };

  const openLogin = () => {
    setMenuOpen(false);
    setSignupOpen(false);
    setLoginOpen(true);
  };

  const openSignup = () => {
    setMenuOpen(false);
    setLoginOpen(false);
    setSignupOpen(true);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "bg-[#1B120C]/95 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "bg-[#1B120C]/70 py-4 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group relative z-10 flex shrink-0 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-2 rounded-full bg-[#D6A354]/10 blur-lg"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.95, 1.08, 0.95],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative flex items-center gap-2">
                <span className="text-[10px] font-medium uppercase tracking-[4px] text-[#D6A354]/70">
                  The
                </span>

                <span className="font-serif text-2xl font-black tracking-[2px] text-[#F3D39A] transition-all duration-300 group-hover:text-[#D6A354] sm:text-[27px]">
                  BEAN & BLOOM
                </span>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="mt-1 h-px bg-gradient-to-r from-transparent via-[#D6A354] to-transparent"
              />
            </motion.div>
          </Link>

          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-2 backdrop-blur-xl">
              {navLinks.map((item) => {
                if (item.name === "Gallery") {
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={handleGalleryClick}
                      className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        location.pathname === "/" &&
                        location.hash === "#gallery"
                          ? "bg-[#D6A354] text-[#1B120C] shadow-[0_5px_20px_rgba(214,163,84,0.2)]"
                          : "text-white/80 hover:bg-white/[0.06] hover:text-[#D6A354]"
                      }`}
                    >
                      Gallery
                    </button>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-[#D6A354] text-[#1B120C] shadow-[0_5px_20px_rgba(214,163,84,0.2)]"
                          : "text-white/80 hover:bg-white/[0.06] hover:text-[#D6A354]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              type="button"
              aria-label="Search"
              onClick={handleSearchClick}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                location.pathname === "/search"
                  ? "border-[#D6A354] bg-[#D6A354] text-[#1B120C]"
                  : "border-white/[0.08] bg-white/[0.05] text-white hover:border-[#D6A354]/40 hover:bg-[#D6A354] hover:text-[#1B120C]"
              }`}
            >
              <FiSearch size={19} />
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              type="button"
              aria-label="Shopping bag"
              onClick={handleCartClick}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.05] text-white transition-all duration-300 hover:border-[#D6A354]/40 hover:bg-[#D6A354] hover:text-[#1B120C]"
            >
              <FiShoppingBag size={19} />

              <AnimatePresence mode="popLayout">
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{
                      scale: 0.5,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0.5,
                      opacity: 0,
                    }}
                    className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D6A354] px-1 text-[10px] font-bold text-[#1B120C]"
                  >
                    {cartCount > 99 ? "99+" : cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <button
              type="button"
              onClick={openLogin}
              className="ml-2 rounded-full border border-[#D6A354]/70 px-5 py-2.5 text-sm font-semibold text-[#D6A354] transition-all duration-300 hover:border-[#D6A354] hover:bg-[#D6A354] hover:text-[#1B120C]"
            >
              Login
            </button>

            <button
              type="button"
              onClick={openSignup}
              className="rounded-full bg-gradient-to-r from-[#D6A354] to-[#E7BC70] px-5 py-2.5 text-sm font-bold text-[#1B120C] shadow-[0_8px_25px_rgba(214,163,84,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(214,163,84,0.3)]"
            >
              Sign Up
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-2xl text-white transition-all duration-300 hover:border-[#D6A354]/40 hover:bg-[#D6A354] hover:text-[#1B120C] lg:hidden"
          >
            <FiMenu />
          </button>
        </div>

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
            scrolled
              ? "bg-[#D6A354]/20 opacity-100"
              : "opacity-0"
          }`}
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[1100] bg-black/70 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-[1200] flex h-screen w-[88%] max-w-sm flex-col overflow-y-auto bg-[#1B120C] shadow-[-20px_0_60px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-serif text-xl font-black tracking-[2px] text-[#F3D39A] transition-colors duration-300 group-hover:text-[#D6A354]"
                  >
                    BEAN & BLOOM
                  </motion.span>
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-2xl text-white transition hover:border-[#D6A354]/40 hover:bg-[#D6A354] hover:text-[#1B120C]"
                >
                  <FiX />
                </button>
              </div>

              <div className="px-6 py-8">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[4px] text-[#D6A354]/60">
                  Navigation
                </p>

                <motion.button
                  type="button"
                  onClick={handleSearchClick}
                  whileTap={{ scale: 0.98 }}
                  className={`mb-3 flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-lg font-semibold transition-all duration-300 ${
                    location.pathname === "/search"
                      ? "border-[#D6A354] bg-[#D6A354] text-[#1B120C]"
                      : "border-[#D6A354]/20 bg-white/[0.04] text-white/80 hover:border-[#D6A354]/40 hover:bg-[#D6A354] hover:text-[#1B120C]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <FiSearch size={21} />
                    Search Coffee
                  </span>

                  <FiChevronRight />
                </motion.button>

                <div className="space-y-2">
                  {navLinks.map((item, index) => {
                    if (item.name === "Gallery") {
                      return (
                        <motion.div
                          key={item.name}
                          initial={{
                            opacity: 0,
                            x: 30,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.06,
                            duration: 0.3,
                          }}
                        >
                          <button
                            type="button"
                            onClick={handleGalleryClick}
                            className={`group flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-lg font-semibold transition-all duration-300 ${
                              location.pathname === "/" &&
                              location.hash === "#gallery"
                                ? "bg-[#D6A354] text-[#1B120C]"
                                : "text-white/80 hover:bg-white/[0.05] hover:text-[#D6A354]"
                            }`}
                          >
                            <span>Gallery</span>

                            <FiChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          x: 30,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.3,
                        }}
                      >
                        <NavLink
                          to={item.path}
                          onClick={() => setMenuOpen(false)}
                          className={({ isActive }) =>
                            `group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-semibold transition-all duration-300 ${
                              isActive
                                ? "bg-[#D6A354] text-[#1B120C]"
                                : "text-white/80 hover:bg-white/[0.05] hover:text-[#D6A354]"
                            }`
                          }
                        >
                          <span>{item.name}</span>

                          <FiChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="my-8 h-px bg-white/[0.08]" />

                <button
                  type="button"
                  onClick={handleCartClick}
                  className="group mb-3 flex w-full items-center justify-between rounded-2xl border border-[#D6A354]/20 bg-white/[0.04] px-5 py-4 text-lg font-semibold text-white/80 transition-all duration-300 hover:border-[#D6A354]/40 hover:bg-[#D6A354] hover:text-[#1B120C]"
                >
                  <span className="flex items-center gap-3">
                    <FiShoppingBag size={21} />
                    Cart
                  </span>

                  <span className="flex items-center gap-2">
                    {cartCount > 0 && (
                      <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#D6A354] px-1.5 text-xs font-bold text-[#1B120C]">
                        {cartCount > 99 ? "99+" : cartCount}
                      </span>
                    )}

                    <FiChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={openLogin}
                    className="rounded-2xl border border-[#D6A354]/60 px-4 py-3.5 font-semibold text-[#D6A354] transition hover:bg-[#D6A354] hover:text-[#1B120C]"
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    onClick={openSignup}
                    className="rounded-2xl bg-[#D6A354] px-4 py-3.5 font-bold text-[#1B120C] transition hover:bg-[#E7BC70]"
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="mt-auto border-t border-white/[0.08] px-6 py-6">
                <p className="text-center text-sm text-white/40">
                  Fresh coffee. Warm moments.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loginOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLoginOpen(false)}
              className="fixed inset-0 z-[1300] bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed left-1/2 top-1/2 z-[1400] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] border border-[#D6A354]/20 bg-[#FFFDF9] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:p-10"
            >
              <button
                type="button"
                onClick={() => setLoginOpen(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-xl text-gray-500 transition hover:bg-[#D6A354] hover:text-black"
              >
                <FiX />
              </button>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D6A354] text-[#1B120C] shadow-[0_10px_30px_rgba(214,163,84,0.25)]">
                <FiUser size={27} />
              </div>

              <h2 className="mt-6 text-center text-3xl font-black text-[#1B120C]">
                Welcome Back
              </h2>

              <p className="mt-2 text-center text-sm text-gray-500">
                Login to continue your coffee journey.
              </p>

              <div className="mt-8 space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 outline-none transition focus:border-[#D6A354] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 outline-none transition focus:border-[#D6A354] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                />

                <button
                  type="button"
                  className="w-full rounded-xl bg-[#D6A354] py-4 font-bold text-[#1B120C] transition hover:bg-[#C99643] hover:shadow-lg"
                >
                  Login
                </button>
              </div>

              <button
                type="button"
                onClick={() => setLoginOpen(false)}
                className="mt-5 w-full text-sm font-medium text-gray-500 transition hover:text-[#1B120C]"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {signupOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSignupOpen(false)}
              className="fixed inset-0 z-[1300] bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed left-1/2 top-1/2 z-[1400] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] border border-[#D6A354]/20 bg-[#FFFDF9] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:p-10"
            >
              <button
                type="button"
                onClick={() => setSignupOpen(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-xl text-gray-500 transition hover:bg-[#D6A354] hover:text-black"
              >
                <FiX />
              </button>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D6A354] text-[#1B120C]">
                <FiUser size={27} />
              </div>

              <h2 className="mt-6 text-center text-3xl font-black text-[#1B120C]">
                Create Account
              </h2>

              <p className="mt-2 text-center text-sm text-gray-500">
                Join us and enjoy every moment.
              </p>

              <div className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 outline-none transition focus:border-[#D6A354] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 outline-none transition focus:border-[#D6A354] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 outline-none transition focus:border-[#D6A354] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                />

                <button
                  type="button"
                  className="w-full rounded-xl bg-[#D6A354] py-4 font-bold text-[#1B120C] transition hover:bg-[#C99643] hover:shadow-lg"
                >
                  Create Account
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSignupOpen(false)}
                className="mt-5 w-full text-sm font-medium text-gray-500 transition hover:text-[#1B120C]"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
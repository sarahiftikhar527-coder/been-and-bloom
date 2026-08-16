import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Location", path: "/location" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "#",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "#",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "#",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "#",
  },
];

const contactItems = [
  {
    icon: FiMapPin,
    title: "Visit Us",
    content: (
      <>
        123 Coffee Street,
        <br />
        New York, USA
      </>
    ),
  },
  {
    icon: FiPhone,
    title: "Call Us",
    content: "+1 (234) 567-890",
  },
  {
    icon: FiMail,
    title: "Email Us",
    content: "hello@beanandbloom.com",
  },
  {
    icon: FiClock,
    title: "Opening Hours",
    content: (
      <>
        Mon - Sun
        <br />
        8:00 AM - 10:00 PM
      </>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    window.setTimeout(() => {
      setSubscribed(false);
    }, 3500);
  };

  const handleSocialClick = (event, href) => {
    if (href === "#") {
      event.preventDefault();
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#120B07] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D6A354]/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#8B5E34]/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(214,163,84,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(214,163,84,.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 flex flex-col items-start justify-between gap-8 border-b border-[#3A281D] pb-12 lg:flex-row lg:items-center"
        >
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6A354]/20 bg-[#D6A354]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-[#D6A354]"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D6A354]" />
              Crafted With Passion
            </motion.span>

            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Good Coffee.
              <span className="block bg-gradient-to-r from-[#F1C77A] via-[#D6A354] to-[#A87335] bg-clip-text text-transparent">
                Great Moments.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#A99B91]">
              From carefully selected beans to perfectly crafted cups,
              Bean & Bloom brings warmth, flavor and unforgettable coffee
              moments to every day.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 rounded-2xl border border-[#D6A354]/30 bg-[#D6A354]/10 px-6 py-4 font-semibold text-[#E8BC70] backdrop-blur-xl transition-all duration-300 hover:border-[#D6A354]/60 hover:bg-[#D6A354]/15 hover:text-white"
            >
              Explore Our Menu

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link to="/" className="group inline-block">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <motion.div
                  className="absolute -inset-3 rounded-full bg-[#D6A354]/10 blur-xl"
                  animate={{
                    opacity: [0.25, 0.6, 0.25],
                    scale: [0.95, 1.08, 0.95],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-medium uppercase tracking-[4px] text-[#D6A354]/70">
                      The
                    </span>

                    <span className="font-serif text-2xl font-black tracking-[2px] text-[#F3D39A] transition-colors duration-300 group-hover:text-[#D6A354]">
                      BEAN & BLOOM
                    </span>
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4,
                      duration: 0.7,
                    }}
                    className="mt-1 h-px bg-gradient-to-r from-transparent via-[#D6A354] to-transparent"
                  />
                </div>
              </motion.div>
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-[#A99B91]">
              Enjoy handcrafted coffee made with premium beans roasted to
              perfection. Every cup is brewed with passion to make every
              moment special.
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    onClick={(event) =>
                      handleSocialClick(event, social.href)
                    }
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.06] bg-[#21150E] text-[#A99B91] transition-all duration-300 hover:border-[#D6A354]/40 hover:bg-[#D6A354] hover:text-[#120B07] hover:shadow-[0_10px_30px_rgba(214,163,84,0.18)]"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[3px] text-[#D6A354]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-[#A99B91] transition-all duration-300 hover:translate-x-1 hover:text-[#F1C77A]"
                  >
                    <span className="h-px w-0 bg-[#D6A354] transition-all duration-300 group-hover:w-4" />

                    {item.name}

                    <FiArrowUpRight
                      size={13}
                      className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/cart"
              className="group mt-7 inline-flex items-center gap-2 text-[#A99B91] transition-all duration-300 hover:translate-x-1 hover:text-[#F1C77A]"
            >
              <span className="h-px w-0 bg-[#D6A354] transition-all duration-300 group-hover:w-4" />

              Cart

              <FiArrowUpRight
                size={13}
                className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-0 group-hover:opacity-100"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[3px] text-[#D6A354]">
              Contact Us
            </h3>

            <div className="space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D6A354]/10 bg-[#21150E] text-[#D6A354] transition-all duration-300 group-hover:border-[#D6A354]/30 group-hover:bg-[#D6A354]/10">
                      <Icon size={17} />
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#75675E]">
                        {item.title}
                      </p>

                      <p className="text-sm leading-6 text-[#B8AAA0]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[3px] text-[#D6A354]">
              Stay Connected
            </h3>

            <p className="mb-6 leading-7 text-[#A99B91]">
              Subscribe for seasonal drinks, special offers and exclusive
              coffee moments.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <FiMail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#75675E]"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-[#3A281D] bg-[#21150E] py-4 pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#665950] focus:border-[#D6A354]/50 focus:bg-[#261810] focus:ring-2 focus:ring-[#D6A354]/10"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold transition-all duration-300 ${
                  subscribed
                    ? "bg-[#557A45] text-white"
                    : "bg-gradient-to-r from-[#D6A354] to-[#B9823D] text-[#120B07] shadow-[0_12px_35px_rgba(214,163,84,0.15)] hover:shadow-[0_15px_45px_rgba(214,163,84,0.25)]"
                }`}
              >
                {subscribed ? (
                  <>
                    <FiCheck size={18} />
                    Subscribed Successfully
                  </>
                ) : (
                  <>
                    Subscribe
                    <FiArrowUpRight size={17} />
                  </>
                )}
              </motion.button>
            </form>

            <p className="mt-4 text-[11px] leading-5 text-[#665950]">
              No spam. Just good coffee and occasional special offers.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-[#3A281D] pt-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-center text-sm text-[#75675E] md:text-left">
              © 2026{" "}
              <span className="font-semibold text-[#A99B91]">
                Bean & Bloom
              </span>
              . All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-[#75675E] transition-colors duration-300 hover:text-[#D6A354]"
              >
                Privacy Policy
              </Link>

              <span className="h-1 w-1 rounded-full bg-[#49352A]" />

              <Link
                to="/terms"
                className="text-[#75675E] transition-colors duration-300 hover:text-[#D6A354]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D6A354]/30" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#D6A354] shadow-[0_0_12px_rgba(214,163,84,0.8)]" />

          <span className="text-[9px] font-bold uppercase tracking-[4px] text-[#665950]">
            Brewed With Love
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#D6A354] shadow-[0_0_12px_rgba(214,163,84,0.8)]" />

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D6A354]/30" />
        </div>
      </div>
    </footer>
  );
}
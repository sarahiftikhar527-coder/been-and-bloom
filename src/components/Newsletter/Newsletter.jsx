import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiCheck,
  FiCoffee,
  FiMail,
  FiSend,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const newsletterStats = [
  {
    id: 1,
    value: "10K+",
    label: "Coffee Lovers",
    icon: FiUsers,
  },
  {
    id: 2,
    value: "30+",
    label: "Coffee Recipes",
    icon: FiCoffee,
  },
  {
    id: 3,
    value: "15+",
    label: "Expert Baristas",
    icon: FiCoffee,
  },
  {
    id: 4,
    value: "4.9",
    label: "Customer Rating",
    icon: FaStar,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
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

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedEmail =
      localStorage.getItem("coffee_newsletter_email");

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    try {
      localStorage.setItem(
        "coffee_newsletter_email",
        trimmedEmail
      );

      const subscribers = JSON.parse(
        localStorage.getItem("coffee_newsletter_subscribers") ||
          "[]"
      );

      const exists = subscribers.some(
        (subscriber) =>
          subscriber.toLowerCase() ===
          trimmedEmail.toLowerCase()
      );

      if (!exists) {
        subscribers.push(trimmedEmail);
        localStorage.setItem(
          "coffee_newsletter_subscribers",
          JSON.stringify(subscribers)
        );
      }

      setStatus("success");
      setMessage(
        "You're in! Welcome to the Coffee Club."
      );
    } catch (error) {
      console.error(
        "Newsletter subscription failed:",
        error
      );

      setStatus("error");
      setMessage(
        "Something went wrong. Please try again."
      );
    }
  };

  const resetStatus = () => {
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-gradient-to-br from-[#21110A] via-[#342014] to-[#5A3823] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#D6A354]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full bg-[#B37A33]/15 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A354]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] px-5 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#D6A354]/5 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-[#D6A354]/30 bg-gradient-to-br from-[#D6A354] to-[#B37A33] text-[#2C1810] shadow-[0_15px_45px_rgba(214,163,84,0.2)]"
            >
              <FiMail className="text-3xl" />
            </motion.div>

            <motion.div
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
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-4 flex items-center justify-center gap-3"
            >
              <span className="h-px w-8 bg-[#D6A354]/50" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D6A354] sm:text-xs">
                Stay Connected
              </span>

              <span className="h-px w-8 bg-[#D6A354]/50" />
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
                delay: 0.15,
              }}
              className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Join Our{" "}
              <span className="text-[#D6A354]">
                Coffee Club
              </span>
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
                delay: 0.25,
              }}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
            >
              Get exclusive discounts, seasonal drinks,
              coffee tips and special offers delivered
              straight to your inbox.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
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
                delay: 0.35,
              }}
              className="mx-auto mt-10 max-w-2xl"
            >
              <div
                className={`flex flex-col gap-2 rounded-[1.5rem] border p-2 transition-all duration-300 sm:flex-row sm:items-center sm:rounded-full ${
                  status === "error"
                    ? "border-red-400/50 bg-red-400/5"
                    : status === "success"
                    ? "border-[#557A45]/50 bg-[#557A45]/5"
                    : "border-white/10 bg-white"
                }`}
              >
                <div className="flex min-w-0 flex-1 items-center px-4 sm:px-5">
                  <FiMail
                    className={`mr-3 shrink-0 text-lg ${
                      status === "error"
                        ? "text-red-400"
                        : status === "success"
                        ? "text-[#557A45]"
                        : "text-[#B37A33]"
                    }`}
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      resetStatus();
                    }}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    disabled={status === "loading"}
                    className="w-full bg-transparent py-4 text-sm text-[#2C1810] outline-none placeholder:text-[#9A8E86] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{
                    scale: status === "loading" ? 1 : 1.02,
                  }}
                  whileTap={{
                    scale: status === "loading" ? 1 : 0.97,
                  }}
                  className={`flex h-14 shrink-0 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold transition-all duration-300 ${
                    status === "success"
                      ? "bg-[#557A45] text-white"
                      : "bg-[#D6A354] text-[#2C1810] hover:bg-[#E5B96A]"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#2C1810]/30 border-t-[#2C1810]" />
                      Joining...
                    </>
                  ) : status === "success" ? (
                    <>
                      <FiCheck size={17} />
                      Subscribed
                    </>
                  ) : (
                    <>
                      Subscribe
                      <FiSend size={16} />
                    </>
                  )}
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                {message && (
                  <motion.div
                    key={status}
                    initial={{
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    className={`mt-3 text-left text-xs sm:pl-5 ${
                      status === "success"
                        ? "text-[#9BC58A]"
                        : "text-red-300"
                    }`}
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-white/35 sm:text-xs">
                <FiShield size={13} />
                <span>
                  No spam. Just great coffee and exclusive
                  offers.
                </span>
              </div>
            </motion.form>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative mt-14 grid grid-cols-2 border-t border-white/10 pt-10 md:grid-cols-4"
          >
            {newsletterStats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`group relative px-4 py-5 text-center ${
                    index !== newsletterStats.length - 1
                      ? "border-white/10 md:border-r"
                      : ""
                  } ${
                    index < 2
                      ? "border-b md:border-b-0"
                      : ""
                  }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[#D6A354]/15 bg-[#D6A354]/10 text-[#D6A354] transition-all duration-300 group-hover:border-[#D6A354]/40 group-hover:bg-[#D6A354]/15"
                  >
                    <Icon
                      className={
                        item.id === 4
                          ? "text-sm"
                          : "text-lg"
                      }
                    />
                  </motion.div>

                  <h3 className="font-serif text-3xl font-bold text-[#D6A354] sm:text-4xl">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50 sm:text-xs">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
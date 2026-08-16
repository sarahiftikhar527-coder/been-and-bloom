import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiUsers,
  FiCheckCircle,
  FiAlertCircle,
  FiSend,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const initialForm = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: "2 People",
  request: "",
};

const guestOptions = [
  "1 Person",
  "2 People",
  "3 People",
  "4 People",
  "5 People",
  "6 People",
  "7 People",
  "8+ People",
];

const infoItems = [
  {
    icon: FiCalendar,
    title: "Easy Booking",
    description: "Reserve your table in just a few seconds.",
  },
  {
    icon: FiClock,
    title: "Open Daily",
    description: "8:00 AM - 10:00 PM",
  },
  {
    icon: FiUsers,
    title: "Family Friendly",
    description: "Perfect for every gathering.",
  },
];

export default function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const minDate = useMemo(() => {
    const date = new Date();
    return date.toISOString().split("T")[0];
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.date) {
      newErrors.date = "Please select a date.";
    }

    if (!form.time) {
      newErrors.time = "Please select a time.";
    }

    if (form.date && form.date < minDate) {
      newErrors.date = "Please select a future date.";
    }

    if (form.time) {
      const [hours, minutes] = form.time.split(":").map(Number);
      const selectedMinutes = hours * 60 + minutes;

      const openingTime = 8 * 60;
      const closingTime = 22 * 60;

      if (
        selectedMinutes < openingTime ||
        selectedMinutes > closingTime
      ) {
        newErrors.time = "Please choose a time between 8:00 AM and 10:00 PM.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const reservations = JSON.parse(
        localStorage.getItem("coffee_reservations") || "[]"
      );

      const reservation = {
        id: Date.now(),
        ...form,
        createdAt: new Date().toISOString(),
        status: "pending",
      };

      localStorage.setItem(
        "coffee_reservations",
        JSON.stringify([...reservations, reservation])
      );

      window.dispatchEvent(
        new CustomEvent("coffee-reservation-created", {
          detail: reservation,
        })
      );

      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error("Reservation failed:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D6A354]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#8B5A2B]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B37A33]" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#B37A33]">
                Reservation
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-4xl font-bold leading-tight tracking-tight text-[#2C1810] sm:text-5xl lg:text-6xl">
              Reserve Your
              <span className="block text-[#B37A33]">
                Favorite Table
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#6F625A] sm:text-base">
              Reserve your table in advance and enjoy freshly brewed coffee,
              delicious desserts and a warm café atmosphere with your
              favorite people.
            </p>

            <div className="mt-10 space-y-5">
              {infoItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-5 rounded-2xl border border-[#EEE5DE] bg-[#FBF9F6] p-4 transition-all duration-300 hover:border-[#D6A354]/40 hover:bg-white hover:shadow-[0_15px_40px_rgba(44,24,16,0.07)]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D6A354] text-white shadow-lg shadow-[#D6A354]/20 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="text-xl" />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#2C1810]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-[#756A63]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-[#756A63]">
                <FiMapPin className="text-[#B37A33]" />
                Premium Coffee House
              </div>

              <div className="flex items-center gap-2 text-sm text-[#756A63]">
                <FiPhone className="text-[#B37A33]" />
                +92 300 1234567
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#D6A354]/15 via-transparent to-[#8B5A2B]/10 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#E8DED5] bg-[#FBF9F6] p-6 shadow-[0_25px_70px_rgba(44,24,16,0.10)] sm:p-8 lg:p-10">
              <div className="mb-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B37A33]">
                      Book Online
                    </span>

                    <h3 className="mt-2 font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
                      Book a Table
                    </h3>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#2C1810] text-[#D6A354] sm:flex">
                    <FiCalendar className="text-xl" />
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#756A63]">
                  Fill in your details and we'll save your reservation request.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="reservation-name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#5F5149]"
                    >
                      Your Name
                    </label>

                    <input
                      id="reservation-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`h-14 w-full rounded-xl border bg-white px-4 text-sm text-[#2C1810] outline-none transition placeholder:text-[#AAA09A] focus:ring-4 focus:ring-[#D6A354]/10 ${
                        errors.name
                          ? "border-red-400"
                          : "border-[#E5DCD5] focus:border-[#D6A354]"
                      }`}
                    />

                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="reservation-email"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#5F5149]"
                    >
                      Email Address
                    </label>

                    <input
                      id="reservation-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`h-14 w-full rounded-xl border bg-white px-4 text-sm text-[#2C1810] outline-none transition placeholder:text-[#AAA09A] focus:ring-4 focus:ring-[#D6A354]/10 ${
                        errors.email
                          ? "border-red-400"
                          : "border-[#E5DCD5] focus:border-[#D6A354]"
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="reservation-date"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#5F5149]"
                    >
                      Date
                    </label>

                    <div className="relative">
                      <FiCalendar className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B37A33]" />

                      <input
                        id="reservation-date"
                        type="date"
                        name="date"
                        min={minDate}
                        value={form.date}
                        onChange={handleChange}
                        className={`h-14 w-full rounded-xl border bg-white pl-11 pr-4 text-sm text-[#2C1810] outline-none transition focus:ring-4 focus:ring-[#D6A354]/10 ${
                          errors.date
                            ? "border-red-400"
                            : "border-[#E5DCD5] focus:border-[#D6A354]"
                        }`}
                      />
                    </div>

                    {errors.date && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="reservation-time"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#5F5149]"
                    >
                      Time
                    </label>

                    <div className="relative">
                      <FiClock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B37A33]" />

                      <input
                        id="reservation-time"
                        type="time"
                        name="time"
                        min="08:00"
                        max="22:00"
                        value={form.time}
                        onChange={handleChange}
                        className={`h-14 w-full rounded-xl border bg-white pl-11 pr-4 text-sm text-[#2C1810] outline-none transition focus:ring-4 focus:ring-[#D6A354]/10 ${
                          errors.time
                            ? "border-red-400"
                            : "border-[#E5DCD5] focus:border-[#D6A354]"
                        }`}
                      />
                    </div>

                    {errors.time && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.time}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="reservation-guests"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#5F5149]"
                    >
                      Number of Guests
                    </label>

                    <div className="relative">
                      <FiUsers className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B37A33]" />

                      <select
                        id="reservation-guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="h-14 w-full appearance-none rounded-xl border border-[#E5DCD5] bg-white pl-11 pr-4 text-sm text-[#2C1810] outline-none transition focus:border-[#D6A354] focus:ring-4 focus:ring-[#D6A354]/10"
                      >
                        {guestOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="reservation-request"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#5F5149]"
                    >
                      Special Request
                    </label>

                    <textarea
                      id="reservation-request"
                      name="request"
                      rows={4}
                      value={form.request}
                      onChange={handleChange}
                      placeholder="Birthday, window seat, special occasion..."
                      className="w-full resize-none rounded-xl border border-[#E5DCD5] bg-white p-4 text-sm text-[#2C1810] outline-none transition placeholder:text-[#AAA09A] focus:border-[#D6A354] focus:ring-4 focus:ring-[#D6A354]/10"
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-5 flex items-start gap-3 rounded-2xl border border-[#557A45]/20 bg-[#557A45]/10 p-4 text-[#3F6632]"
                    >
                      <FiCheckCircle className="mt-0.5 shrink-0 text-lg" />

                      <div>
                        <p className="text-sm font-bold">
                          Reservation request saved!
                        </p>

                        <p className="mt-1 text-xs">
                          Your table reservation has been submitted successfully.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {status === "error" && Object.keys(errors).length === 0 && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-5 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600"
                    >
                      <FiAlertCircle className="shrink-0 text-lg" />

                      <p className="text-sm font-medium">
                        Something went wrong. Please try again.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={
                    status !== "loading"
                      ? {
                          y: -2,
                          scale: 1.01,
                        }
                      : {}
                  }
                  whileTap={
                    status !== "loading"
                      ? {
                          scale: 0.98,
                        }
                      : {}
                  }
                  className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#2C1810] px-6 text-sm font-bold text-white shadow-xl shadow-[#2C1810]/10 transition-all duration-300 hover:bg-[#B37A33] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Processing Reservation...
                    </>
                  ) : (
                    <>
                      Reserve My Table
                      <FiSend />
                    </>
                  )}
                </motion.button>

                <p className="mt-4 text-center text-xs text-[#9A8F88]">
                  Reservations are available daily from 8:00 AM to 10:00 PM.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
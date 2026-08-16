import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiLinkedin,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

import hero from "../assets/images/hero.jpg";
import security from "../assets/images/security.png";
import map from "../assets/images/map.jpg";

const contactCards = [
  {
    icon: FiMapPin,
    title: "Visit Our Café",
    text: "P# 23 Near UBL Bank Plaza, Susan Road, Madinah Town, Faisalabad.",
  },
  {
    icon: FiClock,
    title: "Business Hours",
    text: "Monday – Saturday · 10:00 AM – 7:00 PM",
  },
  {
    icon: FiPhone,
    title: "Call Us",
    text: "+92 328 7935442",
    href: "tel:03287935442",
  },
  {
    icon: FiMail,
    title: "Email Us",
    text: "sarahiftikhar3091@gmail.com",
    href: "mailto:sarahiftikhar3091@gmail.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2] text-[#2C1810]">
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Café"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#1E120B]/60 via-[#1E120B]/65 to-[#1E120B]/90" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A354]/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
        >
          <span className="mb-5 rounded-full border border-[#D6A354]/40 bg-[#D6A354]/10 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-[#F4D59B] backdrop-blur-md">
            Get In Touch
          </span>

          <h1 className="max-w-4xl font-serif text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Let&apos;s Start a
            <span className="text-[#D6A354]"> Conversation</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Have a question, feedback, or simply want to say hello? We&apos;d
            love to hear from you. Visit our café or send us a message.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex items-center gap-3 text-sm text-white/60"
          >
            <span className="h-px w-10 bg-[#D6A354]" />
            <span>We&apos;re always happy to help</span>
            <span className="h-px w-10 bg-[#D6A354]" />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D6A354]/10 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#8B5A2B]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#E7DBD1] bg-white p-6 shadow-[0_25px_70px_rgba(44,24,16,0.08)] sm:p-10"
            >
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[3px] text-[#B37A33]">
                  Send A Message
                </span>

                <h2 className="mt-3 font-serif text-3xl font-black text-[#2C1810] sm:text-4xl">
                  We&apos;d Love To Hear From You
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-gray-500">
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#557A45] text-white shadow-xl">
                    <FiCheck size={34} />
                  </div>

                  <h3 className="mt-7 text-3xl font-bold text-[#2C1810]">
                    Message Sent!
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-gray-500">
                    Thank you for reaching out. We&apos;ll get back to you
                    shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#3B281E]">
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-2xl border border-[#DED2C8] bg-[#FCFAF8] px-5 py-4 text-sm text-[#2C1810] outline-none transition placeholder:text-gray-400 focus:border-[#D6A354] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#3B281E]">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-2xl border border-[#DED2C8] bg-[#FCFAF8] px-5 py-4 text-sm text-[#2C1810] outline-none transition placeholder:text-gray-400 focus:border-[#D6A354] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#3B281E]">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What would you like to talk about?"
                      required
                      className="w-full rounded-2xl border border-[#DED2C8] bg-[#FCFAF8] px-5 py-4 text-sm text-[#2C1810] outline-none transition placeholder:text-gray-400 focus:border-[#D6A354] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#3B281E]">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={7}
                      placeholder="Tell us how we can help..."
                      required
                      className="w-full resize-none rounded-2xl border border-[#DED2C8] bg-[#FCFAF8] px-5 py-4 text-sm text-[#2C1810] outline-none transition placeholder:text-gray-400 focus:border-[#D6A354] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                    />
                  </div>

                  <div className="flex flex-col gap-5 border-t border-[#EEE5DE] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF6E9]">
                        <img
                          src={security}
                          alt="Security"
                          className="h-5 w-5 object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[#3B281E]">
                          Your information is safe
                        </p>

                        <p className="mt-0.5 text-[10px] text-gray-500">
                          We respect your privacy.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#2C1810] px-7 py-4 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#B37A33]"
                    >
                      Send Message

                      <FiSend
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {contactCards.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D6A354] text-white transition duration-300 group-hover:bg-[#2C1810]">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#B37A33]">
                        {item.title}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-5 rounded-3xl border border-[#E7DBD1] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-5 rounded-3xl border border-[#E7DBD1] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}

              <div className="rounded-3xl border border-[#E7DBD1] bg-[#2C1810] p-6 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#D6A354]">
                      Connect With Us
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      Follow Us
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#D6A354]">
                    <FiLinkedin size={20} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Stay connected for updates, special offers, and the latest
                  news.
                </p>

                <a
                  href="#"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#D6A354] transition hover:text-white"
                >
                  SarahDev

                  <FiArrowUpRight
                    size={15}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#E7DBD1] bg-white shadow-lg">
                <img
                  src={map}
                  alt="Location map"
                  className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="flex items-center gap-3 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5EADF] text-[#B37A33]">
                    <FiMapPin size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#2C1810]">
                      Find Us Here
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Susan Road, Madinah Town, Faisalabad
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#2C1810] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl">☕</span>

            <p className="mt-5 text-xs font-bold uppercase tracking-[4px] text-[#D6A354]">
              Come Say Hello
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black sm:text-5xl">
              Your next coffee moment is waiting.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
              Whether you&apos;re meeting friends, working on your next big
              idea, or simply craving a great cup of coffee, we&apos;re ready
              for you.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:03287935442"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D6A354] px-7 py-4 text-sm font-bold text-[#2C1810] transition hover:bg-white"
              >
                <FiPhone />
                Call Us
              </a>

              <a
                href="mailto:sarahiftikhar3091@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#2C1810]"
              >
                <FiMail />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
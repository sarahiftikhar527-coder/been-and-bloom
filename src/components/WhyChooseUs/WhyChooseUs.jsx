import { motion } from "framer-motion";
import {
  FaSeedling,
  FaShippingFast,
  FaAward,
  FaMugHot,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaSeedling,
    number: "01",
    title: "Organic Beans",
    description:
      "We source premium organic coffee beans from sustainable farms around the world.",
    highlights: ["Ethically sourced", "Premium quality"],
    color: "from-[#687A35] to-[#3F5422]",
  },
  {
    id: 2,
    icon: FaMugHot,
    number: "02",
    title: "Freshly Brewed",
    description:
      "Every cup is brewed fresh with carefully roasted beans for the perfect flavor.",
    highlights: ["Fresh every day", "Expertly roasted"],
    color: "from-[#8B5A2B] to-[#5C3A21]",
  },
  {
    id: 3,
    icon: FaAward,
    number: "03",
    title: "Award Winning",
    description:
      "Recognized for exceptional coffee quality and customer satisfaction.",
    highlights: ["Premium standards", "Trusted quality"],
    color: "from-[#D6A354] to-[#A86F27]",
  },
  {
    id: 4,
    icon: FaShippingFast,
    number: "04",
    title: "Fast Delivery",
    description:
      "Get your favorite coffee delivered quickly while it's still fresh and delicious.",
    highlights: ["Quick delivery", "Fresh on arrival"],
    color: "from-[#C58F5C] to-[#8B5A2B]",
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
    y: 70,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F2] py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D6A354]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#8B5A2B]/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A354]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#B37A33]" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#B37A33] sm:text-sm">
              Why Choose Us
            </span>

            <span className="h-px w-10 bg-[#B37A33]" />
          </motion.div>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#2C1810] sm:text-5xl lg:text-6xl">
            Crafted With{" "}
            <span className="text-[#B37A33]">Purpose</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6F625A] sm:text-base sm:leading-8">
            Experience premium handcrafted coffee made with passion, quality
            ingredients, responsible sourcing, and exceptional service.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.id}
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
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-[#D6A354]/30 via-transparent to-[#8B5A2B]/20 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

                <div className="relative h-full overflow-hidden rounded-[2rem] border border-[#E8DED5] bg-white p-7 shadow-[0_12px_40px_rgba(44,24,16,0.06)] transition-all duration-500 group-hover:border-[#D6A354]/40 group-hover:shadow-[0_25px_65px_rgba(44,24,16,0.13)] sm:p-8">
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#D6A354]/5 blur-3xl transition duration-500 group-hover:bg-[#D6A354]/10" />

                  <div className="relative">
                    <div className="mb-7 flex items-center justify-between">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: [0, -6, 6, 0],
                        }}
                        transition={{ duration: 0.5 }}
                        className={`relative flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                      >
                        <div className="absolute inset-0 bg-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                        <Icon className="relative z-10 text-[32px]" />
                      </motion.div>

                      <span className="font-serif text-4xl font-bold text-[#EEE6DF] transition-colors duration-500 group-hover:text-[#D6A354]/30">
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#2C1810] transition-colors duration-300 group-hover:text-[#9B652A]">
                      {feature.title}
                    </h3>

                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#756A63]">
                      {feature.description}
                    </p>

                    <div className="mt-7 h-px w-full bg-[#EEE7E1]" />

                    <div className="mt-6 space-y-3">
                      {feature.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-3"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5E8D8] text-[#A66E2C]">
                            <FaCheck className="text-[9px]" />
                          </span>

                          <span className="text-xs font-semibold text-[#756A63]">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.25 }}
                      className="mt-7 flex items-center gap-3 text-sm font-bold text-[#A66E2C]"
                    >
                      Discover More

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D6A354]/40 transition-all duration-300 group-hover:bg-[#B37A33] group-hover:text-white">
                        <FaArrowRight className="text-xs" />
                      </span>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                    }}
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-16 rounded-[2rem] border border-[#E7DDD5] bg-white/70 p-6 shadow-sm backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B37A33]">
                The Coco Beanz Promise
              </p>

              <h3 className="mt-2 font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
                Quality in every single cup.
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:justify-end">
              {["Premium Beans", "Freshly Roasted", "Expert Crafted"].map(
                (item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -3 }}
                    className="rounded-full border border-[#E4D8CF] bg-[#FAF7F3] px-4 py-2 text-xs font-semibold text-[#6F625A]"
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
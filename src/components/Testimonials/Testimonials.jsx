import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import customer1 from "../../assets/images/customer1.jpg";
import customer2 from "../../assets/images/customer2.jpg";
import customer3 from "../../assets/images/customer3.jpg";

const testimonials = [
  {
    id: 1,
    image: customer1,
    name: "Sarah Johnson",
    role: "Coffee Lover",
    review:
      "The best coffee I've ever tasted. Every cup is rich, smooth, and perfectly brewed. The atmosphere is amazing and the staff are incredibly friendly.",
    rating: 5,
  },
  {
    id: 2,
    image: customer2,
    name: "Michael Brown",
    role: "Food Blogger",
    review:
      "Absolutely love this café! Their caramel latte is outstanding and the desserts are always fresh. Highly recommended for every coffee enthusiast.",
    rating: 5,
  },
  {
    id: 3,
    image: customer3,
    name: "Emma Wilson",
    role: "Designer",
    review:
      "Beautiful café with premium quality coffee. Fast service, cozy environment, and a perfect place to work or spend time with friends.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F2] py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D6A354]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#8B5A2B]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-[#D6A354]/30 bg-[#D6A354]/10 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-[#B37A33]">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[#2C1810] sm:text-5xl lg:text-6xl">
            Loved By Coffee
            <span className="text-[#B37A33]"> Lovers</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Thousands of customers enjoy our handcrafted coffee every day.
            Here&apos;s what they have to say about their café experience.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[#E6D9CE] bg-white p-8 shadow-[0_15px_50px_rgba(44,24,16,0.06)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(44,24,16,0.14)]"
            >
              <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F0E7] text-[#D6A354]">
                <FaQuoteLeft />
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-[#D6A354]/30 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative h-16 w-16 rounded-full border-4 border-[#D6A354] object-cover"
                  />
                </div>

                <div className="pr-12">
                  <h3 className="text-lg font-bold text-[#2C1810] sm:text-xl">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#B37A33]">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, starIndex) => (
                  <FaStar
                    key={`${item.id}-star-${starIndex}`}
                    className="text-base text-[#D6A354]"
                  />
                ))}

                <span className="ml-2 text-xs font-semibold text-gray-500">
                  {item.rating}.0
                </span>
              </div>

              <p className="mt-6 text-[15px] leading-8 text-gray-600">
                &quot;{item.review}&quot;
              </p>

              <div className="mt-7 h-px w-full bg-[#EEE5DE]" />

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                  Verified Customer
                </span>

                <span className="h-2 w-2 rounded-full bg-[#D6A354]" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4"
        >
          <Stat value="10K+" label="Happy Customers" />
          <Stat value="30+" label="Coffee Flavors" />
          <Stat value="15+" label="Professional Baristas" />
          <Stat value="4.9★" label="Average Rating" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-[#E6D9CE] bg-white px-5 py-7 text-center shadow-sm transition duration-300 hover:shadow-lg"
    >
      <h3 className="text-3xl font-black text-[#B37A33] sm:text-5xl">
        {value}
      </h3>

      <p className="mt-2 text-xs font-medium text-gray-500 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
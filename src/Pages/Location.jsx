import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiMapPin,
  FiNavigation,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";

import hero from "../assets/images/hero.jpg";

const stores = [
  {
    id: 1,
    name: "Thornton Heath",
    address: "Thornton Heath, London",
    hours: "8:00 AM - 10:00 PM",
  },
  {
    id: 2,
    name: "Colliers Wood",
    address: "Colliers Wood, London",
    hours: "8:00 AM - 10:00 PM",
  },
  {
    id: 3,
    name: "Tolworth",
    address: "Tolworth, London",
    hours: "8:00 AM - 10:00 PM",
  },
  {
    id: 4,
    name: "Faisalabad",
    address: "Susan Road, Faisalabad",
    hours: "10:00 AM - 7:00 PM",
  },
  {
    id: 5,
    name: "Madinah Town",
    address: "Madinah Town, Faisalabad",
    hours: "10:00 AM - 7:00 PM",
  },
];

export default function Location() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeStore, setActiveStore] = useState(stores[3]);

  const filteredStores = useMemo(() => {
    const value = searchTerm.trim().toLowerCase();

    if (!value) return stores;

    return stores.filter(
      (store) =>
        store.name.toLowerCase().includes(value) ||
        store.address.toLowerCase().includes(value)
    );
  }, [searchTerm]);

  const handleStoreClick = (store) => {
    setActiveStore(store);
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2] text-[#2C1810]">
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src={hero}
          alt="Coffee shop"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#1E120B]/70 via-[#1E120B]/55 to-[#1E120B]/85" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-[#D6A354] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#B37A33] blur-[120px]" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D6A354]/40 bg-[#D6A354]/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#F2C878] backdrop-blur-md">
              <FiMapPin size={13} />
              Find A Location
            </span>

            <h1 className="mt-7 font-serif text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Find Your
              <span className="block text-[#D6A354]">
                Perfect Coffee Spot.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Discover a coffee shop near you and enjoy freshly brewed coffee,
              delicious treats, and a warm café experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="pointer-events-none absolute left-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-[#D6A354]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B37A33]">
              Our Locations
            </span>

            <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <h2 className="font-serif text-4xl font-bold text-[#2C1810] sm:text-5xl">
                  Visit Us
                  <span className="text-[#B37A33]"> Today.</span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#75665D]">
                  Find a coffee shop near you and make your next coffee moment
                  special.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-full border border-[#E1D5CB] bg-white px-5 py-3 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5E8D9] text-[#B37A33]">
                  <FiMapPin size={15} />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#9A887D]">
                    Locations
                  </p>

                  <p className="text-sm font-bold text-[#2C1810]">
                    {stores.length} Stores
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-[#E3D8CF] bg-white p-5 shadow-[0_20px_60px_rgba(44,24,16,0.08)] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
                    Stores
                  </h3>

                  <p className="mt-1 text-xs text-[#95847A]">
                    Choose a location near you
                  </p>
                </div>

                <span className="rounded-full bg-[#F5E9DE] px-3 py-1.5 text-xs font-bold text-[#B37A33]">
                  {filteredStores.length}
                </span>
              </div>

              <div className="relative mt-7">
                <FiSearch
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A28F83]"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search location..."
                  className="h-14 w-full rounded-2xl border border-[#E0D5CC] bg-[#FAF7F4] pl-12 pr-5 text-sm text-[#2C1810] outline-none transition placeholder:text-[#A99A90] focus:border-[#B37A33] focus:bg-white focus:ring-4 focus:ring-[#D6A354]/10"
                />
              </div>

              <div className="mt-5 max-h-[530px] overflow-y-auto pr-1">
                <AnimatePresence mode="popLayout">
                  {filteredStores.length > 0 ? (
                    filteredStores.map((store, index) => (
                      <motion.button
                        key={store.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleStoreClick(store)}
                        className={`group mb-3 flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                          activeStore.id === store.id
                            ? "border-[#D6A354] bg-[#F8F0E7] shadow-sm"
                            : "border-[#E7DED7] bg-white hover:-translate-y-0.5 hover:border-[#D6A354]/50 hover:bg-[#FCF9F6]"
                        }`}
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                            activeStore.id === store.id
                              ? "bg-[#D6A354] text-[#2C1810]"
                              : "bg-[#F4E9DE] text-[#B37A33]"
                          }`}
                        >
                          <FiMapPin size={18} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block font-bold text-[#2C1810]">
                            {store.name}
                          </span>

                          <span className="mt-1 block truncate text-xs text-[#88776C]">
                            {store.address}
                          </span>

                          <span className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-[#9A887D]">
                            <FiClock size={11} />
                            {store.hours}
                          </span>
                        </span>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                            activeStore.id === store.id
                              ? "bg-[#2C1810] text-white"
                              : "border border-[#E1D6CD] text-[#765D4C] group-hover:border-[#B37A33] group-hover:text-[#B37A33]"
                          }`}
                        >
                          <FiArrowUpRight size={15} />
                        </span>
                      </motion.button>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-2xl border border-dashed border-[#DCCFC5] bg-[#FAF7F4] px-5 py-12 text-center"
                    >
                      <FiSearch
                        size={28}
                        className="mx-auto text-[#B9A79B]"
                      />

                      <h4 className="mt-4 font-bold text-[#3A281E]">
                        No location found
                      </h4>

                      <p className="mt-2 text-xs text-[#8E7D72]">
                        Try searching for another city or store.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative min-h-[550px] overflow-hidden rounded-[2rem] border border-[#E3D8CF] bg-[#E8DED4] shadow-[0_25px_70px_rgba(44,24,16,0.12)] lg:h-[680px]"
            >
              <iframe
                title="Coffee Shop Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  activeStore.address
                )}&output=embed`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#2C1810]/20 to-transparent" />

              <motion.div
                key={activeStore.id}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-5 right-5 top-5 sm:left-7 sm:right-auto sm:max-w-sm"
              >
                <div className="rounded-2xl border border-white/40 bg-white/95 p-4 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D6A354] text-[#2C1810]">
                      <FiMapPin size={19} />
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#B37A33]">
                        Selected Location
                      </p>

                      <h3 className="mt-1 font-bold text-[#2C1810]">
                        {activeStore.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-[#75665D]">
                    {activeStore.address}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold text-[#75665D]">
                    <FiClock size={12} className="text-[#B37A33]" />
                    {activeStore.hours}
                  </div>
                </div>
              </motion.div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  activeStore.address
                )}`}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-[#2C1810] px-5 py-3 text-xs font-bold text-white shadow-xl transition hover:bg-[#B37A33] sm:bottom-7 sm:right-7"
              >
                <FiNavigation size={14} />
                Get Directions
                <FiArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#2C1810] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D6A354]">
              Your coffee is waiting
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Come by for a cup worth remembering.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
              Whether you're meeting friends, working quietly, or simply
              craving great coffee, there's always a place for you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs text-white/70">
                Freshly Brewed
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs text-white/70">
                Premium Beans
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs text-white/70">
                Cozy Atmosphere
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
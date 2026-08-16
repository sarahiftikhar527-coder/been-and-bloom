import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiStar,
  FiShoppingBag,
  FiHeart,
  FiCheck,
  FiMinus,
  FiPlus,
  FiCoffee,
  FiAward,
  FiTruck,
  FiShield,
  FiChevronRight,
  FiArrowUpRight,
  FiClock,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";

import coffee1 from "../assets/images/coffee1.jpg";
import coffee2 from "../assets/images/coffee2.jpg";
import coffee3 from "../assets/images/coffee3.jpg";

import caramelCloud from "../assets/images/caramel-cloud.jpg";
import goldenCappuccino from "../assets/images/golden-cappuccino.jpg";
import hazelnutBliss from "../assets/images/hazelnut-bliss.jpg";
import icedCaramelBrew from "../assets/images/iced-caramel-brew.jpg";
import mochaDream from "../assets/images/mocha-dream.jpg";
import velvetLatte from "../assets/images/velvet-latte.jpg";

const coffees = [
  {
    id: "1",
    slug: "caramel-latte",
    image: coffee1,
    images: [coffee1],
    name: "Caramel Latte",
    category: "Signature Coffee",
    price: 8.99,
    rating: "4.9",
    reviews: "128",
    description:
      "Smooth espresso blended with creamy steamed milk and rich caramel for a beautifully balanced coffee with a sweet, luxurious finish.",
    notes: ["Caramel", "Creamy", "Smooth"],
    size: "12 oz",
    strength: "Medium",
    roast: "Light Roast",
    preparation: "5–8 min",
  },
  {
    id: "2",
    slug: "espresso",
    image: coffee2,
    images: [coffee2],
    name: "Espresso",
    category: "Classic Coffee",
    price: 6.49,
    rating: "4.8",
    reviews: "96",
    description:
      "Rich and aromatic espresso crafted from carefully selected coffee beans for a bold, smooth and perfectly balanced classic cup.",
    notes: ["Bold", "Rich", "Classic"],
    size: "8 oz",
    strength: "Strong",
    roast: "Medium Roast",
    preparation: "4–6 min",
  },
  {
    id: "3",
    slug: "mocha",
    image: coffee3,
    images: [coffee3],
    name: "Mocha",
    category: "Chocolate Coffee",
    price: 9.49,
    rating: "5.0",
    reviews: "154",
    description:
      "Bold espresso combined with premium chocolate and creamy steamed milk for a rich, indulgent coffee made especially for chocolate lovers.",
    notes: ["Chocolate", "Rich", "Sweet"],
    size: "12 oz",
    strength: "Medium",
    roast: "Medium Roast",
    preparation: "5–8 min",
  },
  {
    id: "4",
    slug: "caramel-cloud",
    image: caramelCloud,
    images: [caramelCloud],
    name: "Caramel Cloud",
    category: "Signature",
    price: 12.29,
    rating: "4.9",
    reviews: "128",
    description:
      "Smooth espresso with rich caramel and creamy foam for a sweet, luxurious finish. Warm, silky and perfectly balanced from the first sip to the last.",
    notes: ["Caramel", "Creamy", "Smooth"],
    size: "12 oz",
    strength: "Medium",
    roast: "Light Roast",
    preparation: "5–8 min",
  },
  {
    id: "5",
    slug: "velvet-latte",
    image: velvetLatte,
    images: [velvetLatte],
    name: "Velvet Latte",
    category: "Hot Coffee",
    price: 10.99,
    rating: "4.8",
    reviews: "96",
    description:
      "Silky espresso blended with perfectly steamed milk for a beautifully balanced cup with a smooth and comforting finish.",
    notes: ["Silky", "Creamy", "Smooth"],
    size: "12 oz",
    strength: "Medium",
    roast: "Medium Roast",
    preparation: "5–8 min",
  },
  {
    id: "6",
    slug: "mocha-dream",
    image: mochaDream,
    images: [mochaDream],
    name: "Mocha Dream",
    category: "Chocolate",
    price: 11.49,
    rating: "4.9",
    reviews: "154",
    description:
      "Bold espresso combined with premium chocolate and velvety steamed milk. Deep, rich and indulgent for chocolate lovers.",
    notes: ["Chocolate", "Rich", "Sweet"],
    size: "12 oz",
    strength: "Medium",
    roast: "Medium Roast",
    preparation: "6–9 min",
  },
  {
    id: "7",
    slug: "golden-cappuccino",
    image: goldenCappuccino,
    images: [goldenCappuccino],
    name: "Golden Cappuccino",
    category: "Hot Coffee",
    price: 9.99,
    rating: "4.8",
    reviews: "87",
    description:
      "Classic espresso and steamed milk finished with delicate golden foam for a rich, creamy and beautifully balanced coffee experience.",
    notes: ["Classic", "Foamy", "Rich"],
    size: "10 oz",
    strength: "Medium",
    roast: "Dark Roast",
    preparation: "5–7 min",
  },
  {
    id: "8",
    slug: "iced-caramel-brew",
    image: icedCaramelBrew,
    images: [icedCaramelBrew],
    name: "Iced Caramel Brew",
    category: "Cold Coffee",
    price: 11.29,
    rating: "4.9",
    reviews: "112",
    description:
      "Refreshing cold brew blended with caramel and a smooth creamy texture. Perfectly chilled for a refreshing coffee moment.",
    notes: ["Iced", "Caramel", "Refreshing"],
    size: "16 oz",
    strength: "Medium",
    roast: "Cold Brew",
    preparation: "4–6 min",
  },
  {
    id: "9",
    slug: "hazelnut-bliss",
    image: hazelnutBliss,
    images: [hazelnutBliss],
    name: "Hazelnut Bliss",
    category: "Signature",
    price: 12.49,
    rating: "5.0",
    reviews: "141",
    description:
      "Aromatic hazelnut, rich espresso and smooth milk foam come together in one indulgent signature creation.",
    notes: ["Hazelnut", "Nutty", "Creamy"],
    size: "12 oz",
    strength: "Medium",
    roast: "Light Roast",
    preparation: "5–8 min",
  },
];

const ease = [0.22, 1, 0.36, 1];

const pageTransition = {
  duration: 0.75,
  ease,
};

export default function CoffeeDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const coffee = useMemo(
    () =>
      coffees.find(
        (item) =>
          String(item.id) === String(slug) ||
          item.slug === slug
      ),
    [slug]
  );

  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [slug]);

  useEffect(() => {
    if (!coffee) return;

    setActiveImage(coffee.images?.[0] || coffee.image);
    setQuantity(1);
    setLiked(false);
    setAdded(false);
  }, [coffee]);

  const gallery = useMemo(() => {
    if (!coffee) return [];

    return coffee.images?.length
      ? coffee.images
      : [coffee.image];
  }, [coffee]);

  const increaseQuantity = () => {
    setQuantity((value) => Math.min(value + 1, 20));
  };

  const decreaseQuantity = () => {
    setQuantity((value) => Math.max(value - 1, 1));
  };

  const handleAddToCart = () => {
    if (!coffee) return;

    const product = {
      id: coffee.id,
      slug: coffee.slug,
      name: coffee.name,
      image: coffee.image,
      images: coffee.images,
      price: Number(coffee.price),
      category: coffee.category,
      rating: coffee.rating,
      reviews: coffee.reviews,
      description: coffee.description,
      notes: coffee.notes,
      size: coffee.size,
      strength: coffee.strength,
      roast: coffee.roast,
      preparation: coffee.preparation,
    };

    addToCart(product, quantity);

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 2200);
  };

  if (!coffee) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F3EE] px-6">
        <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-[#C99A58]/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={pageTransition}
          className="relative z-10 max-w-lg text-center"
        >
          <motion.div
            initial={{ scale: 0.7, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              ...pageTransition,
              delay: 0.1,
            }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-[#E3D5C9] bg-white text-4xl shadow-xl"
          >
            ☕
          </motion.div>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.35em] text-[#B37A33]">
            Coco Beanz
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#2B1810] sm:text-5xl">
            Coffee Not Found
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#786B62]">
            This coffee seems to have wandered away. Head back
            to our menu and discover another delicious creation.
          </p>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/menu")}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2B1810] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_15px_40px_rgba(43,24,16,0.2)] transition hover:bg-[#B37A33]"
          >
            Back to Menu
            <FiArrowUpRight size={16} />
          </motion.button>
        </motion.div>
      </main>
    );
  }

  const totalPrice = (coffee.price * quantity).toFixed(2);

  const relatedCoffee = coffees
    .filter((item) => item.slug !== coffee.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F3EE] text-[#2B1810]">
      <div className="pointer-events-none fixed left-[-220px] top-[12%] z-0 h-[520px] w-[520px] rounded-full bg-[#C99A58]/10 blur-[140px]" />

      <div className="pointer-events-none fixed right-[-220px] top-[52%] z-0 h-[520px] w-[520px] rounded-full bg-[#7D4E2C]/10 blur-[140px]" />

      <section className="relative z-10">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-5 sm:px-8 lg:px-12 lg:pb-28 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mb-8 flex items-center justify-between"
          >
            <motion.button
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/menu")}
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#604B3E] transition hover:text-[#B37A33]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED1C7] bg-white shadow-sm transition group-hover:border-[#B37A33] group-hover:bg-[#B37A33] group-hover:text-white">
                <FiArrowLeft size={15} />
              </span>

              <span className="hidden sm:block">
                Back to Menu
              </span>
            </motion.button>

            <div className="hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#A08E82] sm:flex">
              <span>Coco Beanz</span>

              <span className="h-1 w-1 rounded-full bg-[#C8B7A9]" />

              <span>{coffee.category}</span>
            </div>
          </motion.div>

          <div className="grid items-start gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={pageTransition}
              className="lg:sticky lg:top-8"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-[3.5rem] bg-[#B37A33]/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[3rem] border border-[#E2D6CC] bg-[#EDE5DD] p-2 shadow-[0_35px_100px_rgba(55,35,24,0.15)]">
                  <div className="relative aspect-[0.88] overflow-hidden rounded-[2.6rem] bg-[#D8CEC4]">
                    <AnimatePresence mode="wait">
                      {activeImage && (
                        <motion.img
                          key={`${coffee.slug}-${activeImage}`}
                          src={activeImage}
                          alt={coffee.name}
                          initial={{
                            opacity: 0,
                            scale: 1.08,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.98,
                          }}
                          transition={{
                            duration: 0.6,
                            ease,
                          }}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E120D]/85 via-[#21130D]/5 to-[#21130D]/20" />

                    <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.45,
                          duration: 0.5,
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#754A2B] shadow-xl backdrop-blur-xl"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#B37A33]" />
                        Premium Selection
                      </motion.div>

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          setLiked((value) => !value)
                        }
                        aria-label={
                          liked
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 shadow-xl backdrop-blur-xl transition ${
                          liked
                            ? "bg-[#B37A33] text-white"
                            : "bg-white/90 text-[#2B1810]"
                        }`}
                      >
                        <FiHeart
                          size={18}
                          className={liked ? "fill-current" : ""}
                        />
                      </motion.button>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-end justify-between gap-5">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/60">
                            Crafted with care
                          </p>

                          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {coffee.name}
                          </h2>
                        </div>

                        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl sm:flex">
                          <FiCoffee size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {gallery.length > 1 && (
                <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
                  {gallery.map((image, index) => {
                    const selected = activeImage === image;

                    return (
                      <motion.button
                        key={`${coffee.slug}-${index}`}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setActiveImage(image)}
                        className={`relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-2xl border-2 bg-white transition-all sm:h-[88px] sm:w-[88px] ${
                          selected
                            ? "border-[#B37A33] shadow-[0_10px_30px_rgba(179,122,51,0.2)]"
                            : "border-[#E2D7CE] opacity-65 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${coffee.name} view ${index + 1}`}
                          className="h-full w-full object-cover"
                        />

                        {selected && (
                          <span className="absolute inset-x-0 bottom-0 h-1 bg-[#B37A33]" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              )}

              <div className="mt-5 grid grid-cols-2 gap-3">
                <InfoBox
                  icon={FiClock}
                  label="Preparation"
                  value={coffee.preparation}
                />

                <InfoBox
                  icon={FiMapPin}
                  label="Availability"
                  value="Fresh today"
                />
              </div>
            </motion.div>

            <motion.div
              key={coffee.slug}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ...pageTransition,
                delay: 0.08,
              }}
              className="lg:pt-3"
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E3D5C9] bg-white px-3.5 py-2 shadow-sm">
                  <FiStar
                    size={14}
                    className="fill-[#C68B35] text-[#C68B35]"
                  />

                  <span className="text-xs font-bold text-[#38251B]">
                    {coffee.rating}
                  </span>
                </div>

                <span className="text-xs text-[#A08D81]">
                  {coffee.reviews} verified reviews
                </span>

                <span className="h-1 w-1 rounded-full bg-[#C8B8AD]" />

                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#668054]">
                  <FiCheckCircle size={13} />
                  Freshly prepared
                </span>
              </div>

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.35em] text-[#B37A33]">
                {coffee.category}
              </p>

              <h1 className="mt-3 max-w-3xl font-serif text-[3.3rem] font-bold leading-[0.92] tracking-[-0.045em] text-[#2B1810] sm:text-[4.8rem] lg:text-[5.5rem]">
                {coffee.name}
              </h1>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-16 bg-[#C99550]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9B7760]">
                  A cup worth remembering
                </span>
              </div>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#6F625A]">
                {coffee.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {coffee.notes.map((note, index) => (
                  <motion.span
                    key={note}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.35 + index * 0.06,
                      duration: 0.45,
                    }}
                    className="rounded-full border border-[#E1D5CB] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#634B3D] shadow-sm"
                  >
                    {note}
                  </motion.span>
                ))}
              </div>

              <div className="my-9 h-px bg-[#E2D8D0]" />

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                <DetailItem
                  icon={FiCoffee}
                  label="Serving"
                  value={coffee.size}
                />

                <DetailItem
                  icon={FiAward}
                  label="Strength"
                  value={coffee.strength}
                />

                <DetailItem
                  icon={FiCheck}
                  label="Roast"
                  value={coffee.roast}
                />
              </div>

              <div className="mt-7 overflow-hidden rounded-[2rem] border border-[#E1D6CC] bg-white shadow-[0_20px_60px_rgba(54,36,26,0.07)]">
                <div className="p-5 sm:p-7">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9A887D]">
                        Your selection
                      </p>

                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-serif text-[2.9rem] font-bold tracking-tight text-[#2B1810]">
                          ${totalPrice}
                        </span>

                        <span className="text-xs text-[#9A887D]">
                          total
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-[#9A887D]">
                        ${coffee.price.toFixed(2)} per cup
                      </p>
                    </div>

                    <div className="flex w-fit items-center rounded-full border border-[#DDD1C7] bg-[#F8F4F0] p-1.5">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={decreaseQuantity}
                        aria-label="Decrease quantity"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-[#3B281D] transition hover:bg-white hover:text-[#B37A33]"
                      >
                        <FiMinus size={14} />
                      </motion.button>

                      <motion.span
                        key={quantity}
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        className="w-10 text-center text-sm font-bold text-[#2B1810]"
                      >
                        {quantity}
                      </motion.span>

                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={increaseQuantity}
                        aria-label="Increase quantity"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-[#3B281D] transition hover:bg-white hover:text-[#B37A33]"
                      >
                        <FiPlus size={14} />
                      </motion.button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {quantity > 1 && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                          marginTop: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          marginTop: 20,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          marginTop: 0,
                        }}
                        className="overflow-hidden rounded-xl bg-[#F8F3ED] px-4 py-3 text-xs text-[#76665B]"
                      >
                        <span className="font-bold text-[#4A3327]">
                          {quantity} cups
                        </span>{" "}
                        × ${coffee.price.toFixed(2)} each
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={handleAddToCart}
                    className={`group mt-6 flex min-h-[62px] w-full items-center justify-center gap-3 rounded-full px-6 text-sm font-bold text-white shadow-[0_15px_35px_rgba(43,24,16,0.18)] transition-all duration-300 ${
                      added
                        ? "bg-[#557A45]"
                        : "bg-[#2B1810] hover:bg-[#B37A33]"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {added ? (
                        <motion.span
                          key="added"
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                          }}
                          className="flex items-center gap-3"
                        >
                          <FiCheck size={19} />
                          Added to Cart
                        </motion.span>
                      ) : (
                        <motion.span
                          key="add"
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                          }}
                          className="flex items-center gap-3"
                        >
                          <FiShoppingBag size={19} />
                          Add to Cart

                          <FiChevronRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                <Feature
                  icon={FiCoffee}
                  title="Fresh"
                  text="Made to order"
                />

                <Feature
                  icon={FiAward}
                  title="Premium"
                  text="Selected beans"
                />

                <Feature
                  icon={FiTruck}
                  title="Quick"
                  text="Fresh delivery"
                />
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-[1.5rem] border border-[#E3D7CD] bg-[#F1E8DF] px-4 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#B37A33] shadow-sm">
                  <FiShield size={16} />
                </span>

                <div>
                  <p className="text-[11px] font-bold text-[#3A281E]">
                    Crafted with quality in every cup
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#87766A]">
                    Premium ingredients, carefully prepared
                    and served fresh.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-[#E5DAD1] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <motion.div
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
              margin: "-100px",
            }}
            transition={pageTransition}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#B37A33]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#B37A33]">
                  You may also enjoy
                </p>
              </div>

              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold tracking-tight text-[#2B1810] sm:text-5xl lg:text-6xl">
                More from our coffee collection
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#8A7970]">
                Discover another handcrafted favorite from the
                Coco Beanz collection.
              </p>
            </div>

            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/menu")}
              className="group inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#5A4436] transition hover:text-[#B37A33]"
            >
              Explore full menu

              <FiArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.button>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {relatedCoffee.map((item, index) => (
              <motion.button
                key={item.slug}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease,
                }}
                whileHover={{
                  y: -6,
                }}
                onClick={() =>
                  navigate(`/coffee/${item.slug}`)
                }
                className="group relative flex overflow-hidden rounded-[2rem] border border-[#E5DAD1] bg-[#F8F4F0] text-left shadow-sm transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(54,36,26,0.12)]"
              >
                <div className="relative h-[205px] w-[42%] shrink-0 overflow-hidden sm:h-[240px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2B1810]/15" />

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-md">
                    <FiCoffee size={14} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-center p-5 sm:p-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B37A33]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#2B1810] sm:text-3xl">
                    {item.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <FiStar
                      size={13}
                      className="fill-[#C68B35] text-[#C68B35]"
                    />

                    <span className="text-xs font-bold text-[#493429]">
                      {item.rating}
                    </span>

                    <span className="text-[10px] text-[#A08D81]">
                      ({item.reviews})
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-serif text-xl font-bold text-[#B37A33]">
                      ${item.price.toFixed(2)}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCCFC4] bg-white text-[#4B3427] transition duration-300 group-hover:border-[#B37A33] group-hover:bg-[#B37A33] group-hover:text-white">
                      <FiArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2B1810] py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D6A354]/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-200px] left-[-150px] h-[400px] w-[400px] rounded-full bg-[#8B5A35]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">
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
              margin: "-100px",
            }}
            transition={pageTransition}
          >
            <motion.span
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#D6A354] backdrop-blur-md"
            >
              <FiStar size={20} />
            </motion.span>

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.35em] text-[#D6A354]">
              The Coco Beanz experience
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Great coffee is more than a drink.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55">
              It is the little moment you look forward to.
              Every cup is prepared with carefully selected
              ingredients and a whole lot of care.
            </p>

            <motion.button
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => navigate("/menu")}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D6A354] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#2B1810] shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition hover:bg-white"
            >
              Discover our menu
              <FiArrowUpRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function DetailItem({ icon: Icon, label, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-[#E2D7CE] bg-white px-4 py-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F5EADF] text-[#B37A33]">
          <Icon size={14} />
        </span>

        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#9A897E]">
          {label}
        </p>
      </div>

      <p className="mt-3 text-xs font-bold text-[#3B281E]">
        {value}
      </p>
    </motion.div>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-[#E3D8CF] bg-white p-3.5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F5EADF] text-[#B37A33]">
          <Icon size={15} />
        </span>

        <div className="min-w-0">
          <p className="text-[10px] font-bold text-[#2B1810]">
            {title}
          </p>

          <p className="mt-0.5 truncate text-[9px] text-[#95847A]">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function InfoBox({ icon: Icon, label, value }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="flex items-center gap-3 rounded-2xl border border-[#E4D9D0] bg-white px-4 py-3.5 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4E9DE] text-[#B37A33]">
        <Icon size={16} />
      </span>

      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#9A887C]">
          {label}
        </p>

        <p className="mt-1 truncate text-xs font-bold text-[#3A271D]">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
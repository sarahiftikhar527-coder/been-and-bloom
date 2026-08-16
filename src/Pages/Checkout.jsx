import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCreditCard,
  FiLock,
  FiMapPin,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiShield,
  FiTruck,
  FiUser,
  FiMail,
  FiPhone,
  FiHome,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ease = [0.22, 1, 0.36, 1];

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  const items = Array.isArray(cart) ? cart : [];

  const subtotal = useMemo(() => {
    return items.reduce(
      (total, item) =>
        total +
        Number(item.price || 0) * Number(item.quantity || 0),
      0
    );
  }, [items]);

  const delivery = subtotal >= 30 ? 0 : 3.99;
  const total = subtotal + delivery;

  const cartCount = items.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const increaseQuantity = (item) => {
    addToCart(item, 1);
  };

  const decreaseQuantity = (item) => {
    if (Number(item.quantity || 0) <= 1) {
      removeFromCart(item.id);
      return;
    }

    addToCart(item, -1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!items.length) {
      navigate("/menu");
      return;
    }

    setOrderPlaced(true);

    localStorage.removeItem("coffee_cart");
    localStorage.removeItem("cart");

    window.dispatchEvent(
      new CustomEvent("coffee-cart-updated", {
        detail: [],
      })
    );

    window.dispatchEvent(
      new CustomEvent("cart-updated", {
        detail: [],
      })
    );
  };



  if (orderPlaced) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F3EE] px-5 py-20 text-[#2B1810]">
        <div className="pointer-events-none absolute left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#C99A58]/15 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[420px] w-[420px] rounded-full bg-[#7D4E2C]/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="relative z-10 w-full max-w-2xl rounded-[2.5rem] border border-[#E2D5CB] bg-white p-8 text-center shadow-[0_35px_100px_rgba(55,35,24,0.14)] sm:p-12"
        >
          <motion.div
            initial={{
              scale: 0.5,
              rotate: -15,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease,
            }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#557A45] text-white shadow-[0_15px_40px_rgba(85,122,69,0.25)]"
          >
            <FiCheck size={42} />
          </motion.div>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.35em] text-[#B37A33]">
            Order Complete
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Order Confirmed
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#786B62]">
            Thank you for your order. Your order has been received and is
            being prepared with care.
          </p>

          <div className="mt-8 rounded-2xl bg-[#F8F3ED] px-5 py-4">
            <div className="flex items-center justify-center gap-3 text-sm font-bold text-[#4A3327]">
              <FiShoppingBag className="text-[#B37A33]" />

              Your order is being prepared fresh
            </div>
          </div>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/menu")}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2B1810] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_15px_40px_rgba(43,24,16,0.2)] transition hover:bg-[#B37A33]"
          >
            Continue Shopping

            <FiArrowRight size={16} />
          </motion.button>
        </motion.div>
      </main>
    );
  }


  if (!items.length) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F3EE] px-5 py-20 text-[#2B1810]">
        <div className="pointer-events-none absolute left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#C99A58]/15 blur-[120px]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="relative z-10 max-w-lg text-center"
        >
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-[#E3D5C9] bg-white text-[#B37A33] shadow-xl">
            <FiShoppingBag size={38} />
          </div>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.35em] text-[#B37A33]">
            Shopping Cart
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Your Cart is Empty
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#786B62]">
            Add your favorite items to the cart before continuing to
            checkout.
          </p>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/menu")}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2B1810] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl transition hover:bg-[#B37A33]"
          >
            Explore Products

            <FiArrowRight size={16} />
          </motion.button>
        </motion.div>
      </main>
    );
  }

 

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F3EE] text-[#2B1810]">
      <div className="pointer-events-none fixed left-[-220px] top-[15%] z-0 h-[500px] w-[500px] rounded-full bg-[#C99A58]/10 blur-[140px]" />

      <div className="pointer-events-none fixed bottom-[-220px] right-[-180px] z-0 h-[500px] w-[500px] rounded-full bg-[#7D4E2C]/10 blur-[140px]" />

      <section className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-28">

       

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
            className="mb-10 flex items-center justify-between"
          >
            <motion.button
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/cart")}
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#604B3E] transition hover:text-[#B37A33]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED1C7] bg-white shadow-sm transition group-hover:border-[#B37A33] group-hover:bg-[#B37A33] group-hover:text-white">
                <FiArrowLeft size={15} />
              </span>

              <span className="hidden sm:block">
                Back to Cart
              </span>
            </motion.button>

            <div className="hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#A08E82] sm:flex">
              <span>Shop</span>

              <span className="h-1 w-1 rounded-full bg-[#C8B7A9]" />

              <span>Checkout</span>
            </div>
          </motion.div>

       

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#B37A33]">
              Complete Your Order
            </p>

            <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h1 className="font-serif text-5xl font-bold tracking-tight text-[#2B1810] sm:text-6xl">
                  Checkout
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#786B62]">
                  Almost there. Enter your details and choose how you would
                  like to pay for your order.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-full border border-[#E1D5CB] bg-white px-5 py-3 shadow-sm">
                <FiShoppingBag className="text-[#B37A33]" />

                <span className="text-xs font-bold text-[#5D4739]">
                  {cartCount}{" "}
                  {cartCount === 1 ? "item" : "items"}
                </span>
              </div>
            </div>
          </motion.div>

   

          <form
            onSubmit={handleSubmit}
            className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_420px]"
          >
            <div className="space-y-6">

              {/* PERSONAL DETAILS */}

              <motion.section
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.65,
                  ease,
                }}
                className="rounded-[2rem] border border-[#E1D6CC] bg-white p-6 shadow-[0_20px_60px_rgba(54,36,26,0.06)] sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5EADF] text-[#B37A33]">
                    <FiUser size={18} />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9A887D]">
                      Step 01
                    </p>

                    <h2 className="mt-1 font-serif text-2xl font-bold">
                      Personal Details
                    </h2>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="First Name"
                    icon={FiUser}
                    value={form.firstName}
                    onChange={(value) =>
                      updateField("firstName", value)
                    }
                    placeholder="Your first name"
                    required
                  />

                  <InputField
                    label="Last Name"
                    icon={FiUser}
                    value={form.lastName}
                    onChange={(value) =>
                      updateField("lastName", value)
                    }
                    placeholder="Your last name"
                    required
                  />

                  <InputField
                    label="Email Address"
                    icon={FiMail}
                    type="email"
                    value={form.email}
                    onChange={(value) =>
                      updateField("email", value)
                    }
                    placeholder="you@example.com"
                    required
                  />

                  <InputField
                    label="Phone Number"
                    icon={FiPhone}
                    type="tel"
                    value={form.phone}
                    onChange={(value) =>
                      updateField("phone", value)
                    }
                    placeholder="+92 300 0000000"
                    required
                  />
                </div>
              </motion.section>

             

              <motion.section
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.18,
                  duration: 0.65,
                  ease,
                }}
                className="rounded-[2rem] border border-[#E1D6CC] bg-white p-6 shadow-[0_20px_60px_rgba(54,36,26,0.06)] sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5EADF] text-[#B37A33]">
                    <FiMapPin size={18} />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9A887D]">
                      Step 02
                    </p>

                    <h2 className="mt-1 font-serif text-2xl font-bold">
                      Delivery Details
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  <InputField
                    label="Delivery Address"
                    icon={FiHome}
                    value={form.address}
                    onChange={(value) =>
                      updateField("address", value)
                    }
                    placeholder="House, street, area"
                    required
                  />

                  <InputField
                    label="City"
                    icon={FiMapPin}
                    value={form.city}
                    onChange={(value) =>
                      updateField("city", value)
                    }
                    placeholder="Your city"
                    required
                  />

                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#8E7D72]">
                      Order Notes
                    </label>

                    <textarea
                      value={form.notes}
                      onChange={(event) =>
                        updateField(
                          "notes",
                          event.target.value
                        )
                      }
                      placeholder="Any special instructions?"
                      rows={4}
                      className="w-full resize-none rounded-2xl border border-[#DED2C8] bg-[#FBF8F5] px-4 py-3.5 text-sm text-[#3B281E] outline-none transition placeholder:text-[#B2A39A] focus:border-[#B37A33] focus:ring-4 focus:ring-[#B37A33]/10"
                    />
                  </div>
                </div>
              </motion.section>

          

              <motion.section
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.26,
                  duration: 0.65,
                  ease,
                }}
                className="rounded-[2rem] border border-[#E1D6CC] bg-white p-6 shadow-[0_20px_60px_rgba(54,36,26,0.06)] sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5EADF] text-[#B37A33]">
                    <FiCreditCard size={18} />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9A887D]">
                      Step 03
                    </p>

                    <h2 className="mt-1 font-serif text-2xl font-bold">
                      Payment Method
                    </h2>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <PaymentOption
                    active={paymentMethod === "cash"}
                    onClick={() =>
                      setPaymentMethod("cash")
                    }
                    icon={FiTruck}
                    title="Cash on Delivery"
                    description="Pay when your order arrives"
                  />

                  <PaymentOption
                    active={paymentMethod === "card"}
                    onClick={() =>
                      setPaymentMethod("card")
                    }
                    icon={FiCreditCard}
                    title="Card Payment"
                    description="Secure card payment"
                  />
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#F8F3ED] px-4 py-4">
                  <FiShield
                    className="shrink-0 text-[#B37A33]"
                    size={18}
                  />

                  <p className="text-[10px] leading-5 text-[#7D6C61]">
                    Your information is kept secure and is only
                    used to process your order.
                  </p>

                  <FiLock
                    className="ml-auto shrink-0 text-[#A18F84]"
                    size={15}
                  />
                </div>
              </motion.section>
            </div>

     

            <motion.aside
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.12,
                duration: 0.7,
                ease,
              }}
              className="lg:sticky lg:top-8"
            >
              <div className="overflow-hidden rounded-[2rem] border border-[#E1D6CC] bg-white shadow-[0_25px_70px_rgba(54,36,26,0.1)]">

                <div className="bg-[#2B1810] px-6 py-6 text-white sm:px-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D6A354]">
                        Your Selection
                      </p>

                      <h2 className="mt-1 font-serif text-2xl font-bold">
                        Order Summary
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#D6A354]">
                      <FiShoppingBag size={18} />
                    </div>
                  </div>
                </div>

                <div className="max-h-[420px] overflow-y-auto p-5 sm:p-6">
                  <div className="space-y-4">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.95,
                          }}
                          className="flex gap-3"
                        >
                          <div className="h-[78px] w-[78px] shrink-0 overflow-hidden rounded-2xl bg-[#EDE5DD]">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <h3 className="truncate text-sm font-bold text-[#38251B]">
                                  {item.name}
                                </h3>

                                <p className="mt-1 text-[10px] text-[#A08E82]">
                                  {item.category ||
                                    "Product"}
                                </p>
                              </div>

                              <span className="shrink-0 font-serif text-sm font-bold text-[#B37A33]">
                                $
                                {(
                                  Number(
                                    item.price || 0
                                  ) *
                                  Number(
                                    item.quantity || 0
                                  )
                                ).toFixed(2)}
                              </span>
                            </div>

                            <div className="mt-3 flex items-center justify-between">
                              <div className="flex items-center rounded-full border border-[#DED2C8] bg-[#F8F4F0] p-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    decreaseQuantity(
                                      item
                                    )
                                  }
                                  className="flex h-7 w-7 items-center justify-center rounded-full text-[#5A4436] transition hover:bg-white hover:text-[#B37A33]"
                                >
                                  <FiMinus size={11} />
                                </button>

                                <span className="w-7 text-center text-[11px] font-bold">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    increaseQuantity(
                                      item
                                    )
                                  }
                                  className="flex h-7 w-7 items-center justify-center rounded-full text-[#5A4436] transition hover:bg-white hover:text-[#B37A33]"
                                >
                                  <FiPlus size={11} />
                                </button>
                              </div>

                              <span className="text-[10px] text-[#A08E82]">
                                $
                                {Number(
                                  item.price || 0
                                ).toFixed(2)}{" "}
                                each
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* TOTALS */}

                <div className="border-t border-[#E4D9D0] p-6 sm:p-7">
                  <div className="space-y-3">
                    <SummaryRow
                      label="Subtotal"
                      value={`$${subtotal.toFixed(2)}`}
                    />

                    <SummaryRow
                      label="Delivery"
                      value={
                        delivery === 0
                          ? "FREE"
                          : `$${delivery.toFixed(2)}`
                      }
                    />

                    {delivery === 0 && (
                      <div className="rounded-xl bg-[#EEF4EA] px-3 py-2 text-[10px] font-bold text-[#557A45]">
                        Free delivery unlocked!
                      </div>
                    )}
                  </div>

                  <div className="my-5 h-px bg-[#E4D9D0]" />

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9A887D]">
                        Total
                      </p>

                      <p className="mt-1 text-[10px] text-[#A08E82]">
                        Including delivery
                      </p>
                    </div>

                    <span className="font-serif text-3xl font-bold text-[#2B1810]">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    type="submit"
                    className="group mt-6 flex min-h-[60px] w-full items-center justify-center gap-3 rounded-full bg-[#2B1810] px-6 text-sm font-bold text-white shadow-[0_15px_35px_rgba(43,24,16,0.2)] transition hover:bg-[#B37A33]"
                  >
                    Place Order

                    <FiArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#9A887D]">
                    <FiLock size={12} />

                    Secure Checkout
                  </div>
                </div>
              </div>
            </motion.aside>
          </form>
        </div>
      </section>
    </main>
  );
}


function InputField({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#8E7D72]">
        {label}
      </label>

      <div className="relative">
        <Icon
          size={15}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B09E92]"
        />

        <input
          type={type}
          value={value}
          required={required}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder={placeholder}
          className="h-12 w-full rounded-2xl border border-[#DED2C8] bg-[#FBF8F5] pl-11 pr-4 text-sm text-[#3B281E] outline-none transition placeholder:text-[#B2A39A] focus:border-[#B37A33] focus:ring-4 focus:ring-[#B37A33]/10"
        />
      </div>
    </div>
  );
}



function PaymentOption({
  active,
  onClick,
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
        active
          ? "border-[#B37A33] bg-[#F8F0E6] shadow-[0_10px_30px_rgba(179,122,51,0.1)]"
          : "border-[#E2D7CE] bg-white hover:border-[#B37A33]/40"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          active
            ? "bg-[#B37A33] text-white"
            : "bg-[#F5EADF] text-[#B37A33]"
        }`}
      >
        <Icon size={17} />
      </span>

      <span className="min-w-0">
        <span className="block text-xs font-bold text-[#3B281E]">
          {title}
        </span>

        <span className="mt-1 block text-[9px] leading-4 text-[#95847A]">
          {description}
        </span>
      </span>

      <span
        className={`ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          active
            ? "border-[#B37A33] bg-[#B37A33] text-white"
            : "border-[#D8CBC1] bg-white"
        }`}
      >
        {active && <FiCheck size={11} />}
      </span>
    </motion.button>
  );
}


function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-[#8A7970]">
        {label}
      </span>

      <span className="font-bold text-[#4A3327]">
        {value}
      </span>
    </div>
  );
}
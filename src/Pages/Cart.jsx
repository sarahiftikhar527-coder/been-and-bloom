import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTrash2,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
    deliveryFee,
    total,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#F7F3EE] px-5 py-20 text-[#2B1810]">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="w-full rounded-[3rem] border border-[#E4D8CF] bg-white p-10 text-center shadow-[0_30px_80px_rgba(54,36,26,0.08)] sm:p-16"
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#F5EADF] text-[#B37A33]">
              <FiShoppingBag size={34} />
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B37A33]">
              Your order
            </p>

            <h1 className="mt-3 font-serif text-4xl font-bold text-[#2B1810] sm:text-5xl">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#817269]">
              Your perfect cup is waiting. Explore our menu
              and add something delicious to your order.
            </p>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/menu")}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2B1810] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#B37A33]"
            >
              Explore Menu
              <FiArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F3EE] px-5 py-8 text-[#2B1810] sm:px-8 lg:px-12 lg:py-12">
      <div className="pointer-events-none fixed left-[-200px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#C99A58]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.button
          initial={{
            opacity: 0,
            x: -15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          onClick={() => navigate("/menu")}
          className="group mb-10 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#604B3E] transition hover:text-[#B37A33]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED1C7] bg-white shadow-sm transition group-hover:border-[#B37A33] group-hover:bg-[#B37A33] group-hover:text-white">
            <FiArrowLeft size={15} />
          </span>
          Back to Menu
        </motion.button>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <section>
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B37A33]">
                Your Selection
              </p>

              <h1 className="mt-3 font-serif text-5xl font-bold tracking-tight text-[#2B1810]">
                Shopping Cart
              </h1>

              <p className="mt-3 text-sm text-[#85766D]">
                {cartItems.length} different coffee
                {cartItems.length !== 1 ? "s" : ""} in your order
              </p>
            </motion.div>

            <div className="mt-9 space-y-4">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -30,
                      height: 0,
                    }}
                    className="overflow-hidden rounded-[2rem] border border-[#E2D7CE] bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="flex gap-4 sm:gap-6">
                      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-[1.4rem] bg-[#EDE5DD] sm:h-36 sm:w-36">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#B37A33]">
                              {item.category}
                            </p>

                            <h2 className="mt-1 font-serif text-xl font-bold text-[#2B1810] sm:text-2xl">
                              {item.name}
                            </h2>
                          </div>

                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#A18E83] transition hover:bg-red-50 hover:text-red-500"
                          >
                            <FiTrash2 size={16} />
                          </button>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center rounded-full border border-[#DED2C8] bg-[#F8F4F0] p-1">
                            <button
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full text-[#4A3529] hover:bg-white hover:text-[#B37A33]"
                            >
                              <FiMinus size={13} />
                            </button>

                            <span className="w-8 text-center text-sm font-bold">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full text-[#4A3529] hover:bg-white hover:text-[#B37A33]"
                            >
                              <FiPlus size={13} />
                            </button>
                          </div>

                          <div className="font-serif text-xl font-bold text-[#B37A33]">
                            $
                            {(
                              Number(item.price) *
                              Number(item.quantity)
                            ).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          <aside className="lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-[2rem] border border-[#E1D6CC] bg-white p-6 shadow-[0_25px_70px_rgba(54,36,26,0.08)] sm:p-7">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9A887D]">
                Order Summary
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#2B1810]">
                Your total
              </h2>

              <div className="my-7 h-px bg-[#E4D9D0]" />

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#84736A]">
                    Subtotal
                  </span>

                  <span className="font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#84736A]">
                    Delivery
                  </span>

                  <span className="font-bold">
                    {deliveryFee === 0
                      ? "FREE"
                      : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {deliveryFee === 0 && (
                <div className="mt-5 rounded-xl bg-[#F2EADF] px-4 py-3 text-xs leading-5 text-[#765C49]">
                  Congratulations! You qualify for free
                  delivery.
                </div>
              )}

              <div className="my-7 h-px bg-[#E4D9D0]" />

              <div className="flex items-center justify-between">
                <span className="font-bold text-[#493429]">
                  Total
                </span>

                <span className="font-serif text-3xl font-bold text-[#B37A33]">
                  ${total.toFixed(2)}
                </span>
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/checkout")}
                className="mt-7 flex min-h-[60px] w-full items-center justify-center gap-3 rounded-full bg-[#2B1810] px-6 text-sm font-bold text-white shadow-[0_15px_35px_rgba(43,24,16,0.18)] transition hover:bg-[#B37A33]"
              >
                Proceed to Checkout
                <FiArrowRight size={17} />
              </motion.button>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#F8F3ED] p-3 text-center">
                  <FiShield className="mx-auto text-[#B37A33]" />
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-[#77675D]">
                    Secure
                  </p>
                </div>

                <div className="rounded-xl bg-[#F8F3ED] p-3 text-center">
                  <FiTruck className="mx-auto text-[#B37A33]" />
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-[#77675D]">
                    Fast Delivery
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

function Buy() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, name, price, detail } = location.state || {};

  const [shipping, setShipping] = useState("pickup");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    if (!email || !firstName || !lastName || !phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "orders"), {
        userId: auth.currentUser?.uid || "guest",
        product: {
          name,
          image,
          price,
          detail,
        },
        customer: {
          email,
          firstName,
          lastName,
          phone,
        },
        shippingMethod: shipping,
        totalPrice: price,
        status: "pending",
        createdAt: Timestamp.now(),
      });

      alert("Order placed successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-900 font-sans text-gray-800 dark:text-white">
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 py-10">

        {/* ORDER SUMMARY */}
        <div className="px-4">
          <p className="text-2xl font-semibold">Order Summary</p>
          <p className="text-gray-500 dark:text-white mb-6">
            Review your item and select delivery method.
          </p>

          <div className="mt-8 rounded-lg border bg-white dark:bg-gray-600 px-4 py-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                className="h-24 w-28 rounded-md object-cover"
                src={image}
                alt={name}
              />
              <div>
                <p className="text-xl font-bold">{name}</p>
                <p className="text-sm text-gray-800 dark:text-gray-300">{detail}</p>
                <p className="text-lg font-medium">${price}</p>
              </div>
            </div>
          </div>

          {/* SHIPPING */}
          <p className="mt-8 text-xl font-semibold">Shipping Method</p>
          <div className="mt-5 space-y-4">

            <label className="flex items-center cursor-pointer rounded-lg border p-4 bg-gray-300 dark:bg-gray-600">
              <input
                type="radio"
                value="pickup"
                checked={shipping === "pickup"}
                onChange={(e) => setShipping(e.target.value)}
                className="mr-3"
              />
              <span className="font-semibold">Pick Up</span>
            </label>

            <label className="flex items-center cursor-pointer rounded-lg border p-4 bg-gray-300 dark:bg-gray-600">
              <input
                type="radio"
                value="delivery"
                checked={shipping === "delivery"}
                onChange={(e) => setShipping(e.target.value)}
                className="mr-3"
              />
              <div>
                <span className="font-semibold">Delivery</span>
                <p className="text-sm text-gray-500 dark:text-white">
                  10 - 20 minutes
                </p>
              </div>
            </label>

          </div>
        </div>

        {/* CUSTOMER INFO */}
        <div className="mt-10 px-4pb-4 lg:mt-0">
          <p className="text-2xl font-semibold">Customer Information</p>
          <p className="text-gray-500 dark:text-white">
            Please provide your contact details.
          </p>

          <div className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3 dark:bg-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="mt-[10] flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border rounded-lg p-3 dark:bg-gray-600"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border rounded-lg p-3 dark:bg-gray-600"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg p-3 dark:bg-gray-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              onClick={handleOrder}
              disabled={loading}
              className="mt-6 w-full bg-gray-800 dark:bg-blue-500 text-white rounded-lg py-3 hover:bg-gray-700 dark:hover:bg-blue-600"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;

"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>(""); // Keep OTP as string for user input
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const handleSendOtp = async (): Promise<void> => {
    if (!phoneNumber) {
      console.error("Phone number is required to send OTP.");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/login`,
        {
          email,
          password,
          phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("OTP sent successfully:", res.data);
      setIsOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifyOtp = async (): Promise<void> => {
    if (!otp) {
      console.error("OTP is required for verification.");
      return;
    }

    // Convert OTP to a number before sending to the backend
    const otpNumber = Number(otp);
    if (isNaN(otpNumber)) {
      console.error("Invalid OTP. OTP must be a number.");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/otp`,
        { email, otp: otpNumber }, // Send OTP as a number
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("OTP verified successfully:", res.data);
      if (res.data.token.token) {
        localStorage.setItem("authToken", res.data.token.token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Login
        </h2>

        <motion.div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300 shadow-sm"
          />
        </motion.div>
        <motion.div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300 shadow-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-sm text-purple-500 hover:underline focus:outline-none"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </motion.div>
        <motion.div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1234567890"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300 shadow-sm"
          />
        </motion.div>

        {isOtpSent && (
          <motion.div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              OTP
            </label>
            <input
              id="otp"
              type="text" // Make OTP input type text to allow for easier string manipulation
              value={otp}
              onChange={(e) => setOtp(e.target.value)} // Keep OTP as string
              placeholder="Enter OTP"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300 shadow-sm"
            />
          </motion.div>
        )}

        {!isOtpSent ? (
          <motion.button
            className="w-full px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
            onClick={handleSendOtp}
          >
            Send OTP
          </motion.button>
        ) : (
          <motion.button
            className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}

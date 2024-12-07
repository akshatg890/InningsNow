import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import cricket1 from "../../../assets/cricket1.jpg";

function Login({ handleClick }) {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${cricket1})`,
            }}
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-[#101010] bg-opacity-50"></div>

            {/* Login Card */}
            <div className="relative z-10 bg-[#18181b] p-8 rounded-lg shadow-xl max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center text-[#FDBA74] mb-6">
                    Login to Innings
                </h2>
                <form className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-[#D1D5DB]">
                            Email
                        </label>
                        <div className="flex items-center border rounded-lg px-3 py-2 border-[#D1D5DB]">
                            <FaEnvelope className="text-[#D1D5DB] mr-2" />
                            <input
                                type="email"
                                className="flex-grow focus:outline-none text-[#D1D5DB] placeholder-[#D1D5DB] bg-transparent"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-[#D1D5DB]">
                            Password
                        </label>
                        <div className="flex items-center border rounded-lg px-3 py-2 border-[#D1D5DB]">
                            <FaLock className="text-[#D1D5DB] mr-2" />
                            <input
                                type="password"
                                className="flex-grow focus:outline-none text-[#D1D5DB] placeholder-[#D1D5DB] bg-transparent"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#FDBA74] text-[#101010] py-2 rounded-lg hover:bg-[#F97316] transition"
                    >
                        Login
                    </button>
                </form>
                <div className="text-sm text-center text-[#D1D5DB] mt-4">
                    Don't have an account?{" "}
                    <div
                        className="text-[#FDBA74] font-bold hover:underline cursor-pointer text-sm"
                        onClick={handleClick}
                    >
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

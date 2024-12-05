import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import cricket1 from "../../../assets/cricket1.jpg";

function Login({handleClick}) {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${cricket1})`,
            }}
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Login Card */}
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login to Innings
                </h2>
                <form className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div className="flex items-center border rounded-lg px-3 py-2">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                className="flex-grow focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="flex items-center border rounded-lg px-3 py-2">
                            <FaLock className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                className="flex-grow focus:outline-none"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <div className="text-green-600 font-bold hover:underline cursor-pointer text-sm" onClick={handleClick}>
                        Sign Up
                    </div>
                </p>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import cricket1 from "../../assets/cricket1.jpg";

function ContactUs() {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000); // Hide the popup after 3 seconds
    };

    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${cricket1})`,
            }}
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-[#101010] bg-opacity-50"></div>

            {/* Contact Us Card */}
            <div className="relative z-10 bg-[#18181b] p-8 rounded-lg shadow-xl max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center text-[#FDBA74] mb-6">
                    Contact Us
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-[#D1D5DB]">
                            Name
                        </label>
                        <div className="flex items-center border rounded-lg px-3 py-2 border-[#D1D5DB] bg-transparent">
                            <FaUser className="text-[#D1D5DB] mr-2" />
                            <input
                                type="text"
                                className="flex-grow focus:outline-none text-[#D1D5DB] placeholder-[#D1D5DB] bg-transparent"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                    </div>
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-[#D1D5DB]">
                            Email
                        </label>
                        <div className="flex items-center border rounded-lg px-3 py-2 border-[#D1D5DB] bg-transparent">
                            <FaEnvelope className="text-[#D1D5DB] mr-2" />
                            <input
                                type="email"
                                className="flex-grow focus:outline-none text-[#D1D5DB] placeholder-[#D1D5DB] bg-transparent"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>
                    {/* Query Field */}
                    <div>
                        <label className="block text-sm font-medium text-[#D1D5DB]">
                            Query
                        </label>
                        <div className="flex items-start border rounded-lg px-3 py-2 border-[#D1D5DB] bg-transparent">
                            <FaCommentDots className="text-[#D1D5DB] mt-1 mr-2" />
                            <textarea
                                className="flex-grow focus:outline-none text-[#D1D5DB] placeholder-[#D1D5DB] bg-transparent"
                                placeholder="Enter your query"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#FDBA74] text-[#101010] py-2 rounded-lg hover:bg-[#F97316] transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Popup Message */}
            {showPopup && (
                <div className="absolute bottom-10 bg-[#18181b] text-[#D1D5DB] p-4 rounded-lg shadow-lg text-center max-w-sm mx-auto">
                    <p>We will contact you soon. Thank you!</p>
                </div>
            )}
        </div>
    );
}

export default ContactUs;

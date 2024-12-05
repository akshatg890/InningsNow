import React, { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    // Disable scrolling on the body
    document.body.style.overflow = "hidden";

    // Cleanup function to restore scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/videos/innin.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-transparent backdrop-md text-white py-4 shadow-md fixed top-0 w-full z-20">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <img
                src="/images/innins.jpg"
                alt="Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"
              />
              {/* Text */}
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">InningsNow</h1>
            </div>
            <nav className="mt-2 md:mt-0">
              <ul className="flex flex-wrap justify-center space-x-4 text-sm sm:text-base lg:text-lg">
                {/* Uncomment for Navigation Links */}
                {/*<li><a href="#features" className="hover:underline">Features</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>*/}
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-t from-transparent to-black/60 text-white py-20 px-6 sm:px-8 lg:px-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 my-40">
              Catch Every Ball, Live!
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-8">
              Stay updated with live cricket scores, ball-by-ball updates, and match insights.
            </p>
            <button className="relative px-8 py-3 sm:px-10 sm:py-4 rounded-md bg-green-600 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
              Let's Catch
              <div className="absolute inset-0 bg-green-450 opacity-50 rounded-md -rotate-2"></div>
              <div className="absolute inset-1 bg-white opacity-25 rounded-md"></div>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default LandingPage;

import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <p className="text-lg text-center">
          We are a news website that brings you the latest stories from the
          world.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

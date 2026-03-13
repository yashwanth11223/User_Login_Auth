import React from "react";

export default function Page() {
  return (
    <div className="min-h-full  bg-gradient-to-r  from-blue-100 via-purple-100 to-pink-100 pt-20 px-6">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Our Store
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-lg leading-relaxed text-center mb-10">
          Welcome to our E-Commerce platform. Our goal is to provide a simple,
          fast, and secure way for customers to discover and purchase products
          online. We focus on delivering a smooth shopping experience with
          modern design, reliable performance, and user-friendly navigation.
        </p>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make online shopping easy and accessible for
            everyone. We aim to offer a wide range of quality products with a
            seamless browsing and purchasing experience. By combining modern
            technology with thoughtful design, we strive to build a reliable
            platform customers can trust.
          </p>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-600 list-disc pl-6">
            <li>Browse a variety of products with detailed information</li>
            <li>Add items to cart and manage quantities easily</li>
            <li>Secure authentication using modern login systems</li>
            <li>Responsive design for desktop and mobile devices</li>
            <li>Fast loading pages with optimized performance</li>
            <li>Clean and modern user interface</li>
          </ul>
        </div>

        {/* Technology */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Technology Used
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This project is built using modern web technologies including
            <span className="font-semibold"> Next.js </span> for the frontend,
            <span className="font-semibold"> Tailwind CSS </span> for styling,
            <span className="font-semibold"> NextAuth </span> for secure user
            authentication, and <span className="font-semibold"> MongoDB </span>
            for database management. These technologies allow us to create a
            scalable, fast, and secure online store.
          </p>
        </div>

      </div>
    </div>
  );
}
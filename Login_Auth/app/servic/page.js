import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 pt-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-10">

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About Employee Management System
          </h1>

          <p className="text-gray-600 leading-relaxed">
            The Employee Management System is designed to help organizations
            efficiently manage their workforce. It provides a secure and
            user-friendly dashboard where administrators can add, update,
            and manage employee information in one centralized platform.
          </p>

        </div>


        {/* Mission Section */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to simplify employee management by providing a
            powerful yet easy-to-use system that allows companies to keep
            track of employee data, departments, and organizational structure.
            With secure authentication and user-specific dashboards, the
            system ensures privacy and efficient data handling.
          </p>

        </div>


        {/* Technology Section */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-semibold mb-6">
            Technologies Used
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold">Next.js</h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold">Tailwind CSS</h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold">MongoDB</h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold">NextAuth</h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default page

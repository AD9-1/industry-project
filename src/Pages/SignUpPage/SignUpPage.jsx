import React from "react";

import { Link } from 'react-router-dom';

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full ">
          <div className="flex justify-center mb-8">
            <img
              src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png"
              alt="WhatsApp Logo"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create a New Account
          </h2>
          <p>Fetching Your Info From Name Card.........</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg">+1</span>
              <input
                type="tel"
                placeholder="9876543210"
                className="input-field flex-1"
               
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="input-field w-full"
         
            />
            <div className="flex items-center space-x-2">
              <input
                type="password"
                placeholder="Password"
                className="input-field flex-1"
              />
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12H9m4 8H9m13-7a2 2 0 00-2-2H7a2 2 0 00-2 2v3a2 2 0 002 2h10a2 2 0 002-2v-3z"
                />
              </svg>
            </div>
          </div>
          <button className="mt-12 w-full bg-green-500 text-white py-6 rounded-md font-large hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Sign Up
          </button>
          <p className="text-center my-4">or signup with</p>
          <div className="flex justify-center space-x-4 mb-4">
            <img
              src="data:image/png;base64,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"
              alt="google"
              className="h-16 w-16"
            />

            <img
              src="data:image/png;base64,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"
              alt="fb"
              className="h-16 w-16"
            />

            <img
              src="data:image/jpeg;base64,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"
              alt="Google"
              className="h-16 w-16"
            />
          </div>
          <div className="text-center">
   
              Already have an account? <Link to="/">Log in here</Link>
      
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;

import React, { useState } from 'react';
import { Sparkles, Eye } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/auth/adminlogin', values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SIDE - Blue background with image and intro text */}
      <div className="lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-500 text-white p-10 relative">
        <div className="max-w-md text-center lg:text-left">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9d73c0b0a0be1b5c6f5f1d8d5d8b5b6a"
            alt="Tech workspace"
            className="rounded-2xl shadow-2xl mb-6"
          />
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Streamlined Programing platform for Modern Javascript
          </h1>
          <p className="text-blue-100 text-sm">
Work with everyoperation in express from server creation to sending and reciving of data through apis.          </p>
        </div>
      </div>

      {/* RIGHT SIDE - White form area */}
      <div className="lg:w-1/2 flex items-center justify-center bg-white p-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Login to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                  placeholder="••••••••"
                  onChange={(e) => setValues({ ...values, password: e.target.value })}
                />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600 cursor-pointer">
                <input type="checkbox" className="mr-2 rounded border-gray-300" /> Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Sign In
            </button>

            <div className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?{' '}
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

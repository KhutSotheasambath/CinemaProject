import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import cinemalogo from '../image/cinemalogo.png';
import loginbanner from '../image/loginbanner.png';

export default function Logins() {
  const [loginMethod, setLoginMethod] = useState('username');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = () => {
    console.log('Login submitted:', formData);
    alert('Login submitted! Check console for details.');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && formData.username && formData.password) {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
      {/* Header */}
      <div className="flex flex-col px-4 md:px-20 pt-7 pb-5 bg-white/10 backdrop-blur-md border-b border-white/30">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              src={cinemalogo}
              alt="Cinema Logo"
              className="w-[100px] md:w-[120px] h-auto"
            />
          </Link>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-6xl bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-teal-500/20">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 relative bg-slate-900/50">
              <img 
                src={loginbanner} 
                alt="Login Banner" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800/40"></div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="mb-6">
                <div className="flex items-center gap-4 text-sm mb-2">
                  <Link to="/" className="text-teal-400 hover:text-teal-300 transition-colors">
                    Home
                  </Link>
                  <span className="text-slate-500">/</span>
                  <span className="text-white font-medium">Log In</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-4xl font-bold text-white">Log In</h1>
                  <span className="text-slate-500">|</span>
                  <Link to="/signup" className="text-2xl text-slate-400 hover:text-white transition-colors">
                    Sign Up
                  </Link>
                </div>
                <div className="w-16 h-1 bg-red-500 rounded-full"></div>
              </div>

              <p className="text-slate-300 mb-6">You can use your phone number or username</p>

              {/* Toggle Buttons */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setLoginMethod('username')}
                  className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                    loginMethod === 'username'
                      ? 'bg-red-600 text-white shadow-lg shadow-red-500/50'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Username
                </button>
                <button
                  onClick={() => setLoginMethod('phone')}
                  className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                    loginMethod === 'phone'
                      ? 'bg-red-600 text-white shadow-lg shadow-red-500/50'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Phone Number
                </button>
              </div>

              <div className="space-y-6">
                {/* Username/Phone Input */}
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">
                    {loginMethod === 'username' ? 'Username' : 'Phone Number'}
                  </label>
                  <div className="relative">
                    <AiOutlineUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder={loginMethod === 'username' ? 'Enter your username' : 'Enter your phone number'}
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">Password</label>
                  <div className="relative">
                    <AiOutlineLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-12 pr-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible className="text-xl" />
                      ) : (
                        <AiOutlineEye className="text-xl" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-slate-600 hover:bg-slate-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!formData.username || !formData.password}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
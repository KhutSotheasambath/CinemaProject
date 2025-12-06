import React, { useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import cinemalogo from '../image/cinemalogo.png';
import loginbanner from '../image/loginbanner.png';

function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    console.log('Phone number submitted:', phoneNumber);
    // Add your signup logic here
    alert('Sign up submitted! Phone: ' + phoneNumber);
  };

    const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhoneNumber(value === '' ? 0 : Number(value));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && phoneNumber) {
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

      {/* Sign Up Form */}
      <div className="flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-6xl bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-teal-500/20">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Banner Image */}
            <div className="lg:w-1/2 relative bg-slate-900/50">
              <img 
                src={loginbanner} 
                alt="Sign Up Banner" 
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
                  <span className="text-white font-medium">Sign Up</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-4xl font-bold text-white">Sign Up</h1>
                  <span className="text-slate-500">|</span>
                  <Link to="/login" className="text-2xl text-slate-400 hover:text-white transition-colors">
                    Log In
                  </Link>
                </div>
                <div className="w-16 h-1 bg-red-500 rounded-full"></div>
              </div>

              <p className="text-slate-300 mb-8">Create your account with your phone number</p>

              <div className="space-y-6">
                {/* Phone Number Input */}
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <AiOutlinePhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <p className="text-slate-400 text-sm mt-2">
                    We'll send you a verification code
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-red-500/30 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!phoneNumber}
                >
                  Continue
                </button>

                {/* Terms and Privacy */}
                <p className="text-slate-400 text-sm text-center">
                  By continuing, you agree to our{' '}
                  <Link to="/terms" className="text-teal-400 hover:text-teal-300 transition-colors">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-teal-400 hover:text-teal-300 transition-colors">
                    Privacy Policy
                  </Link>
                </p>

                {/* Already have account */}
                <div className="text-center pt-4">
                  <p className="text-slate-300">
                    Already have an account?{' '}
                    <Link to="/login" className="text-teal-400 hover:text-teal-300 transition-colors font-semibold">
                      Log In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
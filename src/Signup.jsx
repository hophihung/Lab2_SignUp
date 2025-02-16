import React from 'react';
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
        Get more opportunities
      </h1>
{/*       
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div> */}

        <Button className="w-full max-w-sm flex items-center justify-center gap-2 border border-gray-300 rounded-md py-6 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 transition" 
        >
        <span className="text-blue-600 text-lg">+</span> Sign Up with Google
        </Button>


      {/* Google Sign Up Button */}
      {/* <button className="w-full max-w-sm flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
        <span className="text-blue-600 text-lg">+</span> Sign Up with Google
      </button> */}
      

      {/* Divider */}
      <div className="flex items-center my-6 w-full max-w-sm">
        <hr className="flex-1 border-gray-300" />
        <span className="mx-4 text-sm text-gray-500">Or sign up with email</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      {/* Signup Form */}
      <form className="flex flex-col w-full max-w-sm space-y-4">
        <label className="text-sm font-medium text-gray-700">Full name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          required
        />

        <label className="text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          className="p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          required
        />

        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          required
        />

      

        <Button className="w-full bg-indigo-600 text-white py-3 rounded-md text-sm font-medium hover:bg-indigo-700 transition" 
        variant="outline">Continue</Button>

      </form>

      {/* Login Link */}
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <a href="#" className="text-indigo-600 font-medium hover:underline">
          Login
        </a>
      </p>

      {/* Terms and Privacy */}
      <p className="mt-2 text-xs text-gray-500 text-center max-w-sm">
        By clicking 'Continue', you acknowledge that you have read and accept the{' '}
        <a href="#" className="underline text-indigo-600">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="underline text-indigo-600">
          Privacy Policy
        </a>.
      </p>
    </div>
  );
};

export default Signup;

'use client'

import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import OtpInput from "@/components/Signup/OtpInput";
import { useState } from "react";
import Loader from "@/components/partials/Loader";
export default function Signup() {
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState<Response | null>(null);
  const [error,setError] = useState({name:"",email:"",password:""});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; password: string }>();

  const onSubmit =async (data:{name:string,email:string,password:string}) => {
    setLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_DEV}/auth/signup`, {
      method: "POST", 
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json",},
    });
    if (response.ok) {
      setData(response);
    }
    else {
      console.log("Error signing up user");
    }
  };

  return (
    <>
    {data && <OtpInput {...{email:"sss"}} />}
    {!loading && <Loader />}
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            {...register("name", { required: "Full Name is required" })}
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        
        <div className="text-center my-4 text-gray-500">Or sign up with</div>
        
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center border rounded-lg p-3 hover:bg-gray-100 transition">
            <FcGoogle size={24} />
          </button>
          <button className="flex-1 flex items-center justify-center border rounded-lg p-3 text-blue-600 hover:bg-gray-100 transition">
            <FaFacebook size={24} />
          </button>
          <button className="flex-1 flex items-center justify-center border rounded-lg p-3 text-black hover:bg-gray-100 transition">
            <FaXTwitter size={24} />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

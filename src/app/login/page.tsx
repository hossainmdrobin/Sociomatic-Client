'use client'

import { FcGoogle } from "react-icons/fc";
import { toast, Toaster } from "react-hot-toast";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Loader from "@/components/partials/Loader";
import { redirect } from "next/navigation";
import Cookies from 'js-cookie';
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  password: string;
};
function setTimeout(callback: () => void, delay: number): NodeJS.Timeout {
  return global.setTimeout(callback, delay);
}

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_DEV}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);

    response.json().then((res) => {
      console.log(res)
      if (res.success) {
        console.log("Login response:", res);
        Cookies.set("token", res.data.token, { expires: 7 });
        setTimeout(() => {
          redirect("/app/posts");
        }, 500);
      }

    });
    // } else {
    //   setError(true);
    // }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              Login
            </button>
          </form>

          <div className="text-center my-4 text-gray-500">Or login with</div>

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
          <div className="text-gray-500 mt-3">Don't have an account ? <span className="underline text-blue-400"><Link href={'/signup'}>Create one</Link></span></div>
        </div>
      </div>
      <Toaster position="bottom-left" />
    </>
  );
}


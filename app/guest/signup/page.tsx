"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User } from "lucide-react";
import { Spinner } from "../../../components/lib/guest/Spinner";
import { useSignup } from "../../../hooks/guest/useSignup";
import { signupValidation } from "../../../lib/Formik/guest/signupValidation";

const LoginPage = () => {

    const { mutate } = useSignup();
    const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);
    const router = useRouter();


    const submitForm = (
        name: string,
        email: string,
        password: string,
        mobile: number,
        age: number
    ): void => {
        setLoadingSpinner(true);
        mutate(
            {
                name,
                email,
                password,
                mobile,
                age,
            },
            {
                onSuccess: (data: any) => {
                    console.log("Success", data);
                    setLoadingSpinner(false);
                    router.push("/guest/login");
                },
                onError(error: any) {
                    const err = error as { response: { data: { message: string } } };
                    setLoadingSpinner(false);
                    alert(err.response.data.message);
                },
            }
        );
    };


    const { values, touched, errors, handleChange, handleSubmit } =
        signupValidation(submitForm);

        
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 bg-white">
            {loadingSpinner && <Spinner />}
            <div className="w-full max-w-2xl mx-auto shadow-lg border-t">
                <div
                    className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 transform transition-all duration-300 hover:scale-[1.02]"
                    style={{
                        animation: "slideUp 0.6s ease-out",
                    }}
                >
                    <div className="text-center mb-8">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                            Welcome Back
                        </h1>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Sign in to your account to continue
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex justify-between">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        className="block w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                                        placeholder="Enter your email "
                                    />
                                </div>
                                {touched.email && errors.email && (
                                    <div className="text-red-500 text-center">{errors.email}</div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="name"
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        className="block w-full pl-20 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                {touched.name && errors.name && (
                                    <div className="text-red-500 text-center">{errors.name}</div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="space-y-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        className="block w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                {touched.password && errors.password && (
                                    <div className="text-red-500 text-center">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Mobile
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="number"
                                        id="mobile"
                                        name="mobile"
                                        value={values.mobile}
                                        onChange={handleChange}
                                        className="block w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                                        placeholder="Enter your mobile"
                                    />
                                </div>
                                {touched.mobile && errors.mobile && (
                                    <div className="text-red-500 text-center">
                                        {errors.mobile}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="mobile"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Age
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={values.age}
                                    onChange={handleChange}
                                    className="block w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                                    placeholder="Enter your age"
                                />
                            </div>
                            {touched.age && errors.age && (
                                <div className="text-red-500 text-center">{errors.age}</div>
                            )}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500 font-medium">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?
                            <Link
                                href="/guest/login"
                                className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default LoginPage;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useLogin } from "../../../api/organizer/hook/useLogin";
import { signInOrganizer } from "../../../redux/slices/oranizerSlice";
import { loginValidation } from "../../../lib/Formik/organizer/loginValidation";
import { Spinner } from "../../../components/lib/Spinner";

const LoginPage = () => {

  const { mutate } = useLogin();
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const submitForm = (email: string, password: string): void => {
    setLoadingSpinner(true)
    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          //  console.log("Success", data);
          localStorage.setItem("accessToken", data.accessToken);
          const { organizer } = data;
          dispatch(signInOrganizer(organizer));
          setLoadingSpinner(false)

          router.push("/organizer/home");
        },
        onError(error: any) {
          const err = error as { response: { data: { message: string } } };
          setLoadingSpinner(false)
          alert(err.response.data.message);
        },
      }
    );
  };

  const { values, touched, errors, handleChange, handleSubmit } =
    loginValidation(submitForm);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 bg-white">
       {
                loadingSpinner && <Spinner />
            }
      <div className="w-full max-w-md mx-auto shadow-lg border-t">
        <div
          className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 transform transition-all duration-300 hover:scale-[1.02]"
          style={{
            animation: "slideUp 0.6s ease-out",
          }}
        >
          {/* Header - Perfectly Centered */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Sign in to your account to continue
            </p>
          </div>

          {/* Login Form - Perfect Spacing */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
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
                  className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                  placeholder="Enter your email"
                />
              </div>
              {touched.email && errors.email && (
                <div className="text-red-500 text-center">{errors.email}</div>
              )}
            </div>

            {/* Password Field */}
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  value={values.password}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                  )}
                </button>
              </div>
              {touched.password && errors.password && (
                <div className="text-red-500 text-center">
                  {errors.password}
                </div>
              )}
            </div>

            {/* Remember Me & Forgot Password - Perfect Alignment */}
            {/* <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors"
                />
                <label htmlFor="rememberMe" className="ml-3 block text-sm font-medium text-gray-700">
                  Remember me
                </label>
              </div>
              <div>
                <a 
                  href="#" 
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Forgot password?
                </a>
              </div>
            </div> */}

            {/* Submit Button - Perfect Centering */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Divider - Perfect Spacing */}
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

          {/* Sign Up Link - Perfect Center */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Sign up here
              </a>
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

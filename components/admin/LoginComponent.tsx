"use client"; 
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useDispatch } from "react-redux"; 
import { useRouter } from "next/navigation";
import { Spinner } from "../lib/admin/Spinner"; 
import { signInAdmin } from "../../redux/slices/adminSlice";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"; 
import { useLoginValidation } from "../../lib/Formik/admin/loginValidation";
import { useLogin } from "../../hooks/admin/useLogin";

const LoginComponent = () => {

  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const { mutate } = useLogin();
  const router = useRouter();
  const dispatch = useDispatch();


  const submitForm = (userName: string, password: string): void => {
    setLoadingSpinner(true);
    mutate(
      { userName, password },
      {
        onSuccess: (data) => {
          //  console.log("success", data);
          localStorage.setItem("accessToken", data.accessToken);
          const { admin } = data;
          dispatch(signInAdmin(admin));
          setLoadingSpinner(false);

          router.push("/admin/dashboard");
        },
        onError(error: unknown) {
          const err = error as { response: { data: { message: string } } };
          setLoadingSpinner(false);
          toast.error(err.response.data.message);
        },
      }
    );
  };


  const { values, touched, errors, handleChange, handleSubmit } =
    useLoginValidation(submitForm);


  return (
    <div className="h-screen w-full flex overflow-y-hidden items-center justify-center bg-gray-100">
 
      {loadingSpinner && <Spinner />}
      <div className="w-full max-w-md mx-auto shadow-lg border-t">
        <div
          className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-12 border border-white/20 transform transition-all duration-300 hover:scale-[1.02]"
          
        >
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
              Welcome Admin
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="userName"
                className="block text-sm font-semibold text-gray-700"
              >
                User Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                  placeholder="Enter your user name"
                />
              </div>
              {touched.userName && errors.userName && (
                <div className="text-red-500 text-center">{errors.userName}</div>
              )}
            </div>

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
                  className="block w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
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

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                Login
              </button>
            </div>
          </form>  
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

export default LoginComponent;

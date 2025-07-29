"use client";
import React, { useState } from "react";
import { User, Phone, Hash, Camera, Loader2, Save } from "lucide-react";
import { useDispatch } from "react-redux";
import { Spinner } from "../../../../components/lib/guest/Spinner";
import { useProfileEdit } from "../../../../hooks/guest/useProfileEdit";
import { signInGuest } from "../../../../redux/slices/guestSlice";
import { useRouter } from "next/navigation";
import { profileEditValidation } from "../../../../lib/Formik/guest/profileEditValidation";
import { ImageUpload } from "../../../../helper/methods/imageUpload";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const { mutate } = useProfileEdit();

  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);
  const [imageloading, setImageloading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();


  const submitForm = (
    name: string,
    profilePicture: string,
    mobile: number,
    age: number
  ): void => {
    setLoadingSpinner(true);
    mutate(
      { name, profilePicture, mobile, age },
      {
        onSuccess: (data) => {
          //  console.log("Success", data);
          const { guest } = data;
          dispatch(signInGuest(guest));
          setLoadingSpinner(false);

          router.push("/guest/profile");
        },
        onError(error: any) {
          const err = error as { response: { data: { message: string } } };
          setLoadingSpinner(false);
          alert(err.response.data.message);
        },
      }
    );
  };

  
  const { values, touched, errors, handleChange, setFieldValue, handleSubmit } =
    profileEditValidation(submitForm);

  const uploadedImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageloading(true);
    const file: any = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await ImageUpload(file);
      setImageloading(false);
      setFieldValue("profilePicture", url);
    } catch (err) {
      setImageloading(false);
      console.error("Upload failed:", err);
      toast.error(`Upload failed: ${err}`);
    }
  };
  

  return (
    <div className="h-screen w-full flex bg-white items-center justify-center p-4 lg:p-8">
      <Toaster />
      {loadingSpinner && <Spinner />}
      <div className="w-full max-w-5xl mx-auto">
        <div
          className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
          style={{
            animation: "slideUp 0.6s ease-out",
          }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                  Edit Profile
                </h1>
                <p className="text-gray-600 text-base leading-relaxed">
                  Update your personal information
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    {imageloading ? (
                      <img
                        src={
                          "https://media.istockphoto.com/id/1467339432/video/retro-buffering-circular-loading-bar-rotating-on-black-background.jpg?s=640x640&k=20&c=jOF3pEBv3EaXlgPHoa8CsOwOIg9gBNEPrXztQ_PXidQ="
                        }
                        alt="profile"
                        className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    ) : (
                      <img
                        src={values.profilePicture || "/default-avatar.png"}
                        alt="profile"
                        className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    )}

                    <label
                      htmlFor="profilePicture"
                      className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-200"
                    >
                      <Camera className="w-5 h-5 text-white" />
                    </label>

                    <input
                      type="file"
                      id="profilePicture"
                      name="profilePicture"
                      onChange={uploadedImage}
                      className="hidden"
                      accept="image/*"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {touched.name && typeof errors.name === "string" && (
                    <div className="text-red-500 text-sm">{errors.name}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="mobile"
                      name="mobile"
                      value={values.mobile}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  {touched.mobile && typeof errors.mobile === "number" && (
                    <div className="text-red-500 text-sm">{errors.mobile}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="number"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Age
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Hash className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={values.age}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                      placeholder="Enter your Age"
                    />
                  </div>
                  {touched.age && typeof errors.age === "number" && (
                    <div className="text-red-500 text-sm">{errors.age}</div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center py-3.5 px-6 border border-gray-300 rounded-xl shadow-sm text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center py-3.5 px-6 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Save className="w-5 h-5 mr-3" />
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:w-2/5 bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Your Profile</h3>
                <p className="text-orange-100 leading-relaxed mb-6">
                  Keep your information up to date to ensure the best experience
                  with our services.
                </p>

                <div className="space-y-3 text-left">
                  <div className="flex items-center text-orange-100">
                    <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                    <span className="text-sm">Secure data encryption</span>
                  </div>
                  <div className="flex items-center text-orange-100">
                    <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                    <span className="text-sm">Privacy protection</span>
                  </div>
                  <div className="flex items-center text-orange-100">
                    <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                    <span className="text-sm">Easy profile management</span>
                  </div>
                </div>

                <div className="mt-8 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
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

export default page;

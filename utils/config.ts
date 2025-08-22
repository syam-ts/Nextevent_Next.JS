export const getConfig = () => ({
  frontend_url: process.env.NEXT_PUBLIC_FRONTEND_URL,
  backend_url: 'http://localhost:3001/api',
  // backend_url: "https://nextevent-backend-9n7j.onrender.com/api",
  cloudinay_url: process.env.NEXT_PUBLIC_CLOUDINARY_URL,
  //  cloudinay_url: "api.cloudinary.com/v1_1/dusbc29s2/image/upload",
  // strpe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISABLE_KEY,
  strpe_public_key:
    "pk_test_51QbMd0IRhIB5V98AdCfvCDG6QBB94NnWkupiVlWIwBhqHPCUasygxhOHkM8bNquqIow7zwp7O7koSV2zEYKBsWuh00fQ0mm0sj",
});

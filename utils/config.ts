export const getConfig = () => ({
  frontend_url: process.env.NEXT_PUBLIC_FRONTEND_URL,
  backend_url: 'http://localhost:3001/api',
  // backend_url: 'https://nextevent-backend-9n7j.onrender.com/api',
  cloudinay_url: process.env.NEXT_PUBLIC_CLOUDINARY_URL,
  strpe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISABLE_KEY
});

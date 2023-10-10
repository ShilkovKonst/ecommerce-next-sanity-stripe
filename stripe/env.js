export const secretKey = process.env.STRIPE_SECRET_KEY;
export const publicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
export const baseUrl = process.env.NODE_ENV === 'production' ? process.env.BASE_URL_PROD : process.env.BASE_URL_LOCAL
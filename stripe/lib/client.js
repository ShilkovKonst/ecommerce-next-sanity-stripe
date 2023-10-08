import Stripe from "stripe";
import { publicKey, secretKey } from "../env";
import { loadStripe } from "@stripe/stripe-js";

export const stripeClient = new Stripe(secretKey);

export const stripePromise = loadStripe(publicKey);

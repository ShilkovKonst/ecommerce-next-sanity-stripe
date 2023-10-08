import { NextResponse } from "next/server";
import { stripeClient } from "../../../../stripe/lib/client";

export async function POST(req) {
  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1NyyUmApfc7RZnhBDEFaTZJ0" },
        { shipping_rate: "shr_1NyyeeApfc7RZnhBUc1uKMIM" },
      ],
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 99,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `/success`,
      cancel_url: `/`,
      automatic_tax: { enabled: true },
    };
    // Create Checkout Sessions from body params.
    const session = await stripeClient.checkout.sessions.create(params);
    console.log(session)
    return NextResponse(session);
  } catch (error) {
    return NextResponse.json({ statusCode: 500, message: error.message });
  }
}

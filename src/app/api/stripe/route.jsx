import { NextResponse } from "next/server";
import { stripeClient } from "../../../../stripe/lib/client";
import { baseUrl } from "../../../../stripe/env";

export async function POST(req) {
  try {
    const body = await req.json();
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card", "paypal"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1NyyUmApfc7RZnhBDEFaTZJ0" },
        { shipping_rate: "shr_1NyyeeApfc7RZnhBUc1uKMIM" },
      ],
      line_items: body,
      success_url: `${baseUrl}success`,
      cancel_url: `${baseUrl}`,
      automatic_tax: { enabled: true },
    };
    // Create Checkout Sessions from body params.
    const session = await stripeClient.checkout.sessions.create(params);
    return new NextResponse(JSON.stringify({id: session.id}));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ statusCode: 500, message: error.message })
    );
  }
}

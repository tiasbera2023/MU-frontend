import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

type Data = {
  redirect_uri: string;
};

import { CURRENCY } from "@/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      isVat,
      amount,
      productName,
      vestigingsnummer,
      kvkNummer,
      email,
      withLogo,
    } = JSON.parse(req.body);
    const cancel_url = isVat
      ? "/vat/order/payment-failed"
      : "/order/payment-failed";
    const success_url = isVat
      ? "/vat-search?payment_success=true"
      : "/search?payment_success=true";
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price_data: {
              currency: CURRENCY,
              product_data: {
                name: productName,
              },
              unit_amount: Math.round(amount * 100),
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        payment_method_types: ["ideal"],
        metadata: {
          vestigingsnummer: vestigingsnummer,
          kvkNummer: kvkNummer,
          email: email,
          withLogo: withLogo,
        },
        customer_email: email,
        success_url: `${req.headers.origin}${success_url}`,
        cancel_url: `${req.headers.origin}${cancel_url}`,
      });
      // res.redirect(307, session.url);
      //res.writeHead(307, { Location: session.url }).end();
      res.status(200).json({ redirect_uri: session.url });
    } catch (err: any) {
      console.log("err", err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

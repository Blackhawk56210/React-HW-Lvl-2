// This is your test secret API key.
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import Stripe from "stripe";
import cors from "cors";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// check key for expiration
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4242;

app.get("/", (req, res) => {
  res.send("we in this bih");
});

app.post("/checkout-session", async (req, res) => {
  console.log("step 1 test")
  const {planeSize} = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items:[
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${planeSize}`,
            },
            unit_amount: req.body.amount,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:4242/success",
      cancel_url: "http://localhost:5173/inventory",
    });
    console.log("this is the session", session);
    res.json({ url: session.url });
  } catch (error) {
    console.error("error", error);
  }
});
app.listen(PORT, () => console.log(`Running onhttp://localhost:${PORT}`));

const handleStripeCheckout = async (jetName) => {
  const res = await fetch("http://localhost:4242/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jet: jetName })
  });

  const data = await res.json();
  window.location.href = data.url;
};

export default handleStripeCheckout;
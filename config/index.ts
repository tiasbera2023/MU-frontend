export const CURRENCY = "eur";
// Set your amount limits: Use float for decimal currencies and
// Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
export const MIN_AMOUNT = 10.0;
export const MAX_AMOUNT = 5000.0;
export const AMOUNT_STEP = 5.0;

export const API_ROOT_URL = "https://my-extracts-backend.onrender.com";
// export const API_ROOT_URL = "https://my-extracts-backend.fly.dev/";

export const API = {
  addContact: "/contact/add",
  sendPdf: "/pdf/create",
};

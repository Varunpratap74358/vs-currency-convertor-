import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_PkpE7kp4fy9Y4UHqvOLzoY66FGqQezKCFCCwpB4H"
);

// async function convertCurrency(fromCurrency, toCurrency, units) {
//   const res = await freecurrencyapi.latest({
//     base_currency: fromCurrency,
//     currencies: toCurrency,
//   });
//   const multiplier = res.data[toCurrency];
//   console.log(multiplier);
// }

// convertCurrency("INR", "USD", 3);



export const convertCurrency = async(price)=>{
    const actualPrice = price*86
    return actualPrice
}
convertCurrency(2)
import axios from "axios";
// const params = {
//   headers: {
//     Authorization: " bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
//   },
// };
// export const fetchDataFromApi = async (url) => {
//   try {
//     const { data } = await axios.get("http://localhost:1337" + url, params);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
console.log(process.env.REACT_APP_STRIPE_APP_DEV_URL);
export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
  },
});

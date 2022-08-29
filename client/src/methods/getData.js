import { instance as axios } from "./axios";
export const findMyOrder = async (email) => {
  try {
    const res = await axios.get(`/findorder/${email}`);
    console.log(res.data);
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
export const getProduct = async () => {
  try {
    const res = await axios.get(`/getproduct`);
    console.log(res.data);
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

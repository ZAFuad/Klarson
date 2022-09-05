import {
  instance as axios,
  appInstance as axios2,
  bankInstance as axios3,
} from "./axios";
import Cookies from "js-cookie";
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
export const getProductInfo = async (id) => {
  try {
    const res = await axios.get(`/product/${id}`);
    if (res.status === 200) {
      return res.data;
    } else {
      console.log(false);
    }
  } catch (err) {
    console.log(err);
  }
};
export const getTransaction = async () => {
  try {
    const res = await axios3.get("/gettransaction");
    if (res.status === 200) {
      return res.data;
    } else {
      alert("Pai nai");
    }
  } catch (err) {
    console.log(err);
  }
};
export const getBalance = async () => {
  try {
    const res = await axios3.get("/getbalance");
    if (res.status === 200) {
      return res.data;
    } else {
      alert("No money");
    }
  } catch (err) {
    console.log(err);
  }
};
// export const getCategory = async () => {
//   try {
//     const res = await axios.get(`/getcategory`);
//     console.log(res.data);
//     if (res.status === 200) {
//       return res.data;
//     } else {
//       return false;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
export const getProfile = async () => {
  try {
    const user_name = JSON.parse(Cookies.get("user")).name;
    const res = await axios3.get(`/getprofiledata/${user_name}`);
    console.log(res);
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
export const getProfileAdmin = async () => {
  try {
    const user_name = JSON.parse(Cookies.get("user")).name;
    const res = await axios3.get(`/getprofiledata/${"admin"}`);
    console.log(res);
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getProfileSupplier = async () => {
  try {
    const user_name = JSON.parse(Cookies.get("user")).name;
    const res = await axios3.get(`/getprofiledata/${"supplier"}`);
    console.log(res);
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
export const getPrev = async () => {
  try {
    const user_id = JSON.parse(Cookies.get("user"))._id;
    const res = await axios.get(`/previous/${user_id}`);
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
export const getUsersAll = async () => {
  try {
    const data = await axios.get("/getdataadmin");
    if (data.status === 200) return data.data;
    else return false;
  } catch (err) {
    console.log(err);
  }
};

import { instance as axios } from "./axios";
export const registerUser = async (data) => {
  try {
    const res = await axios.post("/register", {
      data: data,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const createCard = async (data) => {
  try {
    const res = await axios.post("/createcard", {
      data: data,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = async (data) => {
  try {
    const res = await axios.post("/addProduct", {
      data: data,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (data) => {
  try {
    console.log(data);
    const res = await axios.post("/login", {
      data: data,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

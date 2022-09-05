import {
  instance as axios,
  appInstance as axios2,
  bankInstance as axios3,
} from "./axios";
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
    const res = await axios3.post("/createcard", {
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
export const postProduct = async (data) => {
  try {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("name", data.name);
    formData.append("countInStock", data.countInStock);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);
    console.log(formData);
    const res = await axios2.post("/addproduct", formData);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const postTransaction = async (data) => {
  try {
    const res = await axios3.post("/posttransaction", {
      data: data,
    });
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

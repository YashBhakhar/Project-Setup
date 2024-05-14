import Cookies from "js-cookie";
import { toast } from "react-toastify";

const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
export const expireTime = () => new Date(Date.now() + oneDay); // Token expiry time
// export const expireTime = () => new Date(Date.now() + 8 * (60 * 60 * 1000)); // Token expiry time
export const getAccessToken = () => cookieDecryption("userDetails")?.token;
export const isAuthenticated = () => !!getAccessToken();

export const setCookie = (key, data) => {
  try {
    if (key && data) {
      Cookies.set(key, JSON.stringify(data), { path: "/", expires: expireTime() });
    }
  } catch (e) {}
};
export const getCookie = (key) => {
  try {
      return JSON.parse(Cookies.get(key))
  } catch (e) {}
};

export function Success(msg) {
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
  });
}

export function Error(msg) {
  toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
  });
}

export const removeCookie = (key) => {
  Cookies.remove(key, { path: "/", expires: expireTime() });
};

export const extractKeys = (data) => {
  const keys = [];

  const traverse = (item) => {
    if (item.key) {
      keys.push(item.key);
    }

    if (item.childrens && Array.isArray(item.childrens)) {
      item.childrens.forEach(traverse);
    }
  };

  data.forEach(traverse);
  return keys;
};

export const handleLogOut = (key,navigate) => {
  Cookies.remove(key, { path: "/" });
  navigate('/')
};

export const nameProfile = (fname, lname) => {
  if (fname && lname) {
    return fname.split('')[0] + lname.split('')[0]
  } else {
    return fname.split('')[0] + fname.split('')[1]
  }
}
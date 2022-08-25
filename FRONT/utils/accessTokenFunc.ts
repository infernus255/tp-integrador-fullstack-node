export const getLocalStorageItem = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token");
  }
  return "";
};

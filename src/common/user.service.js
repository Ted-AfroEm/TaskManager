const User_Data = "current-user";

export const getUserData = () => {
  return window.localStorage.getItem(User_Data);
};

export const saveUserData = token => {
  window.localStorage.setItem(User_Data, token);
};

export const destroyUserData = () => {
  window.localStorage.removeItem(User_Data);
};

export default { getUserData, saveUserData, destroyUserData };

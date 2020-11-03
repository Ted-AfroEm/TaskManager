const ID_TOKEN_KEY = "auth-token";

export const existToken = () => {
  return !!getToken();
};
export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { existToken, getToken, saveToken, destroyToken };

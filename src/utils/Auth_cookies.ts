import Cookies from "js-cookie";

const TOKEN_KEY = "authToken"; // Key for the token in cookies

// Store token in cookies
export const setAuthToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: 7 }); // Expires in 7 days
};

// Get token from cookies
export const getAuthToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

// Remove token from cookies (Logout)
export const removeAuthToken = () => {
  Cookies.remove(TOKEN_KEY);
};
import { LOCAL_STORAGE_AUTH_TOKEN_KEY } from "@/constants";

const AUTH_TOKEN_KEY = LOCAL_STORAGE_AUTH_TOKEN_KEY;

const useAuth = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  };

  const logout = () => {
    // Remove token from local storage
    localStorage.removeItem(AUTH_TOKEN_KEY);

    // Clean up any other authentication-related data
    // For example, you might want to clear user data or query caches
  };

  return {
    isAuthenticated,
    logout,
  };
};

export default useAuth;
export type AuthContext = ReturnType<typeof useAuth>;

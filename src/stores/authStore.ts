// All authentication related state management is done here
import { create } from "zustand";

// type definition for the authentication state
type AuthStoreType = {
  isAuthenticated: boolean;
  setUserAuthentication: (bool: boolean) => void;
};
// This store is used to manage the user authentication state
export const useAuthenticationStore = create<AuthStoreType>((set) => ({
  isAuthenticated: true,
  setUserAuthentication: (bool) => set({isAuthenticated: bool})
}))


// type definition for the password reset state
type PasswordResetStoreType = {
  linkSent: boolean;
  resetSuccessful: boolean;
  setLinkSent: (bool: boolean) => void;
  setResetSuccessful: (bool: boolean) => void;
};
// This store is used to manage user password reset state
export const usePasswordResetStore = create<PasswordResetStoreType>((set) => ({
  linkSent: false,
  resetSuccessful: false,
  setLinkSent: (bool) => set({linkSent: bool}),
  setResetSuccessful: (bool) => set({resetSuccessful: bool})
}))


// type definition for the login state
type LoginStoreType = {
  passwordInCorrect: boolean;
  rememberLogin: boolean;
  setPasswordInCorrect: (bool: boolean) => void;
  setRememberLogin: (bool: boolean) => void;
};
// This store is used to manage the user login state
export const useLoginStore = create<LoginStoreType>((set) => ({
  passwordInCorrect: false,
  rememberLogin: false,
  setPasswordInCorrect: (bool) => set({passwordInCorrect: bool}),
  setRememberLogin: (bool) => set({rememberLogin: bool})
}))

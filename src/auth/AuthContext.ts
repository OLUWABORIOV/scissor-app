// UserContext.tsx
import { createContext, useContext } from 'react';
export interface Context {
  googleSignIn: () => void;
  createUser: (email: string, password: string) => void;
  signInUser: (email: string, password: string) => void;
}


export const UserContext = createContext<Context | undefined>(undefined);

export function useAuthContext() {
  const googleSignIn = useContext(UserContext)

  if (googleSignIn === undefined) {
    throw new Error(`User's credentials are undefined or'ed out`);
  }
  return googleSignIn;
}


export default UserContext;



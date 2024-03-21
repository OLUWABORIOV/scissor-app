import Index from "./Routes/index";
import UserContext from "./auth/AuthContext";
import { auth } from "./config/firebaseConfig";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const GoogleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

export const createUser: any = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInUser: any = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

function App() {
  return (
    <>
      <UserContext.Provider
        value={{ googleSignIn: GoogleSignIn, createUser, signInUser }}
      >
        <Index />
      </UserContext.Provider>
    </>
  );
}

export default App;

import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../pages/firebase";
import { Button } from "@nextui-org/react";

console.log("login");

const Login = () => {
  const [user, setUser] = useAuthState(auth);

  // Create a new GoogleAuthProvider instance
  const googleAuthProvider = new GoogleAuthProvider();

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      const userRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        // Create user document and subcollections
        await setDoc(userRef, {});
        await setDoc(doc(userRef, "foodDiary", "default"), {});
        await setDoc(doc(userRef, "userGoals", "default"), {});
        await setDoc(doc(userRef, "userWorkouts", "default"), {});

        router.push("/userDetails");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button shadow color="gradient" auto onPress={handleLogin} size="xs">
      Login
    </Button>
  );
};

export default Login;

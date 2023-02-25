import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../pages/firebase";

export const login = async () => {
  const [user, setUser] = useAuthState(auth);

  // Create a new GoogleAuthProvider instance
  const googleAuthProvider = new GoogleAuthProvider();
  console.log("login");
  const router = useRouter();

  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    const user = result.user;
    const userRef = doc(firestore, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      await setDoc(userRef, {
        foodDiary: {},
        userGoals: {},
        userWorkouts: {},
      });

      const foodDiaryRef = collection(firestore, `users/${user.uid}/foodDiary`);
      await setDoc(foodDiaryRef, {});
      router.push("/userDetails");
    }
  } catch (error) {
    console.error(error);
  }
};

export default login;

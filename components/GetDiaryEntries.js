import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../pages/firebase";
import { doc, getDoc } from "firebase/firestore";

const GetDiaryEntries = (dateOfEntry) => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  {
    user ? console.log(user.uid) : console.log("no user");
  }
};

export default GetDiaryEntries;

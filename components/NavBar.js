import Link from "next/link";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { auth, firestore } from "../pages/firebase";
import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const NavBar = () => {
  const [user, setUser] = useAuthState(auth);
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      setActiveLink(url.pathname);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  // Create a new GoogleAuthProvider instance
  const googleAuthProvider = new GoogleAuthProvider();

  // Login function using GoogleAuthProvider
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      const userRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        // User details not found, redirect to userDetails page
        Router.push("/userDetails");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Navbar component
  return (
    <nav>
      <div className="logo">
        <h1>GCUFitness</h1>
      </div>
      <Link href="/" className={activeLink === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/foodDiary"
        className={activeLink === "/foodDiary" ? "active" : ""}
      >
        Food Diary
      </Link>
      <Link
        href="/calorieTracker"
        className={activeLink === "/calorieTracker" ? "active" : ""}
      >
        Calorie Tracker
      </Link>
      <Link
        href="/workoutPlanner"
        className={activeLink === "/workoutPlanner" ? "active" : ""}
      >
        Workout Planner
      </Link>
      {user ? (
        <Link
          href="/profile"
          className={activeLink === "/profile" ? "active" : ""}
        >
          Profile
        </Link>
      ) : (
        ""
      )}
      {!user ? (
        <Button shadow color="gradient" auto onPress={login} size="xs">
          Login
        </Button>
      ) : (
        ""
      )}
      {user ? <Avatar src={user.photoURL} size="md" /> : ""}
      {user ? (
        <Button
          shadow
          color="gradient"
          auto
          size="xs"
          onPress={() => auth.signOut()}
        >
          Sign Out
        </Button>
      ) : (
        ""
      )}
    </nav>
  );
};
export default NavBar;

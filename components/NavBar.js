import Link from "next/link";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login.js";
import { auth } from "../pages/firebase";

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

  const userObject = {
    foodDiary: {},
    userGoals: {},
    userWorkouts: {},
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
      {!user ? <Login /> : ""}
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

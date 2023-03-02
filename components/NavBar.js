import Link from "next/link";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login.js";
import { auth } from "../pages/firebase";
import { Tooltip } from "@nextui-org/react";

const NavBar = () => {
  const [user, setUser] = useAuthState(auth);
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser) {
      auth.currentUser
        .getIdToken(true)
        .then(function (idToken) {
          localStorage.setItem("authToken", idToken);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

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

  return (
    <nav>
      <div className="logo">
        <h1 style={{ lineHeight: "20px" }}>GCUFitness</h1>
      </div>
      <Link href="/" className={activeLink === "/" ? "active" : ""}>
        Home
      </Link>
      {user ? (
        <div>
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
        </div>
      ) : (
        ""
      )}
      {!user ? (
        <Login />
      ) : (
        <Tooltip content="View Profile" placement="bottom">
          <Link href="/profile">
            <Avatar src={user.photoURL} size="md" style={{ marginRight: '10px' }} />
          </Link>
        </Tooltip>
      )}
      {user ? (
        <Tooltip content="Sign Out" placement="bottom">
          <Button
            shadow
            color="gradient"
            auto
            size="xs"
            onPress={() => auth.signOut()}
          >
            Sign Out
          </Button>
        </Tooltip>
      ) : (
        ""
      )}
    </nav>
  );
};
export default NavBar;

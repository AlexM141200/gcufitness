import Link from "next/link";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login.js";
import { auth } from "../pages/firebase";
import styles from "../styles/Navbar.module.css";
import { Navbar, Dropdown, Button, Text, Avatar, Tooltip, Image, useTheme } from "@nextui-org/react";
import { useWindowSize } from "@react-hook/window-size";


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

  const { isDark } = useTheme();
  const [width, height] = useWindowSize();
  const isSmallScreen = width < 768;

  return (
    <Navbar isCompact shadow variant="sticky" css={{
      top: 0, paddingTop: "0", $$navbarBackgroundColor: "transparent",
      $$navbarBlurBackgroundColor: "transparent", borderRadius: "10px"
    }} maxWidth="100vw" fluid={isSmallScreen}>
      <Navbar.Brand>
        <img className={styles.logo} src="/img/IntelliTech.png" alt="IntelliTech Logo" />
      </Navbar.Brand>

      {user ? (
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="underline"
        >
          <Navbar.Item width={isSmallScreen ? 'auto' : '1/4'}>
            <Link href="/" className={activeLink === "/" ? "active" : ""}>
              Home
            </Link>
          </Navbar.Item>
          <Navbar.Item width={isSmallScreen ? 'auto' : '1/4'}>
            <Link
              href="/foodDiary"
              className={activeLink === "/foodDiary" ? "active" : ""}
            >
              Food Diary
            </Link>
          </Navbar.Item>
          <Navbar.Item width={isSmallScreen ? 'auto' : '1/4'}>
            <Link
              href="/calorieTracker"
              className={activeLink === "/calorieTracker" ? "active" : ""}
            >
              Calorie Tracker
            </Link>
          </Navbar.Item>
          <Navbar.Item width={isSmallScreen ? 'auto' : '1/4'}>
            <Link
              href="/workoutPlanner"
              className={activeLink === "/workoutPlanner" ? "active" : ""}
            >
              Workout Planner
            </Link>
          </Navbar.Item>
        </Navbar.Content>
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
    </Navbar>
  );
};
export default NavBar;

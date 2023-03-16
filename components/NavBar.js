
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login.js";
import { auth } from "../pages/firebase";
import styles from "../styles/Navbar.module.css";
import { Navbar, Dropdown, Button, Text, Avatar, Tooltip, Image, useTheme, Link } from "@nextui-org/react";
import { useWindowSize } from "@react-hook/window-size";


const NavBar = () => {
  const [user, setUser] = useAuthState(auth);
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
            <Navbar.Link block color="secondary" css={{ color: "white" }} href="/" >
              Home
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item width={isSmallScreen ? 'auto' : '1/4'}>
            <Navbar.Link block color="secondary" css={{ color: "white" }}
              href="/foodDiary"
            >
              Food Diary
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item width={isSmallScreen ? 'auto' : '1/4'}>
            <Navbar.Link block color="secondary" css={{ color: "white" }}
              href="/calorieTracker"
            >
              Calorie Tracker
            </Navbar.Link>
          </Navbar.Item>
          <Dropdown>
            <Dropdown.Button color="gradient"
            >
              Workouts
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="ACME features"
              color="secondary"
              isDark
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="userworkouts"
                showFullDescription
                description="The workout progress page tracks and logs your workouts, helping you achieve and maintain a healthy lifestyle. "
                icon={<Image src="/img/calendar.png" height="50px" />}
              >
                <Link
                  href={"/workouts/userWorkouts"}
                > My Workouts</Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="exerciselibrary"
                showFullDescription
                description="Browse through a comprehensive collection of exercises that target various muscle groups and movements. "
                icon={<Image src="/img/dumbbellHeart.png" height="50px" />}
              >
                <Link
                  href={"/exerciseLibrary"}
                > Exercise Library</Link>

              </Dropdown.Item>
              <Dropdown.Item
                key="strengthworkouts"
                showFullDescription
                description="Build muscle and increase strength with our carefully curated strength workouts."
                icon={<Image src="/img/weightlifter.png" height="50px" />}
              >
                <Link href={"/workouts/strengthWorkouts"}>Strength Workouts</Link>

              </Dropdown.Item>
              <Dropdown.Item
                key="pcardioworkouts"
                showFullDescription
                description="Get your heart pumping and improve your cardiovascular health with our selection of cardio workouts. "
                icon={<Image src="/img/treadmill.png" height="50px" />}

              >
                <Link href={"/workouts/cardioWorkouts"}>Cardio Workouts</Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="customworkout"
                showFullDescription
                description="More experienced lifter? Create your own custom workout plan and track progress."
                icon={<Image src="/img/writing.png" height="50px" />}
              >
                <Link href={"/workouts/createWorkout"}>Create Custom Workout Plan</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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

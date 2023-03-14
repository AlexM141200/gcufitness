import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import CardLinks from "../components/CardLinks";
import { Content } from "../components/landingContent";
import LandingHero from "../components/LandingHero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LandingHero />
      <CardLinks />
      <div className="container">
        <h1 className={styles.title}>Why you should start your fitness journey!</h1>
        <Content />
      </div>
    </>
  );
}

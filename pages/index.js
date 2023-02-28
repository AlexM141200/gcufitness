import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import CardLinks from "../components/CardLinks";
import { Content } from "../components/landingContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Welcome to GCU Fitness Tracking</h1>
      <CardLinks />
      <div className="container">
        <h1 className={styles.title}>Not sure where to start?</h1>
        <Content />
      </div>
    </>
  );
}

import { Grid } from "@nextui-org/react";

import styles from "../styles/LandingHero.module.css";
import Card1 from "./heroCards/Card1.js";
import Card2 from "./heroCards/Card2.js";
import Card3 from "./heroCards/Card3";

const LandingHero = () => {
    return (
        <div>
            <div className={styles.heroContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.heroImage} src="/img/IntelliTech.png" alt="IntelliTech Logo" />
                    <img className={styles.heroImage} src="/img/fireflies.png" alt="IntelliTech Logo" />
                </div>
                <h1 className={styles.title} style={{ marginLeft: "4rem" }}>
                    Become the best version of yourself!
                </h1>
            </div>
            <br />
            <Grid.Container gap={2} justify="center">
                <Grid xs={4} sm={4}>
                    <Card1 />
                </Grid>
                <Grid xs={4} sm={3}>
                    <Card2 />
                </Grid>
                <Grid xs={4} sm={3}>
                    <Card3 />
                </Grid>
            </Grid.Container>
        </div>

    );
};

export default LandingHero;

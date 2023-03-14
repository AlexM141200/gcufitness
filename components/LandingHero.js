import styles from "../styles/LandingHero.module.css";

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
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h3>🏋️‍♀️ Create custom workouts</h3>
                        <p>Tailored to your goals</p>
                    </div>
                    <div className={styles.card}>
                        <h3>🍽️ Track your calories</h3>
                        <p>For smarter nutrition choices</p>
                    </div>
                    <div className={styles.card}>
                        <h3>📉 Reach your weight loss targets</h3>
                        <p>With ease</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingHero;

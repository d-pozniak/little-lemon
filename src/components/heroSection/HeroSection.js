import styles from './HeroSection.module.css';
import center from '../../helpers/center.module.css';
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <div className={styles.container}>
            <section className={`${styles.section} ${center.max__width}`}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        Little Lemon
                    </h1>
                    <h2 className={styles.subtitle}>
                        Chicago
                    </h2>
                    <p className={styles.description}>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a
                        modern twist.
                    </p>
                    <Link className={styles.reserve__button} to='/booking'>Reserve a Table</Link>
                </div>
                <div className={styles.image} ></div>
            </section>
        </div>
    )
}

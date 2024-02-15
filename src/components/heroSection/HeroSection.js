import ReserveTableImg from '../../assets/images/reserve-table.jpg';
import styles from './HeroSection.module.css';
import center from '../../helpers/center.module.css';

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
                    <button className={styles.reserve__button}>Reserve a Table</button>
                </div>
                <img
                    src={ReserveTableImg}
                    className={styles.image}
                    alt='Four entrees on a plate'
                />
            </section>
        </div>
    )
}

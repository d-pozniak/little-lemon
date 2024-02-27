import styles from './Chicago.module.css';
import center from "../../helpers/center.module.css";

export default function Chicago() {
    return (
        <div className={styles.container}>
            <section className={`${styles.section} ${center.max__width}`}>
                <h2 className={styles.title}>
                    Little Lemon
                </h2>
                <h3 className={styles.subtitle}>
                    A Taste of Home in Chicago
                </h3>
                <p className={styles.description}>
                    Little Lemon, nestled in Chicago, is more than just a restaurant; it's a cherished family legacy.
                    Founded by Grandma Elena, our eatery blends generations of love and culinary expertise into every dish.
                    From hearty Italian pasta to savory Mediterranean delights, our menu reflects our commitment to tradition and quality.
                    Join us for a taste of home and experience the warmth of family at Little Lemon, where every meal is
                    a celebration of love, laughter, and delicious food.
                </p>
            </section>
        </div>
    )
}

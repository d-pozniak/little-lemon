import styles from './Specials.module.css';
import center from '../../helpers/center.module.css';
import SpecialsList from "../specialsList/SpecialsList";

export default function Specials() {
    return (
            <section className={`${styles.section} ${center.max__width}`}>
                <div className={styles.title__container}>
                    <h2>
                        This weeks specials!
                    </h2>
                    <button className={styles.menu__button}>Online Menu</button>
                </div>
                <SpecialsList/>
            </section>
    )
}

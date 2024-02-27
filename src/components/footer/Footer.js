import center from '../../helpers/center.module.css';
import Lemon from "../../assets/images/lemon.png";
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={`${styles.footer} ${center.max__width}`}>
            <img
                src={Lemon}
                className={styles.logo}
                alt='Little Lemon'
            />
            <div>
                <h4 className={styles.contact}>Contact Us</h4>
                <div>Chicago, Illinois</div>
                <div>(123)-456-7891</div>
            </div>
        </footer>
    )
}

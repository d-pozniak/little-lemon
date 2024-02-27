import styles from './Navigation.module.css';
import { Link } from "react-router-dom";

export default function Navigation({ links }) {
    const list = links.map( (link, index) =>
        <li key={index} className={styles.nav__item}>
            <Link to={link.href} className={styles.nav__link}>
                {link.name}
            </Link>
        </li>
    );
    return (
        <nav>
            <ul className={styles.nav__list}>
                {list}
            </ul>
        </nav>
    )
}

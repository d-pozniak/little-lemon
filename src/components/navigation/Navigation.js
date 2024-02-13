import styles from './Navigation.module.css'

export default function Navigation({ links }) {
    const list = links.map( (link, index) =>
        <li key={index} className={styles.nav__item}>
            <a href={link.href} className={styles.nav__link}>
                {link.name}
            </a>
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

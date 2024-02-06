import {LINKS} from '../constants/links';
import Nav from './Navigation';
import Logo from '../assets/images/logo.jpg';
import styles from '../App.module.css';

export default function Header(){
    return (
        <header>
            <img
                src={Logo}
                className={styles.logo}
                alt='Little Lemon restaurant logo'
            />
            <Nav links = {LINKS}/>
        </header>
    )
};

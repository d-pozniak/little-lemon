import {LINKS} from '../constants/links';
import Nav from './Navigation';

export default function Header(){
    return (
        <header>
            <Nav links = {LINKS}/>
        </header>
    )
}
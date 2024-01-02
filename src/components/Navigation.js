export default function Navigation({ links }) {
    const list = links.map( (link, index) =>
        <li key={index}>
            <a href={link.href}>
                {link.name}
            </a>
        </li>
    );
    return (
        <nav>
            {list}
        </nav>
    )
}
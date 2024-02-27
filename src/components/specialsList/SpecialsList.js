import styles from './SpecialsList.module.css';
import special1 from '../../assets/images/week-special-1.jpg';
import special2 from '../../assets/images/week-special-2.jpg';
import special3 from '../../assets/images/week-special-3.jpg';

const SPECIALS = [
    {
        src: special1,
        alt: 'Dish of the week',
        title: 'Greek Salad',
        price: 12.99,
        description: 'Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.'
    },
    {
        src: special2,
        alt: 'Dish of the week',
        title: 'Bruschetta',
        price: 16.99,
        description: 'Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.'
    },
    {
        src: special3,
        alt: 'Dish of the week',
        title: 'Penne Arrabbiata',
        price: 8.5,
        description: 'Delicious pasta dish prepared with a fiery hot sauce made with tomatoes, olive oil, and garlic.'
    }
];

export default function SpecialsList() {
    const specials = SPECIALS.map( (item, index) =>
        <li key={index} className={styles.card}>
            <img
                className={styles.card__img}
                src={item.src}
                alt={item.alt}
            />
            <div className={styles.card__info}>
                <div className={styles.title__container}>
                    <h3 className={styles.card__title}>{item.title}</h3>
                    <span className={styles.price}>$ {item.price.toFixed(2)}</span>
                </div>
                <p className={styles.card__description}>{item.description}</p>
                <button className={styles.order__button}>Order a delivery</button>
            </div>
        </li>);

    return (
        <ul className={styles.list}>
            {specials}
        </ul>
    )
}

import { Card } from '../../cards/card';
import styles from './activity.module.css';
import { getCardById } from '../../services/card.service';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCards } from '../../services/firebase.service';

export const Activity = () => {
    const { id } = useParams();
    const [cardOpened, setCardOpened] = useState(false);

  /*  const card = getCardById(id);*/
    const [card, setCard] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(async () => {
        setLoading(true);
        const cards = await getCards();
        console.log(cards);
        setCard(cards[id]);
        setLoading(false)
    }, []);

    // const { title, duration, requirmens, age, materials, description, goal } = card;
    return (
        card ?
        <div className={styles.shadow}>
            <Link to="/" className={styles.backBtn}>Back</Link>


            <div className={styles.wrapper}>
                <div className={cardOpened ? styles.cardActiveWrapper : styles.cardCloseWrapper}>
                    <div className={styles.cardActive}>
                        <div className={styles.close} onClick={() => setCardOpened(false)}>X</div>
                        <div className={styles.title}>
                            picture
                        </div>
                        <div className={styles.value}>

                        </div>
                    </div>
                </div>

                <div className={styles.goal}>
                    <h1 className={styles.title}>
                        Activity name
                    </h1>
                    <div className={styles.pic}>

                    </div>
                    <div className={styles.title2}>
                        <span className={styles.text2}>
                            Goal
                            </span>
                    </div>
                    <section className={styles.value}>
                        {card?.goal?.value}
                    </section>
                </div>

                <section className={styles.card} onClick={() => setCardOpened(true)}>
                    <div className={styles.output}>
                        <div className={styles.title}>picture</div>
                        <div className={styles.desc}></div>
                    </div>
                </section>

                <div className={styles.info}>
                    <div className={styles.item}>

                        <div className={styles.title}>
                            <span className={styles.text}>
                                Title
                            </span>

                        </div>
                        <div className={styles.desc}>
                            {card.title}
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Duration
                            </span>

                        </div>
                        <div className={styles.desc}>
                            {card.duration} minutes
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Requirments
                            </span>

                        </div>
                        <div className={styles.desc}>
                            {card.requirmens}
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Age
                                     </span>
                        </div>
                        <div className={styles.desc}>
                            {card.age}
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Materials
                                     </span>
                        </div>
                        <div className={styles.desc}>
                            {card.materials}
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Description
                            </span>
                        </div>
                        <div className={styles.desc}>
                            <div className={styles.scrolltext}>
                                {card.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : null
    )
}
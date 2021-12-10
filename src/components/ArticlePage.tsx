import {FC, useEffect, useState} from 'react'
import styles from './ArticlePage.module.scss'
import arrow from '../img/Arrow 1.png'
import { Link, useParams } from 'react-router-dom';
import { DataProps, ICard, clone } from './Homepage'

export const ArticlePage : FC<DataProps> = ({cards}) => {

    useEffect(() => {
        setCardsToShow(clone(cards));
    }, [cards])

    const [cardsToshow, setCardsToShow] = useState<ICard[]>([])

    const params = useParams();
    const article = cardsToshow.find((card: ICard) => {
        return `${card.id}` === params.id;
    })

    return (
        <>
            <div className={styles.Background}>
                <img src={article?.urlToImage}/>
            </div>
            <div className={styles.Block}>
                <div className={styles.Title}>
                    <h2>{article?.title}</h2>
                </div>
                <div className={styles.Content}>
                    <p>{article?.content}</p>
                </div>
                <div className={styles.Back}>
                    <img src={arrow} alt="arrow"/>
                    <Link className={styles.Text} to="/">
                        <p>Back to Homepage</p>
                    </Link>
                </div>
            </div>
        </>
        
    )
}

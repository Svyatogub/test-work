import { Link } from 'react-router-dom'
import { ICard } from './Homepage'
import styles from './Homepage.module.scss'
import arrowRight from '../img/arrow-right-solid.svg'

function Card(data : ICard) {
    return (
        <div className={styles.Cards}>
            <img src={data.urlToImage}/>
                <Link className={styles.Text} to={`/article/${data.id}`}>
                    <h2 dangerouslySetInnerHTML={{__html: data.title}}>
                    </h2>
                    <p dangerouslySetInnerHTML={{__html: data.description}}></p>
                    <div className={styles.More}>
                        <h4>Read more</h4>
                        <img src={arrowRight} alt="arrow right" />
                    </div>
                </Link>
        </div>
    )
}

export default Card

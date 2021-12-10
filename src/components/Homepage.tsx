import React, { FC, useState, useEffect } from 'react'
import styles from './Homepage.module.scss'
import vector from '../img/Vector.png'
import Card from './Card'


export interface ICard {
        title: string, 
        content: string, 
        url: string,
        id: number
        author: string,
        description: string,
        publishedAt: "2021-11-22T17:24:49Z",
        urlToImage: string
}

export interface DataProps {
    cards: ICard[]
}

export function clone(arr: any) {
    return arr.map((a:any) => {return {...a}})
}

export const Homepage: FC<DataProps> = ({cards}) => {

const [searchText, setSearchText] = useState('')
const [itemCount, setitemCount] = useState(0)
const [cardsToshow, setCardsToShow] = useState<ICard[]>([])

useEffect(() => {
    setCardsToShow(clone(cards));
}, [cards])

useEffect(()=> {

    if (searchText) {

        let arr: ICard[] = clone(cards).filter((item: ICard) => {
            return item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.content.toLowerCase().includes(searchText.toLowerCase())
        }); 

        if (arr.length && searchText.length) {
            const regext = new RegExp(searchText,'gi')
           arr = arr.map((item: ICard) => {
                item.title = item.title.replaceAll(regext, `<span class="highlight">${searchText}</span>`)
                item.content = item.content.replaceAll(regext, `<span class="highlight">${searchText}</span>`)
                return item;
            })
        }
        setCardsToShow(arr);
     
    } else {
        setCardsToShow(cards);
    }
}, [searchText])

useEffect(() => {
    setitemCount(cardsToshow.length)  
}, [cardsToshow])

    const handleChange = (e: any) => {
        setSearchText(e.target.value);
      };

    const renderData = () => {

        return cardsToshow
        .map ((item) => 
        <Card 
            key={item.url}
            {...item}
        />
    )}
    

    return (
        <div>
            <div className={styles.Header}>
                <h3>Filter by keywords</h3>
                <div className={styles.Input}>
                    <input onChange={handleChange} type="text"/>
                </div>
                <h4>Results: {itemCount}</h4>
            </div>
            <div className={styles.Block}>
                <hr/>
                <div className={styles.Info}>
                    <div>
                        {renderData()}
                    </div>
                </div>
            </div>
        </div>
    )
}

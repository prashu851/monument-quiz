import React, { useState } from 'react';
import {Card} from './Card'
const quizDeck = [
    {
        name: 'Taj Mahal',
        image: 'https://picsum.photos/id/235/200/300',
        description:'The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex.',
        location:'Agra, Uttar Pradesh',
        examined: false
    },
    {
        name: 'Red Fort',
        image: 'https://picsum.photos/id/236/200/300',
        description:'The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex.',
        location:'Delhi',
        examined: false
    },
    {
        name :'Charminar',
        image: 'https://picsum.photos/id/237/200/300',
        description:'',
        location:'',
        examined: false
    },
    {
        name :'Makka',
        image: 'https://picsum.photos/id/238/200/300',
        description:'',
        location:'',
        examined: false
    },
    {
        name :'makka',
        image: 'https://picsum.photos/id/238/200/300',
        description:'',
        location:'',
        examined: false
    },
    {
        name :'makka',
        image: 'https://picsum.photos/id/238/200/300',
        description:'',
        location:'',
        examined: false
    },
    {
        name :'makka',
        image: 'https://picsum.photos/id/238/200/300',
        description:'',
        location:'',
        examined: false
    },
    {
        name :'makka',
        image: 'https://picsum.photos/id/238/200/300',
        description:'',
        location:'',
        examined: false
    },
    {
        name :'makka',
        image: 'https://picsum.photos/id/238/200/300',
        description:'',
        location:'',
        examined: false
    }
];

export const Cards : React.FC = () => {

    const [quizCards, updateQuizCards] = useState(quizDeck);

    const getQuizCard = () => {
        const quizCard = quizCards.find(card => !card.examined);
        return quizCard ? quizCard : quizCards[0];
    }

    const onQuizFinish = (data: any) => {
        const newQuizCards = quizCards.map(card=>{
            if (card.name === data.name) {
                return {...card, examined: true};
            } return card;
        });

        updateQuizCards(newQuizCards);
    }
    
    return(
        
        <Card key={getQuizCard().name} data={getQuizCard()} onQuizFinish={onQuizFinish} />
    )

}
import React, { useState } from 'react';
import {Card} from './Card';
import {Score} from './Score'
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
        description:'The Red Fort is a historic fort in the city of Delhi (in Old Delhi) in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi. Originally red and white, its design is credited to architect Ustad Ahmad Lahori, who also constructed the Taj Mahal. It was constructed between May 1639 and April 1648.',
        location:'New Delhi',
        examined: false
    },
    {
        name :'Charminar',
        image: 'https://picsum.photos/id/237/200/300',
        description:'The Charminar (lit. "four minarets"), constructed in 1591, is a monument and mosque located in Hyderabad, Telangana, India. The landmark has become known globally as a symbol of Hyderabad and is listed among the most recognized structures in India. It has also been officially incorporated as the Emblem of Telangana for the state of Telangana. The Charminar`s long history includes the existence of a mosque on its top floor for more than 400 years. ',
        location:'Hyderabad',
        examined: false
    },
    {
        name :'Statue of Liberty',
        image: 'https://picsum.photos/id/238/200/300',
        description:'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.',
        location:'Manhattan, New York',
        examined: false
    },
    {
        name :'Qutub Minar',
        image: 'https://picsum.photos/id/239/200/300',
        description:'The Qutb Minar, also spelled as Qutub Minar and Qutab Minar, is a minaret and "victory tower" that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of New Delhi, India. The height of Qutb Minar is 72.5 meters, making it the tallest minaret in the world built of bricks.[2][5] The tower tapers, and has a 14.3 metres (47 feet) base diameter, reducing to 2.7 metres (9 feet) at the top of the peak. It contains a spiral staircase of 379 steps.',
        location:'New Delhi',
        examined: false
    },
    {
        name :'Chichen Itza',
        image: 'https://picsum.photos/id/240/200/300',
        description:'Chichen Itza[nb 1] was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–900) through the Terminal Classic (c. AD 800–900) and into the early portion of the Postclassic period (c. AD 900–1200).',
        location:'Yucatan, Mexico',
        examined: false
    },
    {
        name :'Great Pyramid of Giza',
        image: 'https://picsum.photos/id/241/200/300',
        description:'The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.',
        location:'Egypt',
        examined: false
    },
    {
        name :'India Gate',
        image: 'https://picsum.photos/id/242/200/300',
        description:'The India Gate (originally the All India War Memorial) is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi,[1] formerly called Kingsway .It stands as a memorial to 70,000 soldiers of the British Indian Army who died in between 1914–1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the third Anglo-Afghan War. ',
        location:'New Delhi',
        examined: false
    },
    {
        name :'Foamhenge',
        image: 'https://picsum.photos/id/243/200/300',
        description:'Foamhenge is a full-scale styrofoam replica of Stonehenge in Natural Bridge, Virginia. It was conceived and built by artist Mark Cline as a roadside attraction, and opened on April 1, 2004. Foamhenge was relocated to Centreville, Virginia in 2017.Foamhenge was created in 2004 by Mark Cline of Enchanted Castle Studios as an April Fool`s Day stunt to generate tourism. The idea for Foamhenge came to Mark in 1998, when he was inspired by 16-foot-tall (4.9 m) foam blocks that he saw at a local insulation manufacturer. ',
        location:'Virginia, USA',
        examined: false
    },
    {
        name :'Gateway of India',
        image: 'https://picsum.photos/id/244/200/300',
        description:'The Gateway of India is an arch-monument built in the early twentieth century in the city of Mumbai, in the Indian state of Maharashtra. It was erected to commemorate the landing in December 1911 at Apollo Bunder, Mumbai (then Bombay) of King-Emperor George V and Queen-Empress Mary, the first British monarch to visit India. At the time of the royal visit, the gateway was not yet built, and a cardboard structure greeted the monarch. ',
        location:'Mumbai',
        examined: false
    }
];

export const Cards : React.FC = () => {

    const [quizCards, updateQuizCards] = useState(quizDeck);
    const [score, setScore] = useState(0)

    const getQuizCard = () => {
    return  quizCards.find(card => !card.examined);
    
    }

    const onQuizFinish = (data: any,result:string) => {
        const newQuizCards = quizCards.map(card=>{
            if (card.name === data.name) {
                return {...card, examined: true};
            } return card;
        });
        if(result ==='right'){
            setScore(score+1)
        }
        console.log(score)

        updateQuizCards(newQuizCards);
    }

    const currentCard = getQuizCard()
    return(
        <>
        
        {currentCard !== undefined?
        <Card key={currentCard.name} data={currentCard} onQuizFinish={onQuizFinish} />:
        <Score score={score} />
    }
        </>

    
    )

}   
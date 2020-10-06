import React from 'react';
import CardFront from '../components/CardFront'
import {  IonContent } from '@ionic/react';
import CardBack from '../components/CardBack';
import { IonCard,IonCardContent,IonIcon } from '@ionic/react';
import { useState } from 'react';
import './Cards.css'
import { location } from 'ionicons/icons';

export const Cards: React.FC = () => {
  const [isFlipped,setIsFlipped]=useState(false);
  return(
       <div className="scene scene--card">
        <div className="card">
          <div className="card__face card__face--front">
            <div className={isFlipped?'card-flipped':''}>
              <IonCard className="ion-card" onClick={()=>setIsFlipped(!isFlipped)}>
                <img className="card-img" src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" alt="card1" />
              </IonCard>
            </div>
          </div>
          <div className="card__face card__face--back">
            <IonCard>
                <IonCardContent>
                  <h1>Taj Mahal</h1>
                  The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex.<br />
                  <IonIcon icon={location} />
                  Agra, Uttar Pradesh
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </div>


  
  
);
}
export default Cards;

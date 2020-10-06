import React from 'react';
import { IonCard, IonCardContent,IonIcon } from '@ionic/react';

import './CardBack.css'
import { location } from 'ionicons/icons';
const CardFront: React.FC = () => {
  return (
      
    <IonCard className="card-face-back card-back">
        
        <IonCardContent>
            <h1>Taj Mahal</h1>
            The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex.<br />
            <IonIcon icon={location} />
            Agra, Uttar Pradesh
        </IonCardContent>
    
      </IonCard>
  );
};

export default CardFront;
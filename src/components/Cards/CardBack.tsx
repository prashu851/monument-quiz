import React from 'react';
import {IonCard, IonCardContent, IonIcon } from "@ionic/react";
import { location } from 'ionicons/icons';

interface ContainerProps {
    data: any;
    onQuizFinish: any;
}

const CardBack: React.FC<ContainerProps> = ({data, onQuizFinish}) => {
  return (
      <IonCard onClick={() => onQuizFinish(data)}>
           <IonCardContent>
            <h1>{data.name}</h1>
            {data.description}<br />  
            <IonIcon icon={location} />
            {data.location}<br />
            <button>Right</button>
            <button>Wrong</button>
        </IonCardContent>
      </IonCard>
  );
};

export default CardBack;

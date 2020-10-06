import React from 'react';
import {IonCard} from "@ionic/react";
interface ContainerProps {
    onSwipe: any;
    image: any;
}

const CardFront: React.FC<ContainerProps> = ({ onSwipe, image }) => {
  return (
      <IonCard className="card-front-face" onClick={onSwipe}>
        <img className="card-img" src={image} alt="card1" />
      </IonCard>
      
  );
};

export default CardFront;

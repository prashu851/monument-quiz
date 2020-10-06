import React,{createRef, useEffect, useRef, useState} from 'react';
import {IonCard, IonCardContent, IonIcon } from "@ionic/react";
import { location } from 'ionicons/icons';
import { createGesture, CreateAnimation, Gesture, GestureDetail } from '@ionic/react';

interface ContainerProps {
    data: any;
    onQuizFinish: any;
}

const CardBack: React.FC<ContainerProps> = ({data, onQuizFinish}) => {
  let gesture: Gesture;
    let element: Node;
    let elementStartX = 0;
    let result = '';

    const cardRef = useRef<CreateAnimation>(null);

    const onStart = (ev:any) => {
        elementStartX = ev.startX;
    };

    const onMove = (ev:any) => {
        // @ts-ignore    
        element.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX/20}deg)`
    
    };

    const onEnd = (ev: any) => {
        // @ts-ignore
        element.style.transition = "0.3s ease-out";

        let deltaStartToEnd = ev.currentX - elementStartX;
        if (deltaStartToEnd > 100) {
            // @ts-ignore
            element.style.transform = `translateX(100%)`;
            onQuizFinish(data,'right');
        } else if (deltaStartToEnd < -100) {
            // @ts-ignore
            element.style.transform = `translateX(-100%)`;
            onQuizFinish(data,'wrong');
        } else {
            // @ts-ignore
            element.style.transform = ''
        }
    };
    useEffect(() => {
        element = Array.from(cardRef.current!.nodes.values())[0];
        gesture = createGesture({
            el: element,
            gestureName: 'card-swipe',
            threshold: 0,
            onStart: onStart,
            onMove: onMove,
            onEnd: onEnd
        });

        // @ts-ignore
        gesture.enable(true);

    }, []);
  return (
        <CreateAnimation
        ref={cardRef}
        duration={1500}
        >
          <div>
            <IonCard className="card-back-container">
              <IonCardContent className="card-content">
                <h1>{data.name}</h1>
                <p className="mon-desc">{data.description}</p>  
                <p className="mon-loc"><IonIcon icon={location} />
                {data.location}</p><br />
            </IonCardContent>
            </IonCard>
          </div>
        </CreateAnimation>
      
  );
};

export default CardBack;

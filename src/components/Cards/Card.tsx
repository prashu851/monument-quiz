import React, {RefObject, useRef, useState} from 'react';
import {IonSlides, IonSlide, IonContent, CreateAnimation} from '@ionic/react';
import CardFront from "./CardFront";
import CardBack from "./CardBack";

import './Card.css';

interface ContainerProps {
    data: any;
    onQuizFinish: any;

}

export const Card: React.FC<ContainerProps> = ({data, onQuizFinish}) => {
    const frontRef = useRef<CreateAnimation>(null);
    const backRef = useRef<CreateAnimation>(null);
    const [showDivOne, changeDivOne] = useState(true);
    const [showDivTwo, changeDivTwo] = useState(false);

    const startAnimation = () => {
        // @ts-ignore
        frontRef.current.animation.play();
        // @ts-ignore
        frontRef.current.animation.onFinish(() => {
            changeDivOne(false);
            changeDivTwo(true);
            // @ts-ignore
            backRef.current.animation.play();
        });
        
    };

    return (
        <div key={data.name}>
            {showDivOne ?
                <CreateAnimation
                    duration={1000}
                    iterations={1}
                    ref={frontRef}
                    fromTo={[
                        { property: 'transform', fromValue: 'rotateY(0deg)', toValue: 'rotateY(90deg)' },
                    ]}
                >
                    <div className="card-front">
                        <CardFront onSwipe={startAnimation} image={data.image}/>
                    </div>
                </CreateAnimation>
                : ''
            }

            {showDivTwo ?
                <CreateAnimation
                    duration={1000}
                    iterations={1}
                    ref={backRef}
                    fromTo={[
                        {property: 'transform', fromValue: 'rotateY(270deg)', toValue: 'rotateY(360deg)'},
                    ]}
                >
                    <div className="card-back">
                        <CardBack data={data} onQuizFinish={onQuizFinish} />
                    </div>
                </CreateAnimation>
                : ''
            }
        </div>
    );
}
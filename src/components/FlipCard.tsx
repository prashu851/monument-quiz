import React from 'react'
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack'
import { useState } from 'react';
export const FlipCard: React.FC = () => {
    const [isFlipped,setIsFlipped]=useState(false)
    return(
        <ReactCardFlip isFlipped flipDirection="vertical">
           <CardFront />
           <CardBack />
        </ReactCardFlip>
    )
}
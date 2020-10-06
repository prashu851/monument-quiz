import React  from 'react';
import { IonCard } from '@ionic/react';
import "./CardFront.css"
import { useState } from 'react';


const handleClick=()=>{
    console.log("Card Clicked")
}

const CardFront: React.FC = () => {
  const [isFlipped,setIsFlipped]=useState(false)
  console.log(isFlipped)
  return (
    <div className={isFlipped?'card-flipped':''}>
      <IonCard className="card-face card-front" onClick={()=>setIsFlipped(!isFlipped)}>
        
        <img className="card-img" src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" alt="card1" />
      </IonCard>
    </div>
    
  );
  
};

export default CardFront;
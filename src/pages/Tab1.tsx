import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import {Cards} from '../components/Cards/Cards'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Monuments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Cards />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;

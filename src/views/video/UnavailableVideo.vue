<template>
    <ion-page>
      <!-- Encabezado blanco -->
      <ion-header>
        <ion-toolbar color="light">
          <!-- Botón de retroceso a la izquierda -->
          <ion-buttons slot="start">
            <ion-button @click="goBack">
              <!-- Usamos el icono de flecha atrás + label "Back" -->
              <ion-icon :icon="arrowBack"></ion-icon>
              <ion-label>Back</ion-label>
            </ion-button>
          </ion-buttons>
  
          <!-- Barra de búsqueda en el centro -->
          <ion-searchbar placeholder="Search for any video..." show-cancel-button="never"></ion-searchbar>
  
          <!-- Botón de búsqueda a la derecha (opcional) -->
          <ion-buttons slot="end">
            <ion-button>
              <ion-icon :icon="searchOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <!-- Contenido con fondo negro -->
      <ion-content>
        <div class="video-unavailable-container">
          <p>This video is unavailable, try again later.</p>
        </div>
        <div class="footer-text">
          <p>Back</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { arrowBack, searchOutline } from 'ionicons/icons'
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/vue';
  
  const router = useRouter()
  
  const goBack = () => {
    // Vuelve a la ruta anterior en el historial o redirige a otra en concreto
    // router.back()
  }
  
  </script>
  
  <style scoped>
  /* Hace que el contenido tenga fondo negro */
  ion-content {
    --background: #000; 
    overflow-x: hidden;
  }
  
  /* Contenedor central para el mensaje de “unavailable” */
  .video-unavailable-container {
    /* Ocupa casi todo el alto disponible para centrar verticalmente */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh; /* Ajusta según tu preferencia */
    color: #fff;
    text-align: center;
  }
  
  /* Texto de “Back” en la parte inferior */
  .footer-text {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .footer-text p {
    color: #fff;
    font-weight: 500;
  }
  </style>
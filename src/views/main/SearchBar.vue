<template>
    <ion-page>
      <!-- Encabezado -->
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="goBack">
              <ion-icon :icon="arrowBack"></ion-icon>
              <ion-label>Back</ion-label>
            </ion-button>
          </ion-buttons>
          <ion-searchbar
            placeholder="Tyson vs Holyfield"
            show-cancel-button="never"
          ></ion-searchbar>
        </ion-toolbar>
      </ion-header>
  
      <!-- Contenido -->
      <ion-content fullscreen class="search-results-content">
        <ion-list>
          <ion-item>Tyson vs Holyfield Fight November 1996</ion-item>
          <ion-item>Tyson vs Holyfield ear bite reaction</ion-item>
          <ion-item>Tyson vs Holyfield ear marketing candy</ion-item>
          <ion-item>Tyson vs Holyfield first fight</ion-item>
          <ion-item>Tyson vs Holyfield fight review</ion-item>
          <ion-item>Tyson vs Holyfield aftermath</ion-item>
          <ion-item>Tyson vs Holyfield money</ion-item>
          <ion-item>Tyson vs Holyfield bets</ion-item>
          <ion-item>Tyson vs Holyfield parody edition</ion-item>
          <ion-item>Tyson vs Holyfield - Jake Paul reaction</ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
</template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/vue';
  import { arrowBack } from 'ionicons/icons';
  
  const router = useRouter();
  
  const goBack = () => {
    router.back();
  };
  </script>
  
<style scoped>
  .search-results-content {
    /* Ajusta estilos si lo deseas */
  }
  
  /* Opcional: si quieres líneas entre cada item */
  ion-item {
    --border-width: 1px;
    --border-color: #ccc;
    border-bottom: 1px solid var(--border-color);
  }
</style>
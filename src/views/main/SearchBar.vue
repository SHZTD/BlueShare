<template>
  <ion-page>
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
          class="custom-searchbar"
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="search-results-content">
      <ion-list>
        <ion-item @click="navigateToVideo('video1')">
          <ion-label>Tyson vs Holyfield Fight November 1996</ion-label>
        </ion-item>
        <ion-item @click="navigateToVideo('video2')">
          <ion-label>Tyson vs Holyfield ear bite reaction</ion-label>
        </ion-item>
        <ion-item @click="navigateToVideo('unavailable')">
          <ion-label>Tyson vs Holyfield ear marketing candy</ion-label>
        </ion-item>
        <ion-item @click="navigateToVideo('unavailable')">
          <ion-label>Tyson vs Holyfield first fight</ion-label>
        </ion-item>
        <ion-item @click="navigateToVideo('unavailable')">
          <ion-label>Tyson vs Holyfield fight review</ion-label>
        </ion-item>
        <ion-item @click="navigateToVideo('unavailable')">
          <ion-label>Tyson vs Holyfield aftermath</ion-label>
        </ion-item>
        <ion-item @click="navigateToVideo('unavailable')">
          <ion-label>Tyson vs Holyfield money</ion-label>
        </ion-item>
        <ion-item @click="navigateToVideo('unavailable')">
          <ion-label>Tyson vs Holyfield bets</ion-label>
        </ion-item>
        <ion-item @click="navigateToVideo('unavailable')">
          <ion-label>Tyson vs Holyfield parody edition</ion-label>
        </ion-item>
        <ion-item @click="navigateToVideo('unavailable')">
          <ion-label>Tyson vs Holyfield - Jake Paul reaction</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonContent, 
  IonSearchbar, 
  IonList, 
  IonItem, 
  IonLabel 
} from '@ionic/vue';
import { arrowBack } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};

const navigateToVideo = (videoId: string) => {
  router.push(`/${videoId}`);
};
</script>

<style scoped>
ion-toolbar {
  --background: white;
  --color: black;
  font-family: KoHo;
}

.custom-searchbar {
  --background: #f1f1f1;
  --border-radius: 20px;
  --placeholder-color: #666;
  --icon-color: #666;
  --box-shadow: none;
  --color: black;
  font-family: KoHo;
}

ion-list {
  background: transparent;
  padding-top: 8px;
}

ion-item {
  --background: transparent;
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  --border-color: #eee;
  --border-width: 0 0 1px 0;
  --border-style: solid;
  cursor: pointer;
}

ion-item:last-child {
  --border-width: 0;
}

ion-label {
  font-family: KoHo;
  font-size: 14px;
  color: #333;
  margin: 8px 0;
}

ion-button {
  --color: black;
  font-family: KoHo;
}

@font-face {
  font-family: KoHo;
  src: url("/src/assets/fonts/KoHo/KoHo-Regular.ttf");
}
</style>
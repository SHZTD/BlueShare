<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="goToFeed">
            <ion-icon :icon="arrowBack" slot="icon-only"></ion-icon>
            Back
          </ion-button>
        </ion-buttons>
        <ion-searchbar
          placeholder="Search for any video..."
          :clear-icon="close"
          class="custom-searchbar"
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding unavailable-content">
      <div class="unavailable-container">
        <p class="unavailable-text">
          This video is unavailable,<br/>
          try again later.
        </p>
      </div>

      <ion-button 
        expand="block" 
        fill="clear" 
        class="back-button"
        @click="goToFeed"
      >
        Back
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonSearchbar,
} from '@ionic/vue';
import { arrowBack, close } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToFeed = () => {
  router.back();
};
</script>

<style scoped>
ion-toolbar {
  --background: white;
  --color: black;
  --padding-top: 16px;
  --padding-bottom: 16px;
  font-family: KoHo;
}

.custom-searchbar {
  --background: #f1f1f1;
  --border-radius: 20px;
  --placeholder-color: #666;
  --icon-color: #666;
  --box-shadow: none;
  font-family: KoHo;
}

.unavailable-content {
  --background: black;
}

.unavailable-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  text-align: center;
}

.unavailable-text {
  color: white;
  font-family: KoHo;
  font-size: 16px;
  line-height: 1.5;
}

.back-button {
  --color: white;
  --background: transparent;
  --background-activated: rgba(255, 255, 255, 0.1);
  --ripple-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  font-family: KoHo;
}

@font-face {
  font-family: KoHo;
  src: url("/src/assets/fonts/KoHo/KoHo-Regular.ttf");
}
</style>
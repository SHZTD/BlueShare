<template>
  <ion-page>
    <ion-content class="ion-padding" :scroll-y="true" :scroll-events="true" ref="contentRef">
      <div class="settings-container" ref="swipeElement">
        <div class="swipe-content">
                    <!-- Header -->
                    <div class="header">
            <div class="logo-container">
              <div>
                <img src="..//..//..//BLS_Group.png" alt="BLUSHARE" class="logo-blueshare"/>
              </div>
              <div class="subtitle">Settings menu</div>
            </div>
          </div>

          <!-- Search Bar -->
          <div class="search-container">
            <ion-searchbar placeholder="Search any keyword..." class="custom-searchbar"></ion-searchbar>
            <div class="manual-text">Or manually lookup for it</div>
          </div>

          <!-- Help Topics List -->
          <ion-list lines="full" class="help-list">
            <ion-item>
              <ion-label>Account standing</ion-label>
            </ion-item>
            
            <ion-item>
              <ion-label>About the app</ion-label>
            </ion-item>
            
            <ion-item>
              <ion-label>Blushare ToS</ion-label>
            </ion-item>
            
            <ion-item>
              <ion-label>How to like videos</ion-label>
            </ion-item>
            
            <ion-item>
              <ion-label>How to save vid</ion-label>
            </ion-item>
            
            <ion-item>
              <ion-label>How to enter test m...</ion-label>
            </ion-item>
            
            <ion-item>
              <ion-label>How to reset</ion-label>
            </ion-item>
          </ion-list>

          <div class="info-text">
            If you are looking up for actual settings, you should go to the previous window, you will find more specific information than here.
          </div>

          <div class="back-text">
            BACK<br/>
            or swipe right
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/vue';
import { playCircle, arrowBack } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const contentRef = ref();
const swipeElement = ref();

const navigateBack = () => {
  router.go(-1);
};
</script>

<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 20px;
  background-color: white;
}

.header {
  margin-bottom: 20px;
}

.logo-container {
  text-align: left;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-circle {
  width: 40px;
  height: 40px;
  background-color: #2b7cd3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-icon {
  color: white;
  font-size: 24px;
}

.logo-text {
  font-family: KoHo, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: black;
}

.subtitle {
  font-family: KoHo;
  font-size: 16px;
  color: black;
  margin-top: 4px;
}

.search-container {
  margin-bottom: 10px;
}

.custom-searchbar {
  --background: #e6e6e6;
  --border-radius: 20px;
  --placeholder-color: #666;
  --icon-color: #666;
  --box-shadow: none;
  margin-bottom: 5px;
  font-family: KoHo, sans-serif;
  height: 40px;
}

.manual-text {
  font-family: KoHo, sans-serif;
  font-size: 14px;
  color: black;
  margin-bottom: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.help-list {
  background: transparent;
  margin-bottom: 20px;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --background: transparent;
  --border-color: #ddd;
  font-family: KoHo, sans-serif;
  --min-height: 40px;
}

ion-item::part(native) {
  padding: 10px 0;
}

.info-text {
  font-family: KoHo, sans-serif;
  font-size: 14px;
  color: #666;
  text-align: center;
  line-height: 1.5;
  margin: 20px 0;
  padding: 0 10px;
}

.back-text {
  font-family: KoHo, sans-serif;
  font-size: 14px;
  color: black;
  text-align: center;
  line-height: 1.5;
  margin-top: 7vh;
  position: relative;
  bottom: 20px;
  left: 0;
  right: 0;
}

@font-face {
  font-family: KoHo;
  src: url("/src/assets/fonts/KoHo/KoHo-Regular.ttf");
}
</style>
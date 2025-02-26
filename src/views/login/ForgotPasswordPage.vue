<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="div-class">
        <div class="back-button">
          <router-link to="/">
            <ion-icon :icon="arrowBack" size="large"></ion-icon>
            <span>Back</span>
          </router-link>
        </div>

        <div class="forgot-content">
          <h2 class="forgot-title">
            Please enter your real<br/>
            email registered of your<br/>
            account in order to<br/>
            receive a link to update to<br/>
            your new password.
          </h2>

          <div class="centered-content">
            <ion-item class="custom-input">
              <ion-icon :icon="mailOutline" class="input-icon"></ion-icon>
              <ion-input 
                label="" 
                type="email" 
                placeholder="example_email@mail.me">
              </ion-input>
            </ion-item>

            <ion-item lines="none" class="checkbox-item">
              <ion-checkbox>It is me legitimately recovering my pass</ion-checkbox>
            </ion-item>

            <div class="recover-button-container">
              <button class="recover-button">
                Recover my password
              </button>
            </div>
          </div>
        </div>

        <div class="wave-container">
          <svg width="402" height="282" viewBox="0 0 402 282" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 78.1413L418 22V297.344L0 327V78.1413Z" fill="#00CDCD" fill-opacity="0.58"/>
            <path d="M-4 0.5L402 157V314.5H-4V0.5Z" fill="#00CDCD" fill-opacity="0.58"/>
          </svg>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonItem, IonInput, IonIcon, IonCheckbox } from '@ionic/vue';
import { arrowBack, mailOutline } from 'ionicons/icons';
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
}

.back-button a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-family: KoHo;
}

.back-button span {
  margin-left: 4px;
}

.forgot-content {
  margin-top: 60px;
  width: 100%;
}

.forgot-title {
  text-align: center;
  font-size: 20px;
  font-family: KoHo;
  line-height: 1.5;
  margin-bottom: 32px;
  color: black;
}

.checkbox-item {
  --background: transparent;
  --border-width: 0;
  margin: 16px 0;
  font-family: KoHo;
  font-size: 14px;
  color: black;
}

.recover-button-container {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.recover-button {
  background-color: #81b3e1;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-family: KoHo;
  width: 200px;
}

/* Inherit existing styles */
.custom-input {
  --background: #f1f1f1;
  --border-radius: 8px;
  --padding-start: 12px;
  --padding-end: 12px;
  margin-bottom: 16px;
  --border-width: 0;
  --highlight-height: 0;
}

.custom-input ion-input {
  --padding-start: 12px;
  --placeholder-color: #666;
  --placeholder-opacity: 1;
  font-family: KoHo;
}

.input-icon {
  color: #666;
  margin-right: 8px;
  font-size: 20px;
}

.centered-content {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

.wave-container {
  position: relative;
  width: fit-content;
  height: fit-content;
  margin-top: auto;
}

/* Inherit font faces from the main CSS */
@font-face {
  font-family: KoHo;
  src: url("/src/assets/fonts/KoHo/KoHo-Regular.ttf");
}

@font-face {
  font-family: Konkhmer_Sleokchher;
  src: url("/src/assets/fonts/Konkhmer_Sleokchher/KonkhmerSleokchher-Regular.ttf");
}
</style>
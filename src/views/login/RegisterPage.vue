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

        <div class="register-content">
          <h2 class="register-title">
            Please introduce your email<br/>
            a safe password and you're<br/>
            ready to go ;)
          </h2>

          <h3 class="register-subtitle">Register form</h3>

          <div class="centered-content">
            <ion-item class="custom-input">
              <ion-icon :icon="mailOutline" class="input-icon"></ion-icon>
              <ion-input 
                label="" 
                type="email" 
                placeholder="example_email@mail.me">
              </ion-input>
            </ion-item>

            <ion-item class="custom-input">
              <ion-icon :icon="lockClosedOutline" class="input-icon"></ion-icon>
              <ion-input 
                label="" 
                type="password" 
                placeholder="Password">
              </ion-input>
            </ion-item>

            <ion-item class="custom-input">
              <ion-icon :icon="lockClosedOutline" class="input-icon"></ion-icon>
              <ion-input 
                label="" 
                type="password" 
                placeholder="Repeat password...">
              </ion-input>
            </ion-item>
          </div>
        </div>

        <div class="wave-container register-wave">
          <svg width="402" height="282" viewBox="0 0 402 282" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 78.1413L418 22V297.344L0 327V78.1413Z" fill="#00CDCD" fill-opacity="0.58"/>
            <path d="M-4 0.5L402 157V314.5H-4V0.5Z" fill="#00CDCD" fill-opacity="0.58"/>
          </svg>
          <button class="figma-button login">LET'S GO</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonItem, IonInput, IonIcon } from '@ionic/vue';
import { arrowBack, mailOutline, lockClosedOutline } from 'ionicons/icons';
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

.register-content {
  margin-top: 60px;
  width: 100%;
}

.register-title {
  text-align: center;
  font-size: 20px;
  font-family: KoHo;
  line-height: 1.5;
  margin-bottom: 32px;
  color: black;
}

.register-subtitle {
  text-align: center;
  font-size: 18px;
  font-family: KoHo;
  color: black;
  margin-bottom: 24px;
  position: relative;
}

.register-subtitle::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 2px;
  background-color: black;
}

.register-wave {
  margin-top: auto;
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

.figma-button.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  color: white;
  padding: 100px 153px;
  font-size: 32px;
  cursor: pointer;
  font-family: Konkhmer_Sleokchher;
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
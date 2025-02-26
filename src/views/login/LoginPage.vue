<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="div-class">
        <div>
          <img src="..//..//..//BLS_Group.png" alt="BLUSHARE" class="logo-blueshare"/>
        </div>

        <h2 class="figma-text-color login-title">Log In</h2>

        <div class="centered-content">
          <ion-item class="custom-input">
            <ion-icon class="input-icon"></ion-icon>
            <ion-input label="" type="text" placeholder="Username"></ion-input>
          </ion-item>

          <ion-item class="custom-input">
            <ion-icon class="input-icon"></ion-icon>
            <ion-input label="" type="password" placeholder="Password"></ion-input>
          </ion-item>

          <ion-item lines="none" class="remember-me">
            <ion-checkbox>Remember me!</ion-checkbox>
          </ion-item>

          <div class="gap-button">
            <router-link to="/register">
              <button class="figma-button">Register</button>
            </router-link>
            <router-link to="/forgot-password">
              <button class="figma-button">Forgot Password</button>
            </router-link>
          </div>
        </div>

        <div class="wave-container">
          <svg width="402" height="282" viewBox="0 0 402 282" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 78.1413L418 22V297.344L0 327V78.1413Z" fill="#00CDCD" fill-opacity="0.58"/>
            <path d="M-4 0.5L402 157V314.5H-4V0.5Z" fill="#00CDCD" fill-opacity="0.58"/>
          </svg>
          <router-link to="/feed-page">
            <button class="figma-button login">BEGIN EXPLORING</button>
          </router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<style lang="css">
  /* fuck yes */
  
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

  .remember-me {
    --background: transparent;
    --border-width: 0;
    color: black;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  .centered-content {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }

  /* pain */

  .div-class {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .figma-button {
    background-color: #81b3e1;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 12px;
    cursor: pointer;
    font-family: KoHo;
  }

  .wave-container {
    position: relative;
    width: fit-content;
    height: fit-content;
  }

  .figma-button.login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ff000000;
    color: rgb(255, 255, 255);
    padding: 100px 153px;
    font-size: 32px;
    cursor: pointer;
    font-family: Konkhmer_Sleokchher;
  }

  .figma-text-color {
    color: black;
  }

  .logo-blueshare {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .gap-button {
    display: flex;
    justify-content: left;
    margin-top: 20px;
    gap: 5%;
  }

  .login-title {
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    position: relative;
    padding-bottom: 10px;
    margin: 0 auto 10px;
    border-bottom: 2px solid black;
    display: block;
    width: 300px;
  }

  /* fuentes */

  @font-face {
    font-family: KoHo;
    src: url("/src/assets/fonts/KoHo/KoHo-Regular.ttf");
  }

  @font-face {
    font-family: Konkhmer_Sleokchher;
    src: url("/src/assets/fonts/Konkhmer_Sleokchher/KonkhmerSleokchher-Regular.ttf");
  }
</style>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { RouterLink } from 'vue-router';
</script>
<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-card class="card">
        <div>
          <img src="..//..//..//BLS_Group.png" alt="BLUSHARE" class="logo-blueshare"/>
        </div>

        <ion-card-header>
          <ion-card-title class="figma-text-color login-title">Log In</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <div class="centered-content">
            <ion-item>
              <ion-input label="Username" type="text" placeholder="Enter username"></ion-input>
            </ion-item>

            <ion-item>
              <ion-input label="Password" type="password" placeholder="Enter password"></ion-input>
            </ion-item>

            <ion-item>
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

        </ion-card-content>
        <div class="wave-container">
          <svg width="402" height="282" viewBox="0 0 402 282" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 78.1413L418 22V297.344L0 327V78.1413Z" fill="#00CDCD" fill-opacity="0.58"/>
            <path d="M-4 0.5L402 157V314.5H-4V0.5Z" fill="#00CDCD" fill-opacity="0.58"/>
          </svg>
          <router-link to="/feed-page">
            <button class="figma-button login">BEGIN EXPLORING</button>
          </router-link>
        </div>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<style lang="css">
  /* whatever */
  
  .card {
    max-width: 350px;
    max-height: auto;
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

  .figma-button.login {
    position: absolute;
    top: 63%;
    left: -20%;
    transform: rotate(-7.75deg);
    background-color: #ff000000;
    color: white;
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
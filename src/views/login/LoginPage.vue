<template>
  <ion-page>
    <ion-toolbar>
      <ion-title class="ion-text-left">Login at BlueShare</ion-title>
    </ion-toolbar>
    <ion-content class="ion-padding">
      <div class="ion-text-center">
        <img src="..//..//..//BLS_Group.png" alt="BLUSHARE" />
      </div>

      <ion-card class="card">
        <ion-card-header>
          <ion-card-title>Log In</ion-card-title>
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

            <ion-button expand="full">Login</ion-button>

            <router-link to="/register">
              <ion-button expand="full">Register</ion-button>
            </router-link>

            <router-link to="/forgot-password">
              <ion-button expand="full">Forgot Password</ion-button>
            </router-link>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style lang="css">
  .card {
    max-width: 350px;
    max-height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
</script>
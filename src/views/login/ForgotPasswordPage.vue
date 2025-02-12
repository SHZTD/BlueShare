<template>
    <ion-page>
      <ion-toolbar>
        <ion-title class="ion-text-left">Forgot your password?</ion-title>
      </ion-toolbar>
      <ion-content class="ion-padding">
        <p>
          Please enter your real email registered to receive a link to update your password.
        </p>
  
        <ion-card>
          <ion-card-content>
            <ion-item>
              <ion-input type="email" placeholder="i_love_jt@fuck.yea"></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-checkbox>It is me legitimately recovering my pass</ion-checkbox>
            </ion-item>
  
            <router-link to="/home">
                <ion-button expand="full">Recover my password</ion-button>
                <ion-button expand="full">Back</ion-button>
            </router-link>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
</script>
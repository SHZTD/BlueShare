<template>
  <ion-page>
    <ion-header :translucent="true"/>
    <ion-content :fullscreen="true">
        <ion-content>
          <LoginPage>
              <!-- 
                Login page va aqui
              -->
          </LoginPage>
        </ion-content>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import LoginPage from './login/LoginPage.vue';
</script>
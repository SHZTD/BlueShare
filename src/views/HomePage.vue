<template>
  <ion-page>
    <ion-header :translucent="true"/>
    <ion-content :fullscreen="true">
        <ion-content>
          <LoginPage/>
        </ion-content>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage } from '@ionic/vue';

// main shit
import LoginPage from './login/LoginPage.vue';
import SearchBar from './main/SearchBar.vue';
// import Video1Page from './video/Video1Page.vue';

// carga paginas de debug para no ir a verlas todas de golpe
/*
  import Video1Page from './video/Video1Page.vue';
  import Video2Page from './video/Video2Page.vue';
  import HelpPage1 from './settings/HelpPage1.vue';
  import SettingsPage1 from './settings/SettingsPage1.vue';
  import ForgotPasswordPage from './login/ForgotPasswordPage.vue';
  import FeedPage from './main/FeedPage.vue';
  import RegisterPage from './login/RegisterPage.vue';
  import UnavailableVideo from './video/UnavailableVideo.vue';
*/
</script>
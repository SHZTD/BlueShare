<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button>
                <ion-icon :icon="arrowBack"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-searchbar placeholder="Search for any video..."></ion-searchbar>
          <ion-buttons slot="end">
            <ion-button>
              <ion-icon :icon="settingsOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <ion-content fullscreen>
        <ion-list>
          <ion-card @click="openVideo('Video1Page')">
            <img src="/src/assets/imatge2.png"></img>
            <ion-card-header>
              <ion-card-title>Mike Tyson VS Evander Holyfield</ion-card-title>
            </ion-card-header>
          </ion-card>
  
          <ion-card @click="openVideo('video2')">
            <img src="/src/assets/hq720 1.png"></img>
            <ion-card-header>
              <ion-card-title>Sparring and Training with Khabib, full training video.</ion-card-title>
            </ion-card-header>
          </ion-card>

          <ion-card @click="openVideo('video3')">
            <img src="/src/assets/hq720 2.png"></img>
            <ion-card-header>
              <ion-card-title>Liquicity yearmix DnB 2016 1 hour</ion-card-title>
            </ion-card-header>
          </ion-card>


          <ion-card @click="openVideo('video4')">
            <img src="/src/assets/hq720 3.png"></img>
            <ion-card-header>
              <ion-card-title>Khabib wants to fight Connor McGregor in street</ion-card-title>
              <ion-card-subtitle>Full training video.</ion-card-subtitle>
            </ion-card-header>
          </ion-card>

          <ion-card @click="openVideo('video5')">
            <img src="/src/assets/hq720 4.png"></img>
            <ion-card-header>
              <ion-card-title>The Grefg in the everest</ion-card-title>
              <ion-card-subtitle>Full training video.</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
        </ion-list>
      </ion-content>
  
      <ion-footer>
        <ion-toolbar>
          <ion-tab-bar>
            <ion-tab-button tab="explore">
              <ion-icon :icon="compassOutline"></ion-icon>
              <ion-label>Explore</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="settings">
              <ion-icon :icon="optionsOutline"></ion-icon>
              <ion-label>Settings</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="watch">
              <ion-icon :icon="videocamOutline"></ion-icon>
              <ion-label>Watch</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="upload">
              <ion-icon :icon="cloudUploadOutline"></ion-icon>
              <ion-label>Upload</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
  </template>
  
<script setup>
  import { useRouter } from 'vue-router';
  import { arrowBack, settingsOutline, compassOutline, optionsOutline, videocamOutline, cloudUploadOutline } from 'ionicons/icons';
  
  const router = useRouter();
  
  const goBack = () => {
    router.push('/home');
  };
  
  const openVideo = (id) => {
    router.push(`/video/${id}`);
  };
</script>

<style lang="css">
  .content {
    max-width: 350px;
    margin: 0 auto; /* Centra horizontalmente */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Si quieres centrar verticalmente, asegúrate de ocupar toda la altura disponible */
    height: 100%;
    justify-content: center;
  }
</style>
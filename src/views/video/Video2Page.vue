<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="goBack">
              <ion-icon :icon="arrowBack"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-searchbar placeholder="Search for any video..."></ion-searchbar>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-img src="/src/assets/imatge2.png"></ion-img>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Mike Tyson VS Evander Holyfield</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Description of the video</strong></p>
            <p>
              Professional American heavyweight boxer Mike Tyson (45–1, 39 KO) against skilled and strong undisputed champion Evander Holyfield.
            </p>
            <ion-button expand="block" color="primary">Follow</ion-button>
          </ion-card-content>
        </ion-card>
  
        <ion-card>
          <ion-card-header>
            <ion-card-title>Comments about the video</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-textarea placeholder="Share your comment..."></ion-textarea>
            <ion-list>
              <ion-item>
                <ion-label>Holyfield had the heart of a lion. Tyson was a beast, but Evander was a legend.</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Tyson was unstoppable until he met Holyfield. That was an upset for the ages.</ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
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
  import { arrowBack, compassOutline, optionsOutline, videocamOutline, cloudUploadOutline } from 'ionicons/icons';
  
  const router = useRouter();
  
  const goBack = () => {
    router.back();
  };
  </script>
  
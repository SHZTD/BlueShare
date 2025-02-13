<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <router-link to="">
                
            </router-link>
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
  
      <ion-content>
        <ion-list>
          <ion-card @click="openVideo('Video1Page.vue')">
            <ion-img src="/assets/imatge2.png"></ion-img>
            <ion-card-header>
              <ion-card-title>Mike Tyson VS Evander Holyfield</ion-card-title>
            </ion-card-header>
          </ion-card>
  
          <ion-card @click="openVideo('khabib')">
            <ion-img src="/assets/imatge3.png"></ion-img>
            <ion-card-header>
              <ion-card-title>Sparring and Training with Khabib</ion-card-title>
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
    router.back();
  };
  
  const openVideo = (id) => {
    router.push(`/video/${id}`);
  };
</script>
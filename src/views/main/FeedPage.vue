<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="feed-container">
        <!-- Header -->
        <div class="header">
          <router-link to="/home" class="back-button">
            <ion-icon :icon="arrowBack" size="large"></ion-icon>
            <span>Back</span>
          </router-link>
          <router-link to="/settings" class="settings-button">
            <ion-icon :icon="settings" size="large"></ion-icon>
          </router-link>
        </div>

        <!-- Search Bar -->
        <div class="search-container">
          <router-link to="/search-video">
            <ion-item class="search-bar">
              <ion-icon :icon="searchOutline" class="search-icon"></ion-icon>
              <ion-input placeholder="Search for any video..."></ion-input>
            </ion-item>
          </router-link>
        </div>

        <!-- Video Feed -->
        <div class="video-feed">
          <!-- Video Card 1 -->
          <div class="video-card" @click="navigateToVideo('video1')">
            <img src="@/assets/imatge3.png" alt="Mike Tyson VS Evander Holyfield" class="video-thumbnail"/>
            <div class="video-title">Mike Tyson VS Evander Holyfield</div>
          </div>

          <!-- Video Card 2 -->
          <div class="video-card" @click="navigateToVideo('video2')">
            <img src="@/assets/hq720 1.png" alt="Sparring and Training with Khabib" class="video-thumbnail"/>
            <div class="video-title">Sparring and Training with Khabib , full training video.</div>
          </div>

          <!-- Video Card 3 -->
          <div class="video-card" @click="navigateToVideo('unavailable')">
            <img src="@/assets/hq720 3.png" alt="Khabib Interview" class="video-thumbnail"/>
            <div class="video-title">Khabib wants to fight Conor McGregor in the streets.</div>
          </div>

          <!-- Video Card 4 -->
          <div class="video-card" @click="navigateToVideo('unavailable')">
            <img src="@/assets/hq720 2.png" alt="Liquicity" class="video-thumbnail"/>
            <div class="video-title">Liquicity 2016 Yearmix music</div>
          </div>

          <!-- Video Card 5 -->
          <div class="video-card" @click="navigateToVideo('unavailable')">
            <img src="@/assets/hq720 4.png" alt="Grefg" class="video-thumbnail"/>
            <div class="video-title">The Grefg exploring the Everest!</div>
          </div>
        </div>

        <!-- Bottom Navigation -->
        <div class="bottom-nav">
          <div class="nav-item active" @click="navigateTo('explore')">
            <ion-icon :icon="compass"></ion-icon>
            <span>Explore</span>
          </div>
          <div class="nav-item" @click="navigateTo('settings')">
            <ion-icon :icon="options"></ion-icon>
            <span>Settings</span>
          </div>
          <div class="nav-item" @click="navigateTo('watch')">
            <ion-icon :icon="tv"></ion-icon>
            <span>Watch</span>
          </div>
          <div class="nav-item" @click="navigateTo('upload')">
            <ion-icon :icon="cloudUpload"></ion-icon>
            <span>Upload</span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonItem, IonInput, IonIcon } from '@ionic/vue';
import { 
  arrowBack, 
  settings, 
  searchOutline,
  compass,
  options,
  tv,
  cloudUpload
} from 'ionicons/icons';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToVideo = (videoId: string) => {
  router.push(`/${videoId}`);
};

const navigateTo = (route: string) => {
  switch (route) {
    case 'explore':
      router.push('/feed-page');
      break;
    case 'settings':
      router.push('/settings');
      break;
    case 'watch':
      router.push('/video2');
      break;
    case 'upload':
      router.push('/upload');
      break;
    default:
      console.error('Unknown route:', route);
  }
};
</script>

<style scoped>
.feed-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  background-color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.back-button, .settings-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-family: KoHo;
}

.search-container {
  margin-bottom: 20px;
}

.search-bar {
  --background: #f1f1f1;
  --border-radius: 20px;
  --padding-start: 16px;
  --padding-end: 16px;
  --border-width: 0;
  --highlight-height: 0;
}

.search-icon {
  color: #666;
  margin-right: 8px;
}

.video-feed {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 70px;
}

.video-card {
  position: relative;
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.video-thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.video-title {
  padding: 12px;
  font-family: KoHo;
  font-size: 14px;
  color: black;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  padding: 12px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  font-family: KoHo;
  font-size: 12px;
  cursor: pointer;
}

.nav-item.active {
  color: #00CDCD;
}

.nav-item ion-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

@font-face {
  font-family: KoHo;
  src: url("/src/assets/fonts/KoHo/KoHo-Regular.ttf");
}

@font-face {
  font-family: Konkhmer_Sleokchher;
  src: url("/src/assets/fonts/Konkhmer_Sleokchher/KonkhmerSleokchher-Regular.ttf");
}
</style>
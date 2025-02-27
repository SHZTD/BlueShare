<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="goBack">
            <ion-icon :icon="arrowBack"></ion-icon>
            Back
          </ion-button>
        </ion-buttons>
        <ion-searchbar placeholder="Search for any video..." class="custom-searchbar"></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="video-container">
        <!-- Video Thumbnail -->
        <div class="video-thumbnail">
          <ion-img src="/src/assets/imatge3.png" alt="Mike Tyson VS Evander Holyfield"></ion-img>
          <div class="video-title">Mike tyson VS Evander Holyfield</div>
        </div>

        <!-- Description Section -->
        <div class="description-section">
          <div class="section-header">
            <h2>Description of the video</h2>
            <ion-button 
              :class="['custom-follow-btn', { 'following': isFollowing }]"
              @click="toggleFollow"
            >
              {{ isFollowing ? 'Following' : 'Follow' }}
            </ion-button>
          </div>
          <p class="description-text">
            Professional American heavyweight boxer Mike Tyson (45–1, 39 KO) against skilled and strong undisputed champion Evander Holyfield.
          </p>
        </div>

        <!-- Comments Section -->
        <div class="comments-section">
          <h2>Comments about the video</h2>
          
          <div class="comment-input-container">
            <input 
              type="text" 
              placeholder="Share your comment..."
              class="comment-input"
            >
          </div>

          <div class="comments-list">
            <div class="comment-item">
              <p>Holyfield had the heart of a lion. Tyson was a beast, but Evander was a legend.</p>
            </div>
            <div class="comment-item">
              <p>Tyson was unstoppable until he met Holyfield. That was an upset for the ages.</p>
            </div>
          </div>
        </div>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-tab-bar>
          <ion-tab-button @click="goToFeed">
            <ion-icon :icon="compass"></ion-icon>
            <ion-label>Explore</ion-label>
          </ion-tab-button>
          <ion-tab-button @click="goToSettings">
            <ion-icon :icon="settings"></ion-icon>
            <ion-label>Settings</ion-label>
          </ion-tab-button>
          <ion-tab-button>
            <ion-icon :icon="tv"></ion-icon>
            <ion-label>Watch</ion-label>
          </ion-tab-button>
          <ion-tab-button>
            <ion-icon :icon="cloudUpload"></ion-icon>
            <ion-label>Upload</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonSearchbar,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonImg
} from '@ionic/vue';
import { arrowBack, settings, compass, tv, cloudUpload } from 'ionicons/icons';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isFollowing = ref(false);

const goBack = () => {
  router.back();
};

const goToFeed = () => {
  router.push('/feed');
};

const goToSettings = () => {
  router.push('/settings');
};

const toggleFollow = () => {
  isFollowing.value = !isFollowing.value;
};
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.video-thumbnail {
  position: relative;
  width: 100%;
}

.video-thumbnail ion-img {
  width: 100%;
  height: auto;
  display: block;
}

.video-title {
  padding: 12px 16px;
  font-family: KoHo;
  font-size: 14px;
  color: black;
}

.description-section,
.comments-section {
  padding: 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

h2 {
  font-family: KoHo;
  font-size: 16px;
  color: black;
  margin: 0;
}

.description-text {
  font-family: KoHo;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  margin: 0;
}

.custom-follow-btn {
  --border-radius: 16px;
  --border-color: black;
  --border-width: 2px;
  --border-style: solid;
  --background: white;
  --color: black;
  --padding-start: 24px;
  --padding-end: 24px;
  --box-shadow: none;
  margin: 0;
  height: 36px;
  font-family: KoHo;
  text-transform: none;
}

.custom-follow-btn:hover {
  --background: #E6F4FF;
}

.custom-follow-btn.following {
  --background: #00CDCD;
}

.custom-follow-btn.following:hover {
  --background: #00B3B3;
}

.comment-input-container {
  margin: 16px 0;
}

.comment-input {
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 20px;
  background: #f1f1f1;
  font-family: KoHo;
  font-size: 14px;
  color: #333;
}

.comment-input::placeholder {
  color: #666;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.comment-item {
  background: #f1f1f1;
  border-radius: 8px;
  padding: 12px 16px;
}

.comment-item p {
  font-family: KoHo;
  font-size: 14px;
  color: #333;
  margin: 0;
}

/* Header Styles */
ion-toolbar {
  --background: white;
}

.custom-searchbar {
  --background: #f1f1f1;
  --border-radius: 20px;
  --placeholder-color: #666;
  --icon-color: #666;
  --box-shadow: none;
  font-family: KoHo;
}

/* Footer Styles */
ion-tab-bar {
  --background: white;
  --border: 0;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

ion-tab-button {
  --color: #666;
  --color-selected: #00CDCD;
  font-family: KoHo;
}

@font-face {
  font-family: KoHo;
  src: url("/src/assets/fonts/KoHo/KoHo-Regular.ttf");
}
</style>
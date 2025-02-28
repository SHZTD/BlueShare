<template>
    <ion-page class="video-player-page">
      <div class="video-container">
        <!-- Video Player -->
        <div class="video-content">
          <img src="/src/assets/imatge1.png" alt="Mike Tyson VS Evander Holyfield" class="video-image"/>
          
          <!-- Video Controls Overlay -->
          <div class="video-controls">
            <!-- Top Controls -->
            <div class="top-controls">
              <div class="back-button" @click="goBack">
                <ion-icon :icon="arrowBack"></ion-icon>
                <span>Back</span>
                <div class="swipe-hint">or swipe right</div>
              </div>
            </div>
  
            <!-- Bottom Controls -->
            <div class="bottom-controls">
              <div class="controls-row">
                <div class="left-controls">
                  <ion-button fill="clear" class="control-button">
                    <ion-icon :icon="playCircle"></ion-icon>
                  </ion-button>
                  <span class="time-display">06:09</span>
                </div>
                
                <div class="right-controls">
                  <ion-button fill="clear" class="control-button" @click="goBack">
                    <ion-icon :icon="contract"></ion-icon>
                  </ion-button>
                </div>
              </div>
              
              <!-- Progress Bar -->
              <div class="progress-container">
                <div class="progress-bar">
                  <div class="progress-filled" style="width: 15%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonButton, IonIcon } from '@ionic/vue';
  import { arrowBack, playCircle, contract } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goBack = () => {
    router.back();
  };
  </script>
  
  <style scoped>
  .video-player-page {
    background: black;
  }
  
  .video-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .video-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .video-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .video-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.5) 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
  }
  
  .top-controls {
    padding-top: env(safe-area-inset-top);
  }
  
  .back-button {
    display: flex;
    align-items: center;
    color: white;
    font-family: KoHo;
    gap: 4px;
    cursor: pointer;
  }
  
  .swipe-hint {
    font-size: 12px;
    opacity: 0.8;
    margin-left: 4px;
  }
  
  .bottom-controls {
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  .controls-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .left-controls, .right-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .control-button {
    --padding-start: 8px;
    --padding-end: 8px;
    --color: white;
    margin: 0;
  }
  
  .time-display {
    color: white;
    font-family: KoHo;
    font-size: 14px;
  }
  
  .progress-container {
    width: 100%;
    padding: 0 4px;
  }
  
  .progress-bar {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    overflow: hidden;
  }
  
  .progress-filled {
    height: 100%;
    background: #00CDCD;
    border-radius: 2px;
  }
  
  @font-face {
    font-family: KoHo;
    src: url("/src/assets/fonts/KoHo/KoHo-Regular.ttf");
  }
  </style>
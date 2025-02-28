<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="upload-container">
          <!-- Header -->
          <div class="header">
            <ion-button fill="clear" class="back-button" @click="goBack">
              <ion-icon :icon="arrowBack" size="large"></ion-icon>
              <span>Back</span>
            </ion-button>
          </div>
  
          <!-- Main Content -->
          <div class="content-wrapper">
            <!-- Upload Illustration -->
            <div class="upload-illustration">
              <ion-icon :icon="cloudUploadOutline" class="upload-icon"></ion-icon>
              <div class="pulse-circle"></div>
            </div>
  
            <!-- Upload Text -->
            <div class="upload-text">
              <h1>Ready to share your content?</h1>
              <p>You currently have no videos published.</p>
              <p class="highlight">Start your journey today!</p>
            </div>
  
            <!-- Upload Actions -->
            <div class="upload-actions">
              <div 
                class="drop-zone"
                @dragover.prevent
              >
                <ion-icon :icon="cloudUpload"></ion-icon>
                <p>Drag & drop your video here</p>
                <span>or</span>
                <ion-button 
                  class="upload-button"
                >
                  <ion-icon :icon="cloudUpload" slot="start"></ion-icon>
                  Upload Video
                </ion-button>
              </div>
  
              <!-- Upload Tips -->
              <div class="upload-tips">
                <h3>Quick Tips:</h3>
                <ul>
                  <li>
                    <ion-icon :icon="checkmarkCircle" class="tip-icon"></ion-icon>
                    Maximum file size: 2GB
                  </li>
                  <li>
                    <ion-icon :icon="checkmarkCircle" class="tip-icon"></ion-icon>
                    Supported formats: MP4, MOV, AVI
                  </li>
                  <li>
                    <ion-icon :icon="checkmarkCircle" class="tip-icon"></ion-icon>
                    Recommended resolution: 1080p or higher
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- Bottom Navigation -->
          <div class="bottom-nav">
            <div class="nav-item" @click="navigateTo('explore')">
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
            <div class="nav-item active" @click="navigateTo('upload')">
              <ion-icon :icon="cloudUpload"></ion-icon>
              <span>Upload</span>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonContent, IonButton, IonIcon } from '@ionic/vue';
  import { 
    arrowBack,
    cloudUpload,
    cloudUploadOutline,
    compass,
    options,
    tv,
    checkmarkCircle
  } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goBack = () => {
    router.back();
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
  
  /* its time to go drugs */
  <style scoped>
  .upload-container {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 16px;
    background-color: white;
  }
  
  .header {
    margin-bottom: 24px;
  }
  
  .back-button {
    --padding-start: 0;
    --padding-end: 0;
    --color: black;
    font-family: KoHo;
    font-size: 16px;
  }
  
  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 70px;
  }
  
  .upload-illustration {
    position: relative;
    margin-bottom: 32px;
  }
  
  .upload-icon {
    font-size: 120px;
    color: #00CDCD;
  }
  
  .pulse-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(0, 205, 205, 0.1);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.95);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.05);
      opacity: 0.2;
    }
    100% {
      transform: translate(-50%, -50%) scale(0.95);
      opacity: 0.5;
    }
  }
  
  .upload-text {
    margin-bottom: 32px;
  }
  
  .upload-text h1 {
    font-family: KoHo;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .upload-text p {
    font-family: KoHo;
    font-size: 16px;
    color: #666;
    margin: 4px 0;
  }
  
  .upload-text .highlight {
    color: #00CDCD;
    font-weight: bold;
  }
  
  .upload-actions {
    width: 100%;
    max-width: 500px;
  }
  
  .drop-zone {
    border: 2px dashed #00CDCD;
    border-radius: 16px;
    padding: 32px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 24px;
  }
  
  .drop-zone:hover {
    background-color: rgba(0, 205, 205, 0.05);
  }
  
  .drop-zone ion-icon {
    font-size: 48px;
    color: #00CDCD;
    margin-bottom: 16px;
  }
  
  .drop-zone p {
    font-family: KoHo;
    font-size: 16px;
    color: #666;
    margin-bottom: 8px;
  }
  
  .drop-zone span {
    font-family: KoHo;
    font-size: 14px;
    color: #999;
    display: block;
    margin-bottom: 16px;
  }
  
  .upload-button {
    --background: #00CDCD;
    --border-radius: 24px;
    --padding-start: 24px;
    --padding-end: 24px;
    font-family: KoHo;
  }
  
  .upload-tips {
    text-align: left;
    padding: 16px;
    background: #f8f8f8;
    border-radius: 12px;
  }
  
  .upload-tips h3 {
    font-family: KoHo;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  
  .upload-tips ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .upload-tips li {
    font-family: KoHo;
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .tip-icon {
    color: #00CDCD;
    margin-right: 8px;
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
  </style>
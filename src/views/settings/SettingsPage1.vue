<template>
  <ion-page>
    <ion-content class="ion-padding" :scroll-y="true" ref="contentRef">
      <div class="settings-container" ref="swipeElement">
        <div class="swipe-content">
          <!-- Header -->
          <div class="header">
            <div class="logo-container">
                <div>
                  <img src="..//..//..//BLS_Group.png" alt="BLUSHARE" class="logo-blueshare"/>
                </div>
              <div class="subtitle">Settings menu</div>
            </div>
          </div>

          <!-- Search -->
          <ion-searchbar
            placeholder="Search any keyword..."
            :clear-icon="close"
            class="custom-searchbar"
          ></ion-searchbar>

          <div class="manual-text">Or manually lookup for it</div>

          <!-- Settings List -->
          <ion-list lines="full" class="settings-list">
            <ion-item button @click="navigateToHelp">
              <ion-label>Help</ion-label>
            </ion-item>
            
            <ion-item button>
            <ion-label>Reset Layout</ion-label>
          </ion-item>
          
            <ion-item button>
              <ion-label>Manage Videos</ion-label>
            </ion-item>
            
            <ion-item button>
              <ion-label>Check my channel</ion-label>
            </ion-item>
            
            <ion-item button>
              <ion-label>Report a video</ion-label>
            </ion-item>
            
            <ion-item button>
              <ion-label>Enter test mode</ion-label>
            </ion-item>
            
            <ion-item button>
              <ion-label>Log off all devices</ion-label>
            </ion-item>
            
            <ion-item button class="change-password">
              <ion-label color="danger">Change Password</ion-label>
            </ion-item>
          </ion-list>

          <!-- Warning Text -->
          <div class="warning-text">
            Remember that some<br/>
            of the changes you might do in<br/>
            settings might give some<br/>
            unintended behavior if you're<br/>
            not documented about the<br/>
            application.
          </div>

          <!-- Back Button / Swipe Hint -->
          <div class="back-text swipe-hint">
            <ion-icon :icon="arrowBack"></ion-icon>
            BACK<br/>
            or swipe right
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  createGesture,
} from '@ionic/vue';
import { playCircle, close, arrowBack } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const contentRef = ref();
const swipeElement = ref();
const swipeContent = ref();

const navigateToHelp = () => {
  router.push('/settings/help');
};

onMounted(() => {
  if (swipeElement.value) {
    const gesture = createGesture({
      el: swipeElement.value,
      threshold: 15,
      gestureName: 'swipe-back',
      onStart: () => {
        swipeElement.value.style.transition = 'transform 0s';
      },
      onMove: (detail) => {
        if (detail.deltaX > 0) { // Permitir solo swipe a la derecha
          swipeElement.value.style.transform = `translateX(${detail.deltaX}px)`;
        }
      },
      onEnd: (detail) => {
        swipeElement.value.style.transition = 'transform 0.3s ease-out';
        if (detail.deltaX > window.innerWidth / 3) {
          // Si se desliza más de 1/3 del ancho de la pantalla, navegar hacia '/feed'
          swipeElement.value.style.transform = `translateX(${window.innerWidth}px)`;
          setTimeout(() => {
            router.back();
          }, 300);
        } else {
          // Si no, se resetea la posición
          swipeElement.value.style.transform = 'translateX(0)';
        }
      },
    });
    gesture.enable(true);
  }
});
</script>

<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 20px;
  background-color: white;
  touch-action: pan-x; /* Permite scroll vertical y swipe horizontal */
}

.swipe-content {
  /* Aquí puedes agregar cualquier estilo adicional para el área que maneja el swipe */
  overflow: hidden; /* Asegura que el swipe no afecte el scroll */
}

.header {
  margin-bottom: 24px;
}

.logo-container {
  text-align: left;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 32px;
  color: #007AFF;
}

.logo-text {
  font-family: KoHo;
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.subtitle {
  font-family: KoHo;
  font-size: 16px;
  color: black;
  margin-top: 4px;
}

.custom-searchbar {
  --background: #f1f1f1;
  --border-radius: 20px;
  --placeholder-color: #666;
  --icon-color: #666;
  --box-shadow: none;
  margin-bottom: 8px;
  font-family: KoHo;
}

.manual-text {
  font-family: KoHo;
  font-size: 14px;
  color: black;
  margin-bottom: 24px;
  text-align: center;
}

.settings-list {
  background: transparent;
  margin-bottom: 24px;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --background: transparent;
  --border-color: #ddd;
  font-family: KoHo;
}

ion-item::part(native) {
  padding: 16px 0;
}

.change-password ion-label {
  color: #ff4961;
}

.warning-text {
  font-family: KoHo;
  font-size: 14px;
  color: black;
  text-align: center;
  line-height: 1.5;
  margin: 24px 0;
}

.back-text {
  font-family: KoHo;
  font-size: 14px;
  color: black;
  text-align: center;
  line-height: 1.5;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.back-text ion-icon {
  font-size: 20px;
}

/* Animación para sugerencia de swipe */
.swipe-hint {
  animation: swipeHint 1.5s ease-in-out infinite;
}

@keyframes swipeHint {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

@font-face {
  font-family: KoHo;
  src: url("/src/assets/fonts/KoHo/KoHo-Regular.ttf");
}

/* Otros estilos... */
</style>

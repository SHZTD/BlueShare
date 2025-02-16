<template>
    <ion-page>
      <!-- Encabezado -->
      <ion-header>
        <ion-toolbar>
          <ion-title>Blushare Help menu</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <!-- Contenido con scroll -->
      <ion-content>
        <!-- Barra de búsqueda -->
        <ion-searchbar placeholder="Search any keyword..."></ion-searchbar>
  
        <!-- Texto intermedio -->
        <div class="manual-lookup">Or manually lookup for it</div>
  
        <!-- Lista de opciones -->
        <ion-list>
          <ion-item>
            <ion-label>Account standing</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>About the app</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Blushare ToS</ion-label>
          </ion-item>
  
          <!-- Separador -->
          <ion-item-divider>
            <ion-label>Guides</ion-label>
          </ion-item-divider>
  
          <ion-item>
            <ion-label>How to save video</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>How to hide IDs</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>How to reset</ion-label>
          </ion-item>
        </ion-list>
  
        <!-- Nota al final -->
        <p class="help-note">
          If you are looking up for actual settings, you can go back to
          the previous window. You will find more detailed information there.
        </p>
  
        <!-- Texto de volver atrás -->
        <div class="back-text">
          BACK or swipe right
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .manual-lookup {
    margin: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  .help-note {
    margin: 1rem;
    font-size: 0.8rem;
    color: #666;
    line-height: 1.4;
  }
  
  .back-text {
    text-align: center;
    margin: 2rem 0 1rem;
    font-weight: bold;
  }
</style> 
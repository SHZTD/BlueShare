<template>
    <ion-page>
      <!-- Encabezado -->
      <ion-header>
        <ion-toolbar>
          <ion-title>Blushare Settings menu</ion-title>
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
            <ion-label>Help</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Reset Layout</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Manage Videos</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Check my channel</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Manage a device</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Enter test mode</ion-label>
          </ion-item>
          
          <!-- Separador -->
          <ion-item-divider>
            <ion-label>Security</ion-label>
          </ion-item-divider>
          
          <ion-item>
            <ion-label>Change Password</ion-label>
          </ion-item>
        </ion-list>
  
        <!-- Nota al final -->
        <p class="settings-note">
          Remember that some of the changes you might do in settings might not be undone
          if something goes wrong. Proceed with caution.
        </p>
  
        <!-- Texto de volver atrás -->
        <div class="back-text">
          BACK or swipe right
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  // No es obligatorio poner nada aquí si no necesitas lógica específica
  </script>
  
  <style scoped>
  .manual-lookup {
    margin: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  .settings-note {
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
  
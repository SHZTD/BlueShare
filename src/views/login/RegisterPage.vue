<template>
    <ion-page>
      <ion-toolbar>
        <ion-title class="ion-text-left">Register your account</ion-title>
      </ion-toolbar>
      <ion-content class="ion-padding">
        <p>Please input your email, a safe password, and you're ready to go :)</p>
  
        <ion-card class="card">
          <ion-card-header>
            <ion-card-title>Register Form</ion-card-title>
          </ion-card-header>
  
          <ion-card-content>
            <div class="centered-content">
              <ion-item>
              <ion-input class="labelColor" type="email" placeholder="i_love_jt@fuck.yea"></ion-input>
              </ion-item>
    
              <ion-item>
                <ion-input type="password" placeholder="Password"></ion-input>
              </ion-item>
    
              <ion-item>
                <ion-input type="password" placeholder="Repeat password..."></ion-input>
              </ion-item>
    
              <router-link to="/home">
                  <ion-button expand="full">Sign Up</ion-button>
                  <ion-button expand="full">Back</ion-button>
              </router-link>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
</template>


<style lang="css">
  .card {
    max-width: 350px;
    max-height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .labelColor {
    margin: left;
    color: aqua;
  }

</style>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
</script>
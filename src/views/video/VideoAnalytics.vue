<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/settings"></ion-back-button>
          </ion-buttons>
          <ion-title>Video Analytics</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-2xl font-bold mb-4">Mike Tyson vs Evander Holyfield</h1>
  
          <!-- Swiper Slider -->
          <swiper
            :modules="[Pagination, Navigation]"
            :slides-per-view="1"
            :space-between="30"
            :pagination="{ clickable: true }"
            :navigation="true"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="bg-white rounded-lg shadow-md p-4">
                <h2 class="text-xl font-semibold mb-2">Viewer Demographics</h2>
                <canvas ref="pieChart"></canvas>
              </div>
            </swiper-slide>
  
            <swiper-slide>
              <div class="bg-white rounded-lg shadow-md p-4">
                <h2 class="text-xl font-semibold mb-2">Views Over Time</h2>
                <canvas ref="barChart"></canvas>
              </div>
            </swiper-slide>
  
            <swiper-slide>
              <div class="bg-white rounded-lg shadow-md p-4">
                <h2 class="text-xl font-semibold mb-2">Top Commenting Countries</h2>
                <canvas ref="horizontalBarChart"></canvas>
              </div>
            </swiper-slide>
          </swiper>
  
          <!-- Stats cards -->
          <div class="mt-8 grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg shadow-md p-4">
              <h3 class="text-lg font-semibold mb-2">Total Views</h3>
              <p class="text-3xl font-bold text-blue-600">1,234,567</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-4">
              <h3 class="text-lg font-semibold mb-2">Total Comments</h3>
              <p class="text-3xl font-bold text-green-600">45,678</p>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/vue'
  import { ref, onMounted } from 'vue'
  
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import SwiperCore, { Pagination, Navigation } from 'swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  
  import Chart from 'chart.js/auto'
  
  SwiperCore.use([Pagination, Navigation])
  
  const pieChart = ref<HTMLCanvasElement | null>(null)
  const barChart = ref<HTMLCanvasElement | null>(null)
  const horizontalBarChart = ref<HTMLCanvasElement | null>(null)
  
  onMounted(() => {
    // Pie Chart
    if (pieChart.value) {
      new Chart(pieChart.value, {
        type: 'pie',
        data: {
          labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
          datasets: [
            {
              data: [15, 30, 25, 18, 12],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Age Distribution',
            },
          },
        },
      })
    }
  
    if (barChart.value) {
      new Chart(barChart.value, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Views',
              data: [65, 59, 80, 81, 56, 55],
              backgroundColor: '#36A2EB',
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })
    }
  
    if (horizontalBarChart.value) {
      new Chart(horizontalBarChart.value, {
        type: 'bar',
        data: {
          labels: ['USA', 'UK', 'Canada', 'Australia', 'Germany'],
          datasets: [
            {
              label: 'Comments',
              data: [12000, 8000, 5000, 4000, 3000],
              backgroundColor: '#FFCE56',
            },
          ],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        },
      })
    }
  })
  </script>
  
  <style scoped>
  /* tailwind */
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  
  .swiper {
    width: 100%;
    height: 400px;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  
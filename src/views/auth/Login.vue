<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid >
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input v-model="email" type="email" required></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password"v-model="password">
                <ion-input-password-toggle slot="end"></ion-input-password-toggle>
              </ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button expand="block" @click="login">Login</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import supabase from '@/data/supabase';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton, alertController } from '@ionic/vue';
import router from "@/router";

const email = ref('');
const password = ref('');
const isActive = ref(true);

const login = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    const alert = await alertController.create({
      header: 'Login Failed',
      message: error.message,
      buttons: ['OK'],
    });
    await alert.present();
  } else {
    
    if (!isActive) {
      const alert = await alertController.create({
        header: 'Account Inactive',
        message: 'Unfortunately, your account is inactive. If you believe this is incorrect, please contact support to resolve this issue.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      await router.push('/');
    }
  }
};
</script>

<style scoped>
</style>
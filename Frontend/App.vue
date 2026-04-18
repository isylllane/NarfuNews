<template>
  <v-app style="min-width: 350px">
    <!-- Шапка сайта - передаем метод для переключения -->
    <NavBar @toggleDrawer="toggleDrawer" />

    <!-- Сайдбар - передаем состояние через v-model -->
    <Sidebar v-model="drawer" />

    <v-main class="bg-grey-lighten-5">
      <v-container fluid>

        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterView } from "vue-router"
import NavBar from "./src/components/UI/NavBar.vue"
import Sidebar from "./src/components/UI/SideBar.vue"

// Состояние сайдбара
const drawer = ref(localStorage.getItem('sidebarState') === 'true' ? true : false)

// Сохраняем состояние при изменении
watch(drawer, (newValue) => {
  localStorage.setItem('sidebarState', newValue)
})

function toggleDrawer() {
    drawer.value = !drawer.value
}
</script>
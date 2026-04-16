<script setup>
import {ref, computed} from 'vue'

// Эмит события для переключения сайдбара
const emit = defineEmits(['toggleDrawer'])

// Поиск
const showSearch = ref(false)
const searchValue = ref('')
const loaded = ref(false)
const loading = ref(false)

const user = {
  lastName: 'Иванов',
  firstName: 'Иван',
  surName: 'Иванович'
}

const fullName = computed(() => {
  return `${user.lastName} ${user.firstName.charAt(0)}. ${user.surName.charAt(0)}.`
})

function onClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}

function closeSearch() {
  showSearch.value = false
  searchValue.value = ''
  loaded.value = false
}

// Переключение сайдбара через эмит
function toggleSidebar() {
  emit('toggleDrawer')
}
</script>

<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon variant="text" @click.stop="toggleSidebar"></v-app-bar-nav-icon>

    <v-toolbar-title>
      <div class="d-flex align-center">
        <v-icon icon="mdi-bullhorn-outline" class="mr-2"></v-icon>
        <span>Новости</span>
      </div>
    </v-toolbar-title>

    <!-- Десктопная версия -->
    <template v-if="$vuetify.display.mdAndUp">
      <v-text-field
          prepend-inner-icon="mdi-magnify"
          density="compact"
          label="Поиск документа"
          variant="solo"
          hide-details
          single-line
          class="search-field-desktop"
      ></v-text-field>

      <v-btn
          class="text-none text-body-large ma-2"
          append-icon="mdi-menu-down"
          size="small"
          variant="text"
      >
        {{ fullName }}
      </v-btn>
    </template>

    <!-- Мобильная версия -->
    <template v-else>
      <v-btn icon="mdi-magnify" variant="text" @click="showSearch = true"></v-btn>
      <v-btn
          icon="mdi-account-circle"
          variant="text"
      ></v-btn>
    </template>

  </v-app-bar>

  <!-- Модальное окно поиска для мобильных -->
  <v-dialog v-model="showSearch" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar color="primary" dark>
        <v-btn icon="mdi-close" @click="closeSearch"></v-btn>
        <v-toolbar-title>Поиск</v-toolbar-title>
      </v-toolbar>

      <v-card-text class="pa-4">
        <v-text-field
            v-model="searchValue"
            :loading="loading"
            append-inner-icon="mdi-magnify"
            density="comfortable"
            label="Поиск документа"
            variant="outlined"
            hide-details
            single-line
            autofocus
            @click:append-inner="onClick"
            @keyup.enter="onClick"
        ></v-text-field>

        <v-list v-if="loaded" class="mt-4">
          <v-list-item>
            <v-list-item-title>Результаты поиска...</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.search-field-desktop {
  max-width: 300px;
  flex: 0 1 300px;
}
</style>
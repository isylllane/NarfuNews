<script setup>
import { computed } from 'vue'
import {useRouter} from "vue-router";
import { useDisplay } from 'vuetify'

const router = useRouter()
const { mobile } = useDisplay()

// Пропсы для v-model
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

// Локальное вычисляемое свойство
const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const items = [
  {
    title: 'Последние новости',
    icon: '$custom-home',
    path: '/',
    value: 'lastNews'
  },
  {
    title: 'Самые просматриваемые',
    icon: '$fire-icon',
    path: '/most-viewed',
    value: 'most_Viewed'
  },
]

// Переход между страницами
const navigate = (path) => {
  router.push(path)
  if (mobile.value) {
    drawer.value = false
  }
}
</script>

<template>
  <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'top' : undefined"
      width="350"
      :class="{ 'mobile-drawer': $vuetify.display.mobile }"
  >
    <v-list>
      <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item.value"
          @click="navigate(item.path)"
          color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
@media (max-width: 959px) {
  .mobile-drawer {
    height: 150px !important;
    max-height: 150px !important;
  }

  .mobile-list {
    max-height: 150px;
    overflow-y: auto;
  }
}
</style>
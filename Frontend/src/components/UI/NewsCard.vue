<template>
  <v-card variant="flat" @click="$emit('click')">
    <!-- Заглушка вместо картинки -->
    <div class="card-image-placeholder d-flex align-center justify-center">
      <v-icon size="40" icon="mdi-newspaper" color="grey-lighten-1"></v-icon>
    </div>

    <v-card-item class="pa-3">
      <div class="text-label-small text-grey mb-2">
        {{ formatDate(news.date) }}
      </div>

      <div class="pa-0 text-label-small font-weight-bold">
        {{ news.newsTitle }}
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
const props = defineProps({
  news: { type: Object, required: true }
})

const emit = defineEmits(['click'])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}
</script>

<style scoped>

.card-image-placeholder {
  background: #f5f5f5;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 4px 4px 0 0;
}

</style>
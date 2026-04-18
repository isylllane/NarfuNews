<template>
  <v-card variant="flat">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <div class="image-placeholder d-flex align-center justify-center">
          <v-icon size="64" icon="mdi-image" color="grey-lighten-1"></v-icon>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <div class="w-md-75 w-100">
          <v-card-item>
            <div class="text-label-small text-grey mb-6">
              {{ formatDate(news.date) }}
            </div>
            <div class="text-label-large font-weight-bold pa-0 mb-3">
              {{ news.newsTitle }}
            </div>

            <v-card-text class="pa-0 mb-8 text-body-1 text-label-small">
              {{ news.newsDescription }}
            </v-card-text>

              <v-btn color="primary" variant="tonal">Читать далее</v-btn>



          </v-card-item>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const props = defineProps({
  news: { type: Object, required: true }
})

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
.image-placeholder {
  background: #f5f5f5;
  min-height: 323px;
}
</style>
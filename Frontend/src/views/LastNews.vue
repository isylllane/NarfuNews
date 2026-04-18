<script setup>
import MainNews from "@/src/components/UI/MainNews.vue"
import NewsCard from "@/src/components/UI/NewsCard.vue"
import { computed } from "vue"
import newsData from "@/../NarfuNewsData.json"

const newsArray = newsData.NewsArray || newsData || []

const mainNews = computed(() => {
  if (!newsArray.length) return null
  const main = newsArray.find(news => news.isMain === true)
  return main || newsArray[0]
})

const otherNews = computed(() => {
  if (!mainNews.value) return newsArray
  return newsArray.filter(news => news.newID !== mainNews.value.newID)
})

const handleNewsClick = (news) => {
  console.log('Клик по новости:', news)
}
</script>

<template>
    <v-row>
      <v-col>
        <div class="text-h3 font-weight-bold text-primary mb-6">
          Последние новости
        </div>
      </v-col>
    </v-row>

    <!-- Главная новость -->
    <v-sheet class="bg-white mb-8 pa-md-4 pa-2">
      <v-row v-if="mainNews">
        <v-col>
          <MainNews :news="mainNews" />
        </v-col>
      </v-row>

      <v-row>
        <v-col
            v-for="news in otherNews"
            :key="news.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
        >
          <NewsCard :news="news" @click="handleNewsClick(news)" />
        </v-col>
      </v-row>

      <v-row v-if="!otherNews.length">
        <v-col>
          <div class="text-center text-grey pa-8">
            <v-icon icon="mdi-newspaper-variant-outline" size="48" class="mb-2"></v-icon>
            <div>Нет новостей</div>
          </div>
        </v-col>
      </v-row>
    </v-sheet>


</template>

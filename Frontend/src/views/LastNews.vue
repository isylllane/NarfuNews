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
Последние новости
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useHomeStore } from "../store/home"

const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)

const addCount = () => count.value++
</script>

<template>
  <div class="about">
    <h2 class="about-title">about</h2>
    <div class="count-wrap">
      <p class="count">count: {{ count }}</p>
      <button @click="addCount">+1</button>
    </div>
  </div>
</template>

<style scoped>
.about {
  border: 1px solid lightblue;
}

.count-wrap {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.count {
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
}
</style>
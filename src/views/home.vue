<script setup>
// 想要让 pinia 的数据在解构之后依然具有响应式，需要使用 storeToRefs
import { storeToRefs } from "pinia"
import { useHomeStore } from "../store/home"

const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)

const addCount = () => count.value++
</script>

<template>
  <div class="home">
    <h2 class="home-title">Home</h2>
    <div class="count-wrap">
      <p class="count">count: {{ count }}</p>
      <button @click="addCount">+1</button>
    </div>
  </div>
</template>

<style scoped>
.home {
  border: 1px solid lightseagreen;
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
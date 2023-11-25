<script setup>
import { ref } from 'vue'

const count = ref(0)
const addCount = () => count.value ++
</script>

<template>
  <div class="app">
    <h2 class="title">Vue3 app</h2>
    <div class="count-wrap">
      <p class="count">count: {{ count }}</p>
      <button @click="addCount">+1</button>
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 10px;
  border: 1px solid lightcoral;
}

.title {
  margin-top: 0;
  margin-bottom: 0;
}

.count-wrap {
  display: flex;
  align-items: center;
}

.count {
  margin-right: 10px;
}
</style>
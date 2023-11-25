<script setup>
import { ref } from 'vue'

const count = ref(0)
const addCount = () => count.value ++
</script>

<template>
  <div class="app">
    <h2 class="title">Vue3 SSR App</h2>
    <div class="count-wrap">
      <p class="count">count: {{ count }}</p>
      <button @click="addCount">+1</button>
    </div>

    <router-link to="/">
      <button>home</button>
    </router-link>
    <router-link to="/about">
      <button>about</button>
    </router-link>

    <router-view />
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
  margin-top: 10px;
  margin-bottom: 10px;
}

.count {
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
}
</style>
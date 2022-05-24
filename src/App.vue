<script setup lang="ts">
import { ref } from 'vue';
import type { ConfigProviderProps } from 'vant';

const configProviderProps = ref<ConfigProviderProps>({
  tag: 'div',
});
</script>

<template>
  <van-config-provider v-bind="configProviderProps">
    <router-view />
  </van-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

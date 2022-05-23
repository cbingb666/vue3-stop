<script setup lang="ts">
import { reactive, ref } from 'vue';
import LoginAccountVue from './widgets/LoginAccount.vue';
import LoginSmsVue from './widgets/LoginSms.vue';
const loginWays = reactive({
  account: LoginAccountVue,
  sms: LoginSmsVue,
});
const backgroundColor = ref('skyblue');
</script>

<template>
  <div :class="$style['wrapper']">
    <van-tabs :class="$style['custom-tabs']">
      <van-tab v-for="way in loginWays" :key="way.name" :title="way.name">
        <div :class="$style['tab-wrapper']">
          <component :is="way" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style module lang="less">
.tab-wrapper {
  padding: 16px 0;
}
.wrapper {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  background-color: v-bind(backgroundColor);
}

:global {
  .custom-tabs {
    .van-tabs__line {
      background-color: blue;
    }
  }
}
</style>

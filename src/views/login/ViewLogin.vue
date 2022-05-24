<script setup lang="ts">
import { ref } from 'vue';
import LoginAccountVue from './widgets/LoginAccount.vue';
import LoginSmsVue from './widgets/LoginSms.vue';
// 登录渠道
const loginWays = {
  sms: LoginSmsVue,
  account: LoginAccountVue,
};
const themeVars = ref({
  primaryColor: 'yellow',
});
</script>

<template>
  <van-config-provider :theme-vars="themeVars">
    <div :class="$style['wrapper']">
      <van-tabs :class="$style['custom-tabs']">
        <van-tab v-for="way in loginWays" :key="way.name" :title="way.title">
          <div :class="$style['tab-wrapper']">
            <component :is="way" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </van-config-provider>
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
}
</style>

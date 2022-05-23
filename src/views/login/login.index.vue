<script setup lang="ts">
import { reactive, ref } from "vue";
import accountLoginVue from "./widgets/account.login.vue";
import smsLoginVue from "./widgets/sms.login.vue";

const loginWays = reactive({
  account: accountLoginVue,
  sms: smsLoginVue,
});
const backgroundColor = ref("skyblue");
// const loginWay = ref(LoginWays.account);

console.log(accountLoginVue);
</script>

<template>
  <div :class="$style['wrapper']">
    <van-tabs :class="$style['custom-tabs']">
      <van-tab v-for="way in loginWays" :title="way.name">
        <div :class="$style['tab-wrapper']">
          <component :is="way"></component>
        </div>
      </van-tab>
    </van-tabs>
    <!-- <div :class="$style['title']">{{  }}</div> -->
    <!-- <component :is="loginWay"></component> -->
    <!-- <account-login-vue></account-login-vue> -->
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

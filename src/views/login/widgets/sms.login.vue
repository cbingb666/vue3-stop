<script lang="ts">
export default {
  name: "sms",
};
</script>

<script setup lang="ts">
import { reactive, ref } from "vue";

type IForm = {
  phone: string;
  code: string;
};

const form = reactive<IForm>({
  phone: "",
  code: "",
});

const onClickLogin = () => {};
</script>

<template>
  <van-form>
    <van-cell-group inset>
      <van-field
        v-model="form.phone"
        label="手机号"
        name="phone"
        placeholder="phone"
      ></van-field>
      <van-field
        v-model="form.code"
        label="短信验证码"
        name="code"
        placeholder="code"
      ></van-field>
    </van-cell-group>
    <div :class="$style['form-bottom']">
      <van-button type="primary" block round @click="onClickLogin"
        >登录
      </van-button>
    </div>
  </van-form>
</template>

<style module lang="less">
.form-bottom {
  margin: 16px 16px 0;
}
</style>

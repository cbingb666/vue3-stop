<script setup lang="ts">
import { reactive } from 'vue';

type IForm = {
  username: string;
  password: string;
};

const form = reactive<IForm>({
  username: '',
  password: '',
});

const onClickLogin = () => {
  console.log('login');
};
</script>

<template>
  <van-form>
    <van-cell-group inset>
      <van-field
        v-model="form.username"
        label="用户名"
        name="username"
        placeholder="username"
      />
      <van-field
        v-model="form.password"
        label="密码"
        name="password"
        placeholder="password"
      />
    </van-cell-group>
    <div :class="$style['form-bottom']">
      <van-button type="primary" block round @click="onClickLogin">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<style module lang="less">
.form-bottom {
  margin: 16px 16px 0;
}
</style>

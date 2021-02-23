<template>
  <div class="home">
    登录
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import {getApp} from '@/tcb';

const app = getApp();

@Component({
  components: { },
  mixins: []
})
export default class Login extends Vue {
  // data
  msg = 'helloworld';
  count = 0;
  phone = '';
  password = '';
  list = [];

  // created
  private async created () {
    console.log('getter:', this.$store.getters.token);
    // mixins混入数据，可以做搜索条件
  }

  // 登录
  async login () {
    const param: any = {
      name: 'func_login', data: { name: this.phone, password: this.password }
    };
    const { result } = await app.callFunction(param);
    
  }
};

</script>
<style lang="scss" scoped>

</style>

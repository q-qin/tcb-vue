<template>
  <div class="home">
    <div>
      欢迎使用修车系统
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import {getApp} from '@/tcb';

const app = getApp();
// components + mixins
@Component({
  components: { },
  mixins: []
})
export default class Home extends Vue {
  // data

  // created
  private async created () {
  }

};

</script>

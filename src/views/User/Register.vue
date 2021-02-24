<template>
  <div>注册账户
    <hello-world msg="欢迎使用TCB" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {HelloWorld },
})
export default class Register extends Vue {

}
</script>

<style>

</style>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  created () {
    this.test();
  },
  methods: {
    test () {
      console.log('About');
    }
  }
});
</script>
<style lang="scss" scoped>

</style>

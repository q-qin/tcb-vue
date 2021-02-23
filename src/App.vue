<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  async created(){
    // ***云数据库***
    // const app = this.$cloudbase;
    // await app.auth().anonymousAuthProvider().signIn();
    // const db = app.database();
    // const {data} = await db.collection('all_goods').where({title:'将进酒'}).get();
    // console.log('云数据库,返回 --> ', data);
  },
};
</script>

<style lang="scss">
</style>

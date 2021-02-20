<template>
  <div id="app">
    <img class="logo" alt="CloudBase logo" src="./assets/cloudbase.png" />
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="欢迎使用云开发 CloudBase Vue.js App" />
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
    const app = this.$cloudbase;
    await app.auth().anonymousAuthProvider().signIn();
    const db = app.database();
    const {data} = await db.collection('all_goods').where({title:'将进酒'}).get();

    console.log('云数据库,返回 --> ', data);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 120px;
  padding: 10px;
}
</style>

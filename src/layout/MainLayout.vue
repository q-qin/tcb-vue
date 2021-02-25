<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <a-icon slot="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'"/>
      <div class="logo" />
      <a-menu theme="dark" mode="inline">
        <template v-for="route in routes"  >
          <a-menu-item  v-if="!route.hidden" :key="route.path">{{route.meta.title}}</a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background:#fff" />
      <a-layout-content class="margin-lr-10">
        <a-breadcrumb class="margin-tb-10">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        develop by q-qin <a href="https://www.github.com/q-qin/tcb-vue" target="_blank">Github</a>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import  {routes} from '@/router';

@Component({
  components: {},
  mixins: []
})
export default class Layout extends Vue {
  onlyOneChild = null

  collapsed = false;
  routes = routes;

  get activeMenu(){
    const route = this.$route;
    const { meta, path } = route
    if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
  }
}
</script>
<style lang="scss">
   .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
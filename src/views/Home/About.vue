<template>
  <div class="about">
    <a-descriptions bordered title="关于本系统">
      <a-descriptions-item label="开发环境">
        windows
      </a-descriptions-item>
      <a-descriptions-item label="开发工具">
        vscode
      </a-descriptions-item>
      <a-descriptions-item label="UI框架">
        ant.design
      </a-descriptions-item>
      <a-descriptions-item label="使用帮助" span="3">
        1. 登录 admin / admin <br>
        2. 报表 查看走势<br>
        3. 表单 增删改查<br>
        ...
      </a-descriptions-item>
      <a-descriptions-item label="参考资料">
        1. 《Javascript从入门到放弃》
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {

}
</script>
<style lang="scss" scoped>

</style>

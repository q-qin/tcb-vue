<template>
  <div class="user">
    <a-skeleton v-if="!loaded" />
    <div v-else>
      <a-card>
        <a-form layout="inline">
          <a-form-item label="姓名">
            <a-input
              v-model="form.key"
              allowClear
              placeholder="请输入用户名"
            ></a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary">查询</a-button>
          </a-form-item>
        </a-form>
      </a-card>
      <a-card class="margin-top-10" :bodyStyle="{ padding: 0 }">
        <a-table :columns="columns" :data-source="list" :rowKey="(record, $index) => $index" :pagination="pagination">
          <span slot="action" slot-scope="text,record">
            <a-button type="primary" class="margin-right-10" @click="edit(text,record)">编辑</a-button>
            <a-button type="danger" @click="del(text)">删除</a-button>
          </span>
        </a-table>
      </a-card>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class User extends Vue {
  loaded = false;
  form = {
    key: "",
  };
  pagination = {
    current: 1,
    total: 0,
    pageSize: 10,
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100'],
    showTotal: (total: string) => `共有 ${total} 条数据`
  }
  columns = [
    { title: "姓名", dataIndex: "name" },
    { title: "手机号", dataIndex:'mobile' },
    { title: "部门", dataIndex:'depart' },
    { title: "密码",dataIndex:'password' },
    { title: "操作",dataIndex:'id',scopedSlots: { customRender: 'action' }, },
  ];
  list = [
    {
      id:1,
      name: "张三",
      mobile: "13800138000",
      depart: "前台接待",
      password: "zs123456",
    },
  ];
  
  private async created() {
    setTimeout(() => {
      this.loaded = true;
    }, 1e3);
  }

  edit(id:string,obj:any){
    console.log(id,obj);
  }
}
</script>

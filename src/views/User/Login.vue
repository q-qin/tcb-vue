<template>
  <div class="main">
    <div class="user-layout-login">
      <div class="title">XC管理系统</div>
      <a-tabs :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }">
        <a-tab-pane key="tab1" tab="账号密码登录">
          <a-form-model ref="formPass" :model="formPass" :rules="rulesPass">
            <a-form-model-item prop="username">
              <a-input size="large" placeholder="账户: admin" v-model="formPass.username">
                <a-icon
                  slot="prefix"
                  type="user"
                  :style="{ color: 'rgba(0,0,0,.25)' }"
                />
              </a-input>
            </a-form-model-item>

            <a-form-model-item prop="password">
              <a-input-password
                size="large"
                placeholder="密码: admin"
                v-model="formPass.password"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  :style="{ color: 'rgba(0,0,0,.25)' }"
                />
              </a-input-password>
            </a-form-model-item>
            <a-form-model-item class="user-login-other">
              <span>其他登录方式</span>
              <a>
                <a-icon class="item-icon" type="alipay-circle"></a-icon>
              </a>
              <a>
                <a-icon class="item-icon" type="taobao-circle"></a-icon>
              </a>
              <a>
                <a-icon class="item-icon" type="weibo-circle"></a-icon>
              </a>
              <router-link class="register" :to="{ name: 'register' }"
                >注册账户</router-link
              >
            </a-form-model-item>
            <a-form-model-item>
              <a-button
                type="primary"
                size="large"
                :loading="loginBtn"
                :disabled="loginBtn"
                class="login-button"
                @click="loginPass"
                >登录</a-button
              >
            </a-form-model-item>
          </a-form-model>
        </a-tab-pane>
        <a-tab-pane key="tab2" tab="手机号登录">
          <a-form-model>
            <a-form-model-item>
            <a-input
              size="large"
              type="text"
              placeholder="手机号"
              v-model="formSms.mobile"
            >
              <a-icon
                slot="prefix"
                type="mobile"
                :style="{ color: 'rgba(0,0,0,.25)' }"
              />
            </a-input>
          </a-form-model-item>

          <a-row :gutter="16">
            <a-col class="gutter-row" :span="16">
              <a-form-model-item>
                <a-input
                  size="large"
                  type="text"
                  placeholder="验证码"
                  v-model="formSms.captcha"
                >
                  <a-icon
                    slot="prefix"
                    type="mail"
                    :style="{ color: 'rgba(0,0,0,.25)' }"
                  />
                </a-input>
              </a-form-model-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-button
                class="getCaptcha"
                tabindex="-1"
                :disabled="state.smsSendBtn"
                v-text="
                  (!state.smsSendBtn && '获取验证码') || state.time + ' s'
                "
              ></a-button>
            </a-col>
          </a-row>
          </a-form-model>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { getApp } from "@/tcb";

const app = getApp();

@Component({
  // components: { Button },
  mixins: [],
})
export default class Login extends Vue {
  // data
  formPass = {
    username:'',
    password:''
  }
  formSms = {
    mobile:'',
    captcha:'',
  }
  rulesPass = {
    username:[{required: true, message: '请输入用户名', trigger: 'blur' }],
    password:[{required: true, message: '请输入密码', trigger: 'blur' }]
  }
  loginBtn = false

  state = {
    time: 60,
    // login type: 0 email, 1 username, 2 telephone
    smsSendBtn: false,
  };

  // created
  private async created() {
    console.log("getter:", this.$store.getters.token);
    // mixins混入数据，可以做搜索条件
  }
  // 登录
  loginPass() {
     this.$refs.formPass.validate( async (valid: any) => {
        if (valid) {
          const param: any = {
            name: "func_login",
            data: {
              ...this.formPass
            },
          };
          this.loginBtn = true;
          const { result } = await app.callFunction(param);
          
        }
     })
  }
}
</script>
<style lang="scss" scoped>
.main {
  background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
  height: 100%;
  overflow: hidden;
  .user-layout-login {
    position: fixed;
    top: 32%;
    width: 600px;
    left: 0;
    right: 0;
    background: #fff;
    margin: auto;
    padding: 20px;
    border-radius: 4px;
    .title {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      padding: 10px 0;
      letter-spacing: 4px;
    }

    .getCaptcha {
      display: block;
      width: 100%;
      height: 40px;
    }

    .forge-password {
      font-size: 14px;
    }

    button.login-button {
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }

    .user-login-other {
      text-align: left;
      margin-top: 24px;
      line-height: 22px;

      .item-icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #1890ff;
        }
      }

      .register {
        float: right;
      }
    }
  }
}
</style>

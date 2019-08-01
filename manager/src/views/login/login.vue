<!--  -->
<template>
  <div class="login_background">
    <!-- <div class="login_maoboli"></div> -->
    <transition name="fade">
      <div v-if="inOrUp" key="1" class="login_main">
        <span class="login_title">欢迎登录博客管理后台</span>
        <Input
          type="text"
          class="login_len login_input"
          v-model="signInForm.account"
          placeholder="Username"
        >
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
        <Input
          type="password"
          class="login_len login_input"
          v-model="signInForm.password"
          placeholder="Password"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
        <Button type="primary" class="login_len login_btn" :loading="setLoading" @click="signIn">登录</Button>
        <p>
          没有账号？去
          <a @click="inOrUp=false">注册</a>吧
        </p>
      </div>
      <div v-if="!inOrUp" key="2" class="login_signIn">
        <span class="login_title">欢迎注册博客管理后台</span>
        <Input
          type="text"
          class="login_len login_input"
          v-model="signUpForm.account"
          placeholder="Username"
        >
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
        <Input
          type="password"
          class="login_len login_input"
          v-model="signUpForm.password"
          placeholder="Password"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
        <Input
          type="password"
          class="login_len login_input"
          v-model="signUpForm.rePassword"
          placeholder="Password"
        >
          <Icon type="ios-refresh-circle-outline" slot="prepend"></Icon>
        </Input>
        <Button type="primary" class="login_len login_btn" :loading="setLoading" @click="signUp">注册</Button>
        <p>
          我有账号
          <a @click="inOrUp=true">前往登录</a>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { signUpReq, signInReq } from "@/request/user/userReq.js";
export default {
  name: "login",
  data() {
    return {
      inOrUp: true,
      signInForm: {
        account: "",
        password: ""
      },
      signUpForm: {
        account: "",
        password: "",
        rePassword: ""
      }
    };
  },
  computed: {
    setLoading() {
      console.log(this.$store.state.setLoading);
      return this.$store.state.setLoading;
    }
  },
  mounted() {
    console.log(signUpReq);
  },
  methods: {
    signIn() {
      if (!this.signInForm.account) {
        this.$Message.warning("账号必填！");
      } else if (!this.signInForm.password) {
        this.$Message.warning("密码必填！");
      } else {
        this.$Loading.start();
        this.$store.commit("setLoading", true);
        signInReq(this.signInForm)
          .then(res => {
            console.log(res);
            if (res.code === 1) {
              this.$Loading.finish();
            } else {
              this.$Loading.error();
            }
          })
          .catch(err => {
            this.$Loading.error();
            this.$store.commit("setLoading", false);
          });
      }
    },
    signUp() {
      if (!this.signUpForm.account) {
        this.$Message.warning("账号必填！");
      } else if (!this.signUpForm.password) {
        this.$Message.warning("密码必填！");
      } else {
        this.$Loading.start();
        this.$store.commit("setLoading", true);
        signUpReq({
          account: this.signUpForm.account,
          password: this.signUpForm.password
        })
          .then(res => {
            if (res.code === 1) {
              this.$Loading.finish();
            } else {
              this.$Loading.error();
            }
          })
          .catch(err => {
            this.$Loading.error();
            this.$store.commit("setLoading", false);
          });
      }
    },
    change(flag) {
      this.inOrUp = flag;
    }
  }
};
</script>
<style scoped>
.login_background {
  position: absolute;
  top: 0;
  left: 0;
  /*以上三句是让整个div放在屏幕的最左上方*/
  width: 100%;
  height: 100%;
  min-width: 60%;
  /*以上两句实现全屏大小*/
  background: url("../../assets/login.jpg") no-repeat center 0; /*引入背景图，不重复出现*/
  background-size: cover; /*图片随屏幕大小同步缩放,但是图片画面可能只显示一部分*/
  background-color: rgba(0, 0, 0, 0.5);
}
.login_maoboli {
  width: 100%;
  height: 100%;
  background: inherit;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -ms-filter: blur(3px);
  -o-filter: blur(3px);
  filter: blur(3px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
}
.login_main {
  width: 350px;
  height: 310px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -170px;
  margin-top: -175px;
  text-align: center;
  border-radius: 20px;
  /* box-shadow: 2px 2px 20px #888888; */
  background-color: rgba(255, 255, 255, 0.6);
  /* background-color: #fff; */
}
.login_signIn {
  width: 350px;
  height: 340px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -170px;
  margin-top: -175px;
  text-align: center;
  border-radius: 20px;
  /* box-shadow: 2px 2px 20px #888888; */
  background-color: rgba(255, 255, 255, 0.6);
  /* background-color: #fff; */
}
.login_title {
  font-size: 20px;
  line-height: 100px;
}
.login_len {
  width: 300px;
}
.login_btn {
  margin-bottom: 10px;
}
.login_input {
  margin-left: 25px;
  margin-bottom: 20px;
}
.fade-enter-active {
  transition: transform 0.8s;
}
.fade-enter {
  transform: translate(300px, 0);
}
.fade-leave-active {
  transition: transform 0.8s;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(-300px, 0);
}
.change {
  animation: mymove 1s;
  -webkit-animation: mymove 1s; /*Safari and Chrome*/
}
@keyframes mymove {
  from {
    transform: translate(0, 200px);
    -webkit-transform: translate(0, 200px);
    -ms-transform: translate(0, 200px);
  }
  to {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
  }
}
@-webkit-keyframes mymove {
  from {
    transform: translate(0, 200px);
    -webkit-transform: translate(0, 200px);
    -ms-transform: translate(0, 200px);
  }
  to {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
  }
}
</style>
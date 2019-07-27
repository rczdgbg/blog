<!--  -->
<template>
  <div class="login_body">
    <div class="login_main">
      <div :class="['login_main_title', titleAnimation]" @mouseover="removeAnimation"></div>
      <div class="login_main_body">
        <div>
          <el-form label-position="right" style='text-align: center;'>
            <el-form-item label="">
              <el-input size='large' placeholder="请输入账号" class='login_input' maxlength="15" v-model="request.userName" clearable>
                  <i slot="prefix" style='font-size:18px;' class="iconfont">&#xe62b;</i>
              </el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input size='large' placeholder="请输入密码" class='login_input' maxlength="30"   v-model="request.password" show-password>
                  <i slot="prefix" style='font-size:18px;' class="iconfont">&#xe628;</i>
              </el-input>
            </el-form-item>
             <el-form-item label="">
              <el-input size='large' placeholder="请输入验证码" class='login_input' maxlength="30"  style="width: 200px;" v-model="request.password" >
              </el-input>
            </el-form-item>
          </el-form>
          <div class='login_main_footer'>
              <el-button round>登 录</el-button>
                <el-button round style="margin-left:10px;">注 册</el-button>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        request:{
            password:"",
            userName: "",
        },
      titleAnimation: "title_animation"
    };
  },
  mounted() {},
  methods: {
    removeAnimation() {
      this.titleAnimation = "";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/index.scss";
.login_body {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("../assets/img/loginBackground.jpg") no-repeat center 0;
  background-size: cover; /*图片随屏幕大小同步缩放,但是图片画面可能只显示一部分*/
  .login_main {
    text-align: center;
    width: 530px;
    height: 580px;
    border-radius: 50px;
    background: $backgroud;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login_main_title {
      display: inline-block;
      height: $loginImgHeight;
      width: $loginImgHeight;
      border-radius: $loginImgHeight;
      position: relative;
      top: -($loginImgHeight / 2);
      margin-bottom: 30px; 
      box-shadow: 0px 0px 8px $backgroud;
      background: url("../assets/img/loginImg.jpg") no-repeat center 0;
      background-size: cover;
    }
    .title_animation {
      animation: jump 4s linear;
      -webkit-animation: jump 4s linear;
    }
    .login_main_title:hover {
      animation: heartBeat 4s infinite linear;
      -webkit-animation: heartBeat 4s infinite linear; /* Safari and Chrome */
    }
    .login_main_body {
      text-align: left;
      .el-button{
          width: 140px;
          color: $qianWhite;
          background: none;
      }
      .el-button:hover{
          color: $qianWhite;
          background: none;
          border-color: #5a7bb6
      }
     
    }
    .login_main_footer{
        margin-top: 150px;
        text-align: center;
    }
  }
}
 .login_main_body /deep/ .el-input__inner{
     background: none;
         color: #444;
          border-radius: 40px!important;
          padding-left: 35px;
      }
      .login_main_body /deep/ .el-input__inner:focus{
          border-color: #5a7bb6
      }
     .login_main_body /deep/ .el-input__prefix{
          left:10px;
          color: #ddd
      }
.login_icon {
  vertical-align: middle;
  font-size: 60px;
  color: rgba(211, 210, 218, 0.9);
}
// .login_input /deep/ .el-input__inner{
//   background-color: rgba(193, 204, 226, 0.2)!important;
// }
.login_input {
  height: $contentTitleFont;
  width: $loginInputWidth;
  font-size: $contentFont;
  line-height: 38px;
  caret-color: rgba(93, 80, 106, 0.7);
  border: none;
  //   border-bottom: 2px  rgba(193, 204, 226, .6) solid;
}
.login_input:hover {
  cursor: pointer;
}
.login_input:focus {
  outline: none;
}
@keyframes jump {
  0% {
    transform: translateY(-200px);
    -webkit-transform: translateY(-200px);
  }
  20% {
    transform: translateY(-80px);
    -webkit-transform: translateY(-80px);
  }
  40% {
    transform: translateY(40px);
    -webkit-transform: translateY(40px);
  }
  60% {
    transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
  }
  80% {
    transform: translateY(10px);
    -webkit-transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
}

@-webkit-keyframes jump /* Safari and Chrome */ {
  0% {
    transform: translateY(-200px);
    -webkit-transform: translateY(-200px);
  }
  20% {
    transform: translateY(-80px);
    -webkit-transform: translateY(-80px);
  }
  40% {
    transform: translateY(50px);
    -webkit-transform: translateY(50px);
  }
  60% {
    transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
  }
  80% {
    transform: translateY(10px);
    -webkit-transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
}

@keyframes heartBeat {
  0% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
  }
}

@-webkit-keyframes heartBeat /* Safari and Chrome */ {
  0% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
  }
}
.login_main_body /deep/::-webkit-input-placeholder{
    color: #888;
} /* 使用webkit内核的浏览器 */

.login_main_body /deep/:-moz-placeholder{
    color: #888;
} /* Firefox版本4-18 */

.login_main_body /deep/::-moz-placeholder{
    color: #888;
} /* Firefox版本19+ */

.login_main_body /deep/:-ms-input-placeholder{
    color: #888
} /* IE浏览器 */
</style>
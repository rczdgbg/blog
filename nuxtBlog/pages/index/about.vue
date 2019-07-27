<!--  -->
<template>
  <div class="container">
      <div class="container_about_me">
          <div class='content_body'>
              <div class="content_img"></div>
              <div class='about_me_title'>
                  自我介绍
              </div>
              <div class="about_me">
                  <!-- 
                  <p style='display:inline-block;line-height:50px;height:50px;'>性别：</p>
                 <i style='color: rgba(74, 162, 252, 0.992);' class='iconfont icon-nan font'> </i> -->
                 <span>
                     性别：男
                 </span>
              </div>
               <div class="about_me">
                   <span>
                       爱好：女
                   </span>
                   <!-- <i style='color:red' class='iconfont icon-xin1 font'></i>
                 <i style='color:pink' class='iconfont icon-girl font'></i> -->
              </div>
              <div class='about_me_title'>
                  网恋加我
              </div>
              <p style="margin-top:10px;" class="font_p">
                <i class='iconfont icon-qq-copy font2'> </i>

              </p>
              <p class="font_p">
                <i class='iconfont icon-weixin1 font2'> </i>

              </p>
              <p class="font_p">
                <i class='iconfont icon-github font'> </i>

              </p>
          </div>
      </div>
      
      </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
@import "../../assets/css/index.scss";
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("../../assets/img/about.jpg") no-repeat center 0;
  background-size: cover; /*图片随屏幕大小同步缩放,但是图片画面可能只显示一部分*/
}
.content_img {
  display: inline-block !important;
  height: $loginImgHeight;
  width: $loginImgHeight;
  text-align: center;
  margin-bottom: 15px;
  border-radius: $loginImgHeight;
  box-shadow: 0px 0px 8px rgba(193, 204, 226, 0.3);
  background: url("../../assets/img/loginImg.jpg") no-repeat center 0;
  background-size: cover;
}
.container_about_me {
  position: relative;
  text-align: center;
  top: 130px;
  z-index: 1;
  height: 81%;
  width: 60%;
  background: rgba(221,221,221,.4);
  border-radius: 40px;
  margin: auto;
}
.about_me_title{
    height: 50px;
    line-height: 50px;
    width: 30vw;
    font-size: 24px;
    font-weight: 700;
    color: #2a2a32;
    background: #ddd;
    border-radius: 5px;
    border-left: 4px solid rgba(74, 162, 252, 0.992)
}
.about_me{
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight:550;
    color: #2a2a32;
}
.content_body{
    position: absolute;
    left: 50%;
    top: 48%;
    transform: translate(-50%,-50%)
}
.font{
    font-size: 38px;
    vertical-align: middle;
    color: white;
}
.font2{
    font-size: 34px;
    vertical-align: middle;
    color: white;
}
.font:hover{
    color: rgba(74, 162, 252, 0.992);
    cursor: pointer;
}
.font2:hover{
    color: rgba(74, 162, 252, 0.992);
    cursor: pointer;
}
.font_p{
    height:50px;
}
</style>
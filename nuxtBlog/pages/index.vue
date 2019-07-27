<template>
  <div class="container">
    <no-ssr>
      <Slide @openMenu="openMen" @closeMenu="closeMenu">
        <div class="login_main_title"></div>
        <div
          v-for="(item,index) in menuList"
          class="menu_item"
          :key="index"
          @click="jumpMenu(item.path)"
        >{{item.name}}</div>
      </Slide>
    </no-ssr>
    <div class="right_nav">
      <div
        v-for="(item,index) in menuList"
        :key="index"
        @click="jumpMenu(item.path)"
        :class="['content_nav',activeName===item.path?'active_menu':'']"
      >
        <p>{{item.name}}</p>
      </div>

      <div class="right_nav_item" @click="jumpMenu('login')">登录</div>
    </div>
       <!-- <div class="mianbaoxie">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }" class='white_font'>首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }" class='white_font'>
            活动管理
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }" class='white_font'>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }" class='white_font'>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div> -->
    <div class="content">
     
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadFlag: false,
      activeName: "/page",
      menuList: [
        {
          name: "他的首页",
          path: "/page"
        },
        {
          name: "个人见解",
          path: "/think"
        },
        {
          name: "闲言细语",
          path: "/talk"
        },
        {
          name: "关于作者",
          path: "/about"
        }
      ]
    };
  },
  watch:{
    "$route.path"(val){
      this.activeName = this.$route.path;
    }
  },
  mounted() {
    this.activeName = this.$route.path;
  },
  methods: {
    jumpMenu(path) {
      console.log(this.$route);
      this.$router.push(path);
    },
    openMen() {
      document.getElementsByClassName("bm-burger-button")[0].style.visibility =
        "hidden";
    },
    closeMenu() {
      document.getElementsByClassName("bm-burger-button")[0].style.visibility =
        "";
    }
  }
};
</script>

<style lang='scss'>
@import "../assets/css/index.scss";

.container {
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(41,41,53,1);
}
.login_main_title {
  display: inline-block !important;
  height: $loginImgHeight;
  width: $loginImgHeight;
  text-align: center;
  border-radius: $loginImgHeight;
  margin-bottom: 30px;
  box-shadow: 0px 0px 8px rgba(193, 204, 226, 0.7);
  background: url("../assets/img/loginImg.jpg") no-repeat center 0;
  background-size: cover;
}
.quick-menu .sub-menu a i {
  position: relative;
  top: 8px;
}
.bm-burger-button {
  position: fixed;
  z-index: 10;
  width: 30px;
  height: 24px;
  left: 25px;
  top: 28px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: $titleFontColor;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgba(2, 47, 80, 0.3); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  text-align:center;
  color: #b8b7ad;
  margin-left: 0;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
.menu_item {
  display: inline-block;
  width: 100%;
  color: $titleFontColor;
  font-size: $titleFont;
  font-weight: 700;
  text-align: center;
}
.menu_item:hover {
  cursor: pointer;
  // color: rgba(201, 78, 80, 0.9);
  color: $blue;
}
.right_nav {
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: 9;
  top: 11px;
  height: 60px;
  .right_nav_item {
    display: inline-block;
    position: absolute;
    right: 36px;
    font-size: $titleFont;
    line-height: 56px;
    font-weight: 700;
    color: $titleFontColor;
    &:hover {
      cursor: pointer;
      color: $blue;
    }
  }
  .logo {
    display: inline-block;
    font-size: $titleFont;
    line-height: 60px;
    margin-left: 90px;
    margin-right: 30px;
    font-weight: 700;
    color: $titleFontColor;
  }
  .content_nav {
    display: inline-block;
    font-size: $titleFont;
    width: 160px;
    margin: 0 20px;
    line-height: 56px;
    text-align: center;
    font-weight: 700;
    color: $titleFontColor;
    &:hover {
      cursor: pointer;
      color: $blue;
    }
  }
}

.content {
  text-align: left;
      width: 100%;

}

.active_menu{
  color: $blue!important;
}
</style>
 
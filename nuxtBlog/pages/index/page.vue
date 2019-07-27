<!--  -->
<template>
  <div class="container">
    <div class="page_content">
      <div class="content_padding">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: "",
      currentDate: new Date(),
      showVisit: false
    };
  },
  mounted() {
    console.log();
    if (window.screen.height < 970) {
      this.showVisit = false;
    } else {
      this.showVisit = true;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/css/index.scss";
.page_content {
  margin: 130px auto;
  height: 100%;
  max-width: 1200px;

  margin: auto;
}
.container {
  width: 100%;
  height: 100%;
  background: rgba(41, 41, 53, 1);
  //  background: url("../../assets/img/index.jpg") no-repeat center 0;
  // background-size: cover; /*图片随屏幕大小同步缩放,但是图片画面可能只显示一部分*/
}
.content_padding {
  position: relative;
  top: 100px;
  border-radius: 10px;
  background: rgba(221, 221, 221, 0.4);
}
</style>
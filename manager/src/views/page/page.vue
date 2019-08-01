
<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger :collapsed-width="78">
        <Menu :open-names="menuOpen" theme="dark" ref='menu' width="auto" :active-name='menuActiveMenu' :class="menuitemClasses">
          <div class="system_name" @click="pushView({path:'/page/index',name: '首页'})">LoneRanger</div>
          <div class="menu_search">
            <Input class="search_input" search placeholder="输入菜单名字搜索" />
          </div>

          <div>
            <Submenu v-for="(item,index) in menuList" :key="index" :name="item.name">
              <template slot="title">
                <Icon :type="item.submenuIconType" />
                <span>{{item.name}}</span>
              </template>
              <MenuItem
                @click.native="pushView(menuItem)"
                v-for="(menuItem, menuIndex) in item.menuList"
                :key="menuIndex"
                :to="menuItem.path"
                :name="menuItem.name"
              >{{menuItem.name}}</MenuItem>
            </Submenu>
          </div>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Tag
            v-for="(item,index) in tagList"
            :key="index"
            type="dot"
            closable
            :color="item.color"
            @on-close="onClose(index)"
            @click.native="tagChange(index)"
          >{{item.name}}</Tag>
        </Header>
        <Breadcrumb class="breadcrumb">
          <BreadcrumbItem v-for='(breadcrumbItem,breadcrumbIndex) in breadcrumbList' :key='breadcrumbIndex' :to="breadcrumbItem.path">
            <Icon :type="breadcrumbItem.icon"></Icon>{{`当前：${breadcrumbItem.name}`}}
          </BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{margin: '20px',marginTop: '0', background: '#fff', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false,
      menuActiveMenu: '首页',
      menuOpen: [],
      tagList: [],
      menuList: [
        {
          submenuIconType: "ios-paper",
          name: "文章管理",
          menuList: [
            {
              path: "/page/articleList",
              name: "文章列表"
            },
            {
              path: "/page/commentList",
              name: "评论管理"
            }
          ]
        },
        {
          submenuIconType: "ios-people",
          name: "用户管理",
          menuList: [
            {
              path: "/page/userList",
              name: "用户管理"
            }
          ]
        },
        {
          submenuIconType: "ios-contacts",
          name: "友链管理",
          menuList: [
            {
              path: "/page/friendLinkList",
              name: "友链列表"
            }
          ]
        },
        {
          submenuIconType: "ios-menu",
          name: "菜单管理",
          menuList: [
            {
              path: "/page/prosceniumMenu",
              name: "前台菜单"
            },
            {
              path: "/page/backMenu",
              name: "后台菜单"
            }
          ]
        }
      ],
      breadcrumbList:[]
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  watch: {
  $route: {
    handler: function(val, oldVal){
      console.log(val, 'dddd');
      this.breadcrumbList = [
          {
              icon: val.meta.icon,
              name: val.meta.name,
              path: val.path
          }
      ]
    },
    // 深度观察监听
    deep: true
  }
},
mounted(){
    if(this.$route){
        this.menuActiveMenu = this.$route.meta.name
        this.$set(this.menuOpen, 0, this.$route.meta.pname)
        this.breadcrumbList = [
          {
              icon: this.$route.meta.icon,
              name: this.$route.meta.name,
              path: this.$route.path
          }
      ]
    }
    if(sessionStorage.getItem('tagList')){
        console.log(sessionStorage.getItem('tagList'))
        this.tagList = JSON.parse(sessionStorage.getItem('tagList'))
    }else{
         this.tagList.push({
          name: this.$route.meta.name,
          path: this.$route.path,
          color: "primary"
        });
    }
    this.$nextTick(()=>{
        this.$refs.menu.updateOpened()
    })
},
  methods: {
    onClose(index) {
        if(this.tagList[index].color==='primary'){
            this.$Message.warning('不能删除当前页面标签！');
        }else{
            this.tagList.splice(index, 1);
        }
    },
    tagChange(index) {
      
        this.tagList.forEach(item => {
          item.color = "#ddd";
        });
      this.tagList[index].color = "primary";
      this.$router.push(this.tagList[index].path);
       sessionStorage.setItem('tagList', JSON.stringify(this.tagList))
    },
    pushView(menuItem) {
      let nowSelectMeny = this.tagList.findIndex((item, index) => {
        return item.path === menuItem.path;
      });
      if (nowSelectMeny !== -1) {
        this.tagChange(nowSelectMeny);
      } else {
          this.tagList.forEach(item => {
            item.color = "#ddd";
          });
        this.tagList.push({
          name: menuItem.name,
          path: menuItem.path,
          color: "primary"
        });
        sessionStorage.setItem('tagList', JSON.stringify(this.tagList))
      }
    }
  }
};
</script>
<style scoped>
.ivu-layout {
  height: 100vh;
}
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  height: auto;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.menu-icon:hover {
  cursor: pointer;
}
.rotate-icon:hover {
  cursor: pointer;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.breadcrumb {
    
  margin: 10px 0;
  margin-left: 30px;
}
.breadcrumb /deep/ a{
    font-size: 12px;
    line-height: 24px;
    color: #aaa;
}
.breadcrumb /deep/ i{
    font-size: 24px;
    vertical-align: top
}
.system_name {
  margin: 30px 0;
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.system_name:hover {
  cursor: pointer;
}
.menu_search {
  text-align: center;
  margin-bottom: 10px;
}
.search_input {
  width: 76%;
}
</style>
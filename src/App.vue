<template>
<div id="app">
  <b-navbar v-if="!$route.path.includes('/admin')" class="bg" toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class=" mx-lg-auto text-lg-center app_list">
            <b-navbar-brand href="#">
              <img src="./assets/logo.png" width="250px" class="navbar_logo">
            </b-navbar-brand>
            <b-nav-item to='/'>首 頁</b-nav-item>
            <b-nav-item to='/register'>渣腩料理</b-nav-item>
            <b-nav-item to='/register'>預約訂位</b-nav-item>
            <b-nav-item to='/onlineStore'>線上購買</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="account" >
        <b-nav-item-dropdown  right>
          <template #button-content>
            <img style="width: 20px;" src="./assets/user-01.png" alt="">
            會員專區
          </template>
            <b-dropdown-item v-if="!user.isAdmin" to='/cart'>我的帳戶</b-dropdown-item>
            <b-dropdown-item v-if="user.isLogin && !user.isAdmin" to='/orders'>訂單管理</b-dropdown-item>
            <b-dropdown-item v-if="user.isLogin && !user.isAdmin" to='/cart'>購物車
            <b-badge variant="danger">{{ user.cart }}</b-badge>
            </b-dropdown-item>
            <b-dropdown-item v-if="user.isLogin && user.isAdmin" to='/admin'>商品管理</b-dropdown-item>
            <b-dropdown-item v-if="user.isLogin" @click="logout">登出</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>

<router-view
:key="$route.fullPath"
>
</router-view>
  <footer v-if="$route.path !== '/admin'" class="footer">
    <p>© 2022 by 渣腩底呷 RICKTSAIII.</p>
  </footer>
</div>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>

<style lang="scss">
.bg{
background-color: rgb(35, 50, 36);
}

body{
  background-color: rgb(233, 230, 221);
}

.navbar_logo{
  visibility:hidden;
}

.app_list{
padding-left: 117px;}

#button-content{
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer{
  bottom:0px;
  width: 100%;
  height: 100%;
  background-color: rgb(179, 148, 98);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}
@font-face {
  font-family: 游明朝体;
  src:url('./assets/YouMingChaoTi-Medium-2.otf');
  font-weight: bold;
}
.footer p{
  font-family: 游明朝体, "Yu Mincho", YuMincho, serif;
  margin: 0.5rem;
  font-size: 12px;

}

@media(min-width:992px) {
  .navbar_logo{
    display: none;
  }
  .nav-item{
  width:150px;
  }
}

@media(max-width:992px) {

  #nav-collapse{
    height: 100vh;
  }

  .navbar_logo{
    visibility:visible
  }
  .nav-item{
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: 2rem;
}

.b-nav-dropdown{
  flex-direction: column;
}

.navbar-nav{

  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-nav > li{
line-height: 4rem;
  width: 80%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
}

</style>

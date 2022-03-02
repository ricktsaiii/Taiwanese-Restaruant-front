<template>
<div id="admin">
  <div class="admin_head"></div>
  <div class="admin_body">
    <div class="admin_left">
      <a href=""  to='/'>
        <div active class="admin_logo"></div>
      </a>
      <b-nav vertical class=" admin w-25">
        <b-nav-item class="admin_title">預約管理</b-nav-item>
        <b-nav-item to='/admin/orders' exact class="admin_title">訂單管理</b-nav-item>
        <b-nav-item to='/admin/products' class="admin_title">商品管理</b-nav-item>
        <b-nav-item class="admin_title">前台管理</b-nav-item>
        <br>
        <br>
        <b-nav-item @click="logout" class="admin_title">登 出</b-nav-item>
      </b-nav>
    </div>
    <div class="admin_right">
      <!-- <div class="admin_content">
        <b-nav pills class="admin_list">
          <b-nav-item>全部商品</b-nav-item>
          <b-nav-item>上架中</b-nav-item>
          <b-nav-item>已下架</b-nav-item>
          <b-nav-item>預約上架</b-nav-item>
        </b-nav>
        <div class="admin_right_rightList">
          <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        全 部
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <form class="d-flex Search-from">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn search" type="submit">搜 尋</button>
          </form>
        </div>
      </div> -->
        <router-view></router-view>
    </div>
  </div>

</div>
</template>

<style lang="scss">
@font-face {
  font-family: CHei3HK-Bold;
  src:url('../assets/CHei3HK-Bold.otf');
  font-weight: bold;
}

#admin{
  height: 100%;
  width: 100%;
}

.admin_head{
  width: 100%;
  height: 60px;
  background:rgb(179 148 98);
}

.admin_logo{
  width: 200px;
  height: 100px;
  background: url(../assets/logo.png) center/cover;
  margin: 3rem;
}
.admin_title{
  width: 200px;
display: flex;
justify-content: center;
margin-left: 3rem;
margin-bottom: 1rem;
}

.admin_title a{
width: 100%;
color: gray;
display: flex;
justify-content: center;
font-weight: bold;
font-size: 20px;
font-family: CHei3HK-Bold;
letter-spacing:0.3rem;
}

.admin_body{
  display: flex;

}

</style>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

<template>
<b-card class="card_product">
  <b-card-body class="p-0">
    <div class="img">
      <img :src="product.image">
    </div>
    <b-card-title>
      <router-link :to='"/product/" + product._id'>
        {{ product.name }}
      </router-link>
    </b-card-title>
    <b-card-sub-title>
  {{ 'NT$' + product.price }}
    </b-card-sub-title>
  </b-card-body>
</b-card>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      require: true
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
@font-face {
  font-family: CHei3HK-Bold;
  src:url('../assets/CHei3HK-Bold.otf');
  font-weight: bold;
}
.card_product{
  width: 250px;
  // border: 0;
  border-radius: 0;
}
.card_product:hover img {
  transform: scale(1.1);
}
.card_product img {
  width: 100%;
  height: 100%;
  transition: transform .5s;
  object-fit: cover;
  object-position: center;
}
.card_product .img {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.card-body{
  padding: 0;

}
.card-body a{
  font-family: CHei3HK-Bold;
  color:rgb(179,148,98);
  font-size: 18px;
  letter-spacing : 0.1rem;
}
.card-title{
  margin-bottom:0.3rem;
}
.card-subtitle{
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight:600;
}

</style>

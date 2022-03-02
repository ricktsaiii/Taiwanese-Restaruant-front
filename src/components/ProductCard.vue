<template>
<b-card class="card_product" img-top="img-top" :img-src="product.image">
<b-card-body class="p-0">
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
  height: 250px;
  width: 250px;
  // border: 0;
}
.card-body{
  padding: 0;
  margin-left:0.5rem;

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

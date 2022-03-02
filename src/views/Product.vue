<template>
<div id="product">
  <b-overlay :show='!sell'>
    <template #overlay>
      <h1>商品已下架</h1>
    </template>
  <b-container id="product">
  <b-row>
    <b-col cols="12" sm="6">
      <img class="w-100" :src='image'>
    </b-col>
    <b-col cols="12" sm="6">
      <div class="product_title">
        <h2> {{ name }} </h2>
        <h4> NT${{price}} </h4>
        <hr>
        <p style='white-space:pre;'>{{ details }}</p>
        <hr>
        <label for="variation_title">數量</label>
        <b-form-input
        id='variation_title'
        type='number'
        v-model.number='quantity'
        :state='quantityState'
        min='0'
        >
        </b-form-input>
      <div class="product_title_btn d-flex">
        <b-btn block @click='addCart' style="margin-right:1rem">加入購物車</b-btn>
        <b-btn block @click='addCart' class="mt-0">立即購買</b-btn>
      </div>
      </div>
    </b-col>
    <b-col cols="12"  >
      <div class="product_content" style='margin-top:3rem'>
        <h5> 商品描述</h5>
      <p style='white-space:pre;' >
        {{ description }}
      </p>
      </div>
    </b-col>
  </b-row>
  </b-container>
  </b-overlay>
</div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      details: '',
      description: '',
      image: '',
      sell: false,
      category: '',
      quantity: 0
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    }
  },
  computed: {
    quantityState () {
      return this.quantity === 0 ? null : this.quantity > 0
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.details = data.result.details
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.category = data.result.category
      document.title = `${this.name} - 渣腩底呷`
    } catch (error) {
      this.$router.push('/')
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
#product{
  margin-top:3rem;
  height: calc(100vh - 90px);
}

.product_title{
  color:rgb(179, 148, 98);
  align-items: flex-start;
}

.product_title h2{
  font-family: CHei3HK-Bold;
  letter-spacing : 0.3rem
}
.product_title h4{
font-family: 'Source Sans Pro', sans-serif;
font-weight:600;
}
.product_title_btn{
  color:rgb(179, 148, 98);
  margin-top:2rem;
}
.product_content{
  color:rgb(90, 90, 90);
}
＃admin_content_body{
  width:100%;
}
</style>

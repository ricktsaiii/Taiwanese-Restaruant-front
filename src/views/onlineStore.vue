<template>
  <div id="onlineStore">
  <loading :active.sync="isLoading" color="#B39462"></loading>
    <b-container fluid class="px-5 py-5">
      <b-carousel
          id="onlineStore_carousel"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          >
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="../assets/禮盒.jpg"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="../assets/禮盒.jpg">
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="../assets/禮盒.jpg">
          </b-carousel-slide>
      </b-carousel>
      <div class="onlineStore_body">
        <div class="row">
          <div class="col-lg-3">
            <div class="list">
              <a href="">新年限定禮盒</a>
              <a href="">經典禮盒</a>
              <a href="">長輩一定愛</a>
            </div>
          </div>
          <div class="col-lg-2" v-for="product in products" :key='product._id'>
            <div class="items">
              <ProductCard class="ProductCard" :product='product'></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      products: [],
      isLoading: false
    }
  },
  async created () {
    try {
      this.isLoading = true
      const { data } = await this.api.get('/products')
      this.products = data.result
      this.isLoading = false
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '商品取得失敗'
      })
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style lang="scss">

#onlineStore{
  height: 100%;
  width: 100%;
}

.onlineStore_body{
  width: 100%;
  height: 1000px;
  background: white;
  margin-top: 30px;
}

.list{
  height: 100%;
  display: flex;
  flex-direction: column;

  margin: 5rem 3rem 3rem 5rem ;
}

.list a{
  font-family: 'Courier New', Courier, monospace;
  color:rgb(179,148,98);
  margin-bottom: 2rem;
}
.box{
  width: 150px;
  height: 150px;
  background: rgb(223, 199, 156);
  margin-left: 2rem;
}

.items{
  display: flex;
  justify-content: center;
  margin: 5rem 0 3rem 0 !important;
}

.ProductCard{
  border: 0px;
}

</style>

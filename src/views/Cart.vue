<template>
<div id="cart">
  <b-container >
        <div id="cart_logo">
          <img src="../assets/logo.png">
        </div>
  <b-table id="cart_table" :items="products" :fields="fields" :tbody-tr-class="rowClass">
  <template #cell(image)='data'>
    <img v-if='data.item.product.image' :src='data.item.product.image' style='height: 50px'>
  </template>
  <template #cell(name)='data'>
    {{ data.item.product.name }}
  </template>
  <template #cell(price)='data'>
    NT${{ data.item.product.price }}
  </template>
  <template #cell(action)='data'>
    <b-form-spinbutton v-model='data.item.quantity' min="1" inline @input='updateCart(data.index, data.item.quantity)'></b-form-spinbutton>
  &emsp;
  <b-btn variant='danger' @click='updateCart(data.index, 0)'>x</b-btn>
  </template>
  </b-table>
  <div id="checkout">
      <h2>總金額 NT${{ total }}</h2>
      <b-btn id="check_btn" @click="checkout">結 帳</b-btn>
  </div>
  </b-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      fields: [
        { key: 'image', label: '商品' },
        { key: 'name', label: '名稱' },
        { key: 'price', label: '價格' },
        { key: 'action', label: '數量' }
      ]
    }
  },
  methods: {
    async updateCart (index, quantity) {
      try {
        await this.api.patch('/users/me/cart',
          { product: this.products[index].product._id, quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          }
        )
        if (quantity === 0) {
          this.products.splice(index, 1)
          this.$store.commit('user/updateCart', this.user.cart - 1)
        }
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '修改購物車失敗'
        })
      }
    },
    async checkout () {
      try {
        await this.api.post('/orders', {}, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$router.push('/orders')
        this.$store.commit('user/updateCart', 0)
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
        })
      }
    },
    rowClass (item, type) {
      if (!item || type !== 'row') return
      return !item.product.sell ? 'bg-danger' : ''
    }
  },
  computed: {
    total () {
      return this.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.price
      }, 0)
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得購物車失敗'
      })
    }
  }
}
</script>
<style lang="scss">
#cart{
  height: calc(100vh - 90px);
}
#cart_table{
  background: white;
  margin-top: 3rem;
  // border: 1px solid black;
}
#cart_logo{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
#cart_logo img{
  width: 200px;
  margin-top: 3rem;
}
#checkout{
  width: 100%;
  // background: white;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
}

#check_btn{
  width: 350px;
}
</style>

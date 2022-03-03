<template>
  <b-container style=" height: calc(100vh - 90px);">
    <div class="col-12 orders_head">
      <a href="" to='/'>
        <div active class="orders_head_logo"></div>
      </a>
      <h3>我的訂單</h3>
    </div>
    <b-table id="orders_table" striped :items="orders" :fields='fields'>
      <template #cell(date)='data'>
        <div>{{ new Date(data.item.date).toLocaleString('zh-tw') }}</div>
      </template>
      <template #cell(products)='data'>
        <ul>
          <li v-for='product in data.item.products' :key='product._id'>
          {{ product.product.name }} x {{ product.quantity }}
          </li>
        </ul>
      </template>
    </b-table>
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      orders: [],
      fields: [
        { key: '_id', label: '單號' },
        { key: 'date', label: '日期' },
        { key: 'products', label: '商品' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
<style lang="scss">
.orders_head{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
#orders_table{
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.orders_head_logo{
  width: 250px;
  height: 150px;
  background: url(../assets/logo.png) center/cover;
  margin: 3rem;
}
</style>

<template>
  <b-container style="height: calc(100vh - 90px);">
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
#orders_table{
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>

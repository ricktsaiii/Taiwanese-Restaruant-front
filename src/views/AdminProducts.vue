<template>
<div id="adminproduct">
  <b-container>
      <div class="admin_right">
        <div class="admin_right_1">
          <b-button v-b-modal.modal-product pill class="adminproduct_add">+&emsp;新 增</b-button>
        </div>
        <b-modal
        id="modal-product"
        :title="form._id.length > 0 ? '編輯商品':'新增商品'"
        centered
        ok-title='送出'
        cancel-variant='danger'
        cancel-title='取消'
        @ok="submitModal"
        @hidden="resetForm"
        :ok-disabled="modalSubmitting"
        :cancel-disabled="modalSubmitting"
        >
          <b-form-group
          label="商品名稱"
          label-for="input-name"
          description="必填欄位"
          invalid-feedback="商品名稱必填"
          :state="state.name"
          >
          <b-form-input
            id="input-name"
            v-model="form.name"
            type="text"
            required
            placeholder="請輸入商品名稱"
            :state="state.name"
          ></b-form-input>
          </b-form-group>
          <b-form-group
          label="商品價格"
          label-for="input-price"
          description="必填欄位"
          invalid-feedback="價格必需是 0 元以上"
          :state="state.price"
          >
          <b-form-input
            id="input-price"
            v-model="form.price"
            type="number"
            min="0"
            required
            placeholder="請輸入商品價格"
            :state="state.price"
          ></b-form-input>
          </b-form-group>
          <b-form-group
          label="商品分類"
          label-for="input-category"
          description="商品分類"
          invalid-feedback="必填分類"
          :state="state.category"
          >
          <b-form-select
            id="input-category"
            v-model="form.category"
            required
            :options="categories"
            placeholder="請輸入商品分類"
            :state="state.category"
          ></b-form-select>
          </b-form-group>
          <b-form-group
          label="商品描述"
          label-for="input-details"
          description="必填欄位"
          invalid-feedback="必填說明"
          :state="state.details"
          >
          <b-form-textarea
            id="input-details"
            v-model="form.details"
            required
            rows="3"
            max-row="6"
            placeholder="請輸入商品說明"
          ></b-form-textarea>
          </b-form-group>
          <b-form-group
          label="商品內文"
          label-for="input-description"
          description="必填欄位"
          invalid-feedback="必填說明"
          :state="state.description"
          >
          <b-form-textarea
            id="input-description"
            v-model="form.description"
            required
            rows="3"
            max-row="6"
            placeholder="請輸入商品說明"
          ></b-form-textarea>
          </b-form-group>
          <br>
            <img-inputer
            accept="image/*"
            v-model="form.image"
            theme="light"
            size="large"
            bottom-text="點選或拖拽圖片以修改"
            hover-text="點選或拖拽圖片以修改"
            placeholder="點選或拖拽選擇圖片"
            :max-size="1024"
            exceed-size-text="檔案大小不能超過"
            />
            <br>
          <b-form-group label="">
            <b-form-radio v-model="form.sell" :value="true">上架</b-form-radio>
            <b-form-radio v-model="form.sell" :value="false">下架</b-form-radio>
          </b-form-group>
      </b-modal>
      <div class="admin_content">
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
    <form class="d-flex Search-form">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn search" type="submit">搜 尋</button>
          </form>
        </div>
      </div>
      <b-table
      id="admin_content_body"
      :items="products"
      :fields="fields"
      ref="table"
      >
      <template #cell(image)="data">
        <img v-if="data.item.image" :src="data.item.image" style= "height: 50px; width: 100px">
      </template>
      <template #cell(sell)="data">
        {{ data.item.sell ? 'v' : '' }}
      </template>
      <template #cell(action)="data">
        <button @click="editProduct(data.index)" class="btn search">編 輯</button>
      </template>
      </b-table>
        <router-view></router-view>
    </div>
  </b-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'name', label: '名稱' },
        { key: 'price', label: '價格' },
        { key: 'category', label: '分類' },
        { key: 'details', label: '說明' },
        { key: 'description', label: '內文' },
        { key: 'sell', label: '上架' },
        { key: 'action', label: '操作' }
      ],
      products: [],
      modalSubmitting: false,
      categories: [
        { text: '請選擇分類', value: '' },
        '新年限定禮盒', '經典禮盒', '長輩一定愛'
      ],
      form: {
        name: '',
        price: null,
        details: '',
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        price: this.form.price === null ? null : this.form.price >= 0,
        category: this.form.category.length === 0 ? null : true
      }
    }
  },
  methods: {
    async submitModal (event) {
      event.preventDefault()
      if (!this.state.name || !this.state.price || !this.state.category) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.modalSubmitting = true

      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }

      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products.push(data.result)
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products[this.form.index] = { ...this.form, image: data.result.image }
          this.$refs.table.refresh()
        }

        this.$bvModal.hide('modal-product')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }

      this.modalSubmitting = false
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        price: null,
        details: '',
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    },
    editProduct (index) {
      this.form = { ...this.products[index], image: null, index }
      this.$bvModal.show('modal-product')
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>

<style lang="scss">

.admin_right_1{
width: 100%;
float: left;
display: flex;
margin-bottom: 1rem;
}
.adminproduct_add{
  margin-top: 140px;
  margin-left: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;

}
.admin_content{
  width: 100%;
  margin-top: 10px;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  justify-content: space-between;
}

.admin_list{
  border: 2px solid rgb(179 148 98);
  border-radius: 0.5rem;
  background: white;
  height: 40px;
}

.nav-pills>.nav-item{
  display: flex;
  justify-content: center;
  width: 100px;
}

.nav-link{
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}

.nav-pills>.nav-item a{
color: gray;
font-weight: bold;
padding: 0;
}

.nav-pills>.nav-item a:hover{
background:rgb(179 148 98);
color: white;
}

.admin_right_rightList{
display: flex;
}

.search{
  background:rgb(179 148 98);
  color: white;
  width: 100px;
}

.Search-form{
  height: 40px;
}

.admin_right{
  width: 100%;
}

#admin_content_body{
  margin: 3rem;
  background: white;
  border-radius: 10px;
}
</style>

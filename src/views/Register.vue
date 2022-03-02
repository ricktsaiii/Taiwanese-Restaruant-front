<template>
  <div id="register">
    <b-container class="px-0">
      <div class="row">
        <div class="col-12">
          <img src="../assets/logo.png" alt="logo" style="">
          <h3>會員專區</h3>
        </div>
        <div class="col-12 body">
          <b-tabs class="col-12" align="center">
            <b-tab title="登 入" title-link-class="abc" >
              <div class="log_in">
                <b-form @submit.prevent="login" class="content">
                <b-form-group
                  id="input-group-1"
                  label="請輸入手機號碼"
                  label-for="input-1"
                  :state="state.tel"
                  invalid-feedback="手機號碼格式不正確"
                >
                <b-form-input
                  id="input-1"
                  v-model="signin_form.tel"
                  type="tel"
                  placeholder=""
                  :state="state.tel"
                  required
                ></b-form-input>
                </b-form-group>
                  <b-form-group
                  id="input-group-2"
                  label="密碼"
                  label-for="input-2"
                  :state="state.password"
                  ><b-form-input
                  id="input-2"
                  v-model="signin_form.password"
                  placeholder=""
                  type="password"
                  :state="state.password"
                ></b-form-input>
                </b-form-group>
                <b-button class="content_btn" type="submit">登 入</b-button>
                </b-form>
              </div>
            </b-tab>
            <b-tab title="註 冊">
              <div class="sign_up">
              <b-form @submit.prevent="register" class="content">
                <b-form-group
                  id="input-group-1"
                  label="請輸入手機號碼"
                  label-for="input-1"
                  :state="state.tel"
                  invalid-feedback="手機號碼格式不正確"
                >
                <b-form-input
                  id="input-1"
                  v-model="register_form.tel"
                  type="tel"
                  placeholder=""
                  :state="state.tel"
                  required
                ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="請輸入電子信箱"
                  label-for="input-1"
                  :state="state.email"
                  invalid-feedback="電子信箱格式不正確"
                >
                <b-form-input
                  id="input-1"
                  v-model="register_form.email"
                  type="email"
                  placeholder=""
                  :state="state.email"
                  required
                ></b-form-input>
                </b-form-group>
                  <b-form-group
                  id="input-group-2"
                  label="密碼"
                  label-for="input-2"
                  :state="state.password"
                  ><b-form-input
                  id="input-2"
                  v-model="register_form.password"
                  placeholder=""
                  type="password"
                  :state="state.password"
                  invalid-feedback="格式長度不正確"
                ></b-form-input>
                </b-form-group>
                <b-button class="content_btn" type="submit">註 冊</b-button>
              </b-form>
            </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import validator from 'validator'

export default {
  data () {
    return {
      register_form: {
        email: '',
        password: '',
        tel: ''
      },
      // show: true
      signin_form: {
        tel: '',
        password: ''
      }
    }
  },
  computed: {
    state () {
      return {
        tel: this.register_form.tel.length === 0 ? null : this.register_form.tel.length === 10,
        password: this.register_form.password.length === 0 ? null : this.register_form.password.length >= 4 && this.register_form.password.length <= 20,
        email: this.register_form.email.length === 0 ? null : validator.isEmail(this.register_form.email)
      }
    }
  },
  methods: {
    async register () {
      try {
        await this.api.post('/users', this.register_form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    login () {
      this.$store.dispatch('user/login', this.signin_form)
    }
  }
}
</script>

<style lang="scss" scoped>
#register{
  // height: 100vh;
  height: calc(100vh - 90px)
}

#register>.container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}

.col-12 img {
margin: 3rem 0 3rem 0;
width: 200px;
}

.body{
  width: 500px;
  height: 500px;
}

.log_in{
  margin: 0 auto 0 auto;
  width: 500px;
  height: 100%;
  border: 1px rgb(179, 148, 98) solid;
  border-radius: 3%;
  background: white;
  display: flex;
}

.sign_up{
  margin: 0 auto 0 auto;
  width: 500px;
  height: 100%;
  border: 1px rgb(179, 148, 98) solid;
  border-radius: 3%;
  background: white;
  display: flex;
}

.content{
  width: 80%;
  margin: 3rem;
  text-align: start;
  justify-content: center;
  flex-direction: column;
}

.content_btn{
  width: 100%;
  margin-top: 2rem;
  background-color: rgb(179, 148, 98);
}

#input-group-1 label:after {
    content: ' *';
    color: red;
    font-size: 18px;
}

#input-group-2 label:after {
    content: ' *';
    color: red;
    font-size: 18px;
}

#input-group-1 label,
#input-group-2 label{
color: rgb(90, 90, 90);
}

.nav-item{
  width: 150px;
}

#__BVID__33__BV_tab_controls_ .nav-link {
  background-color: white !important;
  color: black;
}

#__BVID__33__BV_tab_controls_ .active {
  background-color: rgb(179, 148, 98) !important;
  color: white;
}

// .abc{
//     background-color: rgb(179, 148, 98) !important;
//   color: white;
// }

// #__BVID__23__BV_tab_controls_ .active::after {
//   content:"";
//   border: 2px rgb(255, 255, 255) solid;
//   transform: rotate(0deg);
//   top: 40px;
//   width: 149px;
//   position: absolute;
//   left: 231px;
// }
</style>

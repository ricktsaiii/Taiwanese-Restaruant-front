# front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

主色(綠)：rgb 35 50 36
底色(綠)：rgb 35 60 45
主色(金)：rgb 179 148 98
#ababab
字型

輪播圖遮罩

備用
<template>
  <div id="register">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <img src="../assets/logo.png" alt="logo" style="">
          <h3 style="margin-bottom: 5rem;">會員專區</h3>
        </div>
        <div class="col-lg-6">
          <div class="box">
            <h4>登入</h4>
          </div>
          <div class="sign_in">
            <b-form class="content">
              <b-form-group
                id="input-group-1"
                label="E-mail"
                label-for="input-1"
              >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder=""
                required
              ></b-form-input>
              </b-form-group>
                <b-form-group
                id="input-group-2"
                label="密碼"
                label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder=""
                required
              ></b-form-input>
              </b-form-group>
              <b-button class="content_btn" type="submit">登 入</b-button>
            </b-form>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="box">
            <h4>註冊</h4>
          </div>
          <div class="sign_in">
            <b-form class="content">
              <b-form-group
                id="input-group-1"
                label="請輸入電子郵件"
                label-for="input-1"
              >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder=""
                required
              ></b-form-input>
              </b-form-group>
                <b-form-group
                id="input-group-2"
                label="密碼"
                label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder=""
                required
              ></b-form-input>
              </b-form-group>
              <b-button class="content_btn" type="submit">註 冊</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss">
#register{
  height: 100%;
}

.container{
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

.sign_in{
  margin: 0 auto 0 auto;
  width: 500px;
  height: 300px;
  border: 1px rgb(179, 148, 98) solid;
  border-radius: 3%;
  background: white;
  display: flex;
}

.box{
  width: 100%;
  display: flex;
  text-align: start;
  padding-left: 3rem;
}

.box h4 {
  color: rgb(179, 148, 98);
}

.content{
  width: 80%;
  margin: auto;
  text-align: start;
  justify-content: center;
  flex-direction: column;
}

.content_btn{
  width: 120px;
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
</style>




hover 
filter: drop-shadow

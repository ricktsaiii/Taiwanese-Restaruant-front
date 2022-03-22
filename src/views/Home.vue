<template>
<div id="home">
    <loading :active.sync="isLoading" color="#B39462"></loading>
  <div class="section_1">
    <div id="knife_left">
      <img src="../assets/knife_1.png" alt="">
    </div>
      <img id="pig" src="../assets/pig.png" alt="">
    <div id="logo" style="z-index: 1000;">
      <img src="../assets/logo.png">
    </div>
      <!-- <img id="table" src="../assets/table.png" alt=""> -->
      <img id="cow" src="../assets/cow.png" >
    <div id="knife_right">
      <img src="../assets/knife_2.png" alt="">
    </div>
  </div>
  <b-carousel
      id="carousel-1"
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
        img-src="../assets/banner1.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/banner2.jpg">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/banner3.jpg"></b-carousel-slide>
    </b-carousel>
    <div class="section_3" id="section_3">
      <div class="line">
        <div class="row m-0">
            <div class="col-lg-7 p-0">
              <div class="section_3_left">
                <h1>about us</h1>
                <p>
                  夜市小吃，是台灣美食給人的第一印象，但手工繁複的精緻料理，卻被時間洪流掩沒。<br>
                  團隊費時兩年，蒐羅台灣的山珍海味，反覆運用台灣原生種食材做出老一輩中記憶的味道，我們求教老師傅，找尋老食譜，但也不排斥新式料理手法，<br>
                  希望用這片土地上種出來的食材，還原台菜最精彩的味道。
                </p>
                <div class="btn_box">
                  <b-button to="/register" class="btn_circle"></b-button>
                </div>
              </div>
            </div>
            <div class="col-lg-5 p-0" style="justify-content: center; display: flex;">
              <div class="section_3_right"></div>
            </div>
        </div>
      </div>
    </div>
    <div class="section_4">
      <div class="row m-0 h-100">
        <div class="col-lg-6 p-0 h-100">
          <div class="section_4_left h-100">
            <img src="../assets/pic_1.webp" >
          </div>
        </div>
        <div class="col-lg-6 p-0 mx-auto">
          <div class="section_4_right h-100">
            <p>
              大面積的窗戶，讓陽光從這棟老房從沒出現過的角度投射進屋。從屋外仰望，就是這棟老房從1963年留下至今的樓梯與手把，洗石子地板歷久彌新，實木手把更透著老屋與老臺灣才有的特殊回憶，步登上下樓， 裡外都是不同的風景。
            </p>
            <p style="font-size: 8px;">
            Stand silently decade after decade, collecting countless memories.<br>
            We preserve this building’s original appearance and beauty while giving it new life, transformed an abandoned residential from the 1963 into an LivinGreen space. <br>
            Left empty for a long period, and lacking sunlight and ventilation, it was first intended to be used as a police station, observing the local natural environment, and at the same time interacting with area residents. complimenting the surrounding landscape and blooming with greenery.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section_5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.281462022726!2d121.41889146239265!3d25.043221588179605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bed3dc9b59%3A0x57e6439a2db0fa2a!2zMjQz5paw5YyX5biC5rOw5bGx5Y2A5rOw5bGx6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1642220687918!5m2!1szh-TW!2stw" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="section_6">
      <div class="section_6_text">
        <p>營業時間 Opening Hours</p>
        <p>週二至週四 12:00pm - 6:30pm</p>
        <p>週五至週日 12:00pm - 8:00pm</p>
        <p>週一公休</p>
        <br>
        <p>臺北市大安區潮州街76號</p>
        <p>+886 2239-12866</p>
        <p>No. 76, ChaoZhou Street , Da'an Dist., Taipei, Taiwan.</p>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      isLoading: true
    }
  },
  created () {
    this.isLoading = false
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

#home{
  background-color: rgb(35, 59, 45);
  height: 100%;
}

.section_1{
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

#logo{
  position: absolute;
  justify-content: center;
}

#pig{
  width: 320px;
  height: 320px;
  position: absolute;
  left: 300px;
  top: -30px;
}

#cow{
  width: 350px;
  height: 350px;
  position: absolute;
  right: 300px;
  top: 0px;
}

#knife_left{
position: absolute;
left: 8%;
}

#knife_right{
position: absolute;
right: 10%;
z-index: 10;
}

#table{
  position: absolute;
  right: -100px;
  top: 50px;
  width: 500px;
}

#carousel-1 .carousel-control-prev-icon {
  background:url(../assets/Carousel_left.png) no-repeat left top/cover;
  width:50px;
  height:50px;
}

#carousel-1 .carousel-control-next-icon {
  background:url(../assets/Carousel_right.png) no-repeat left top/cover;
  width:50px;
  height:50px;
}

.carousel-control-prev{
  background-image: linear-gradient(to right, rgb(0, 0, 0,1) 0%, rgb(0, 0, 0,0) 100%);
}

.carousel-control-next{
  background-image: linear-gradient(to right, rgb(0, 0, 0,0) 0%, rgb(0, 0, 0,1) 100%);
}
@media (max-width: 1550px) {

#knife_left{
position: absolute;
left: 0%;
z-index: 10;

}
  #pig{
  width: 300px;
  height: 300px;
  left: 100px;
  top: 0px;
}
#cow{
  width: 320px;
  height: 320px;
  position: absolute;
  right: 80px;
  top: 20px;
}

#knife_right{
position: absolute;
right: 2%;
z-index: 10;
}
}
@media (max-width: 574px) {

#carousel-1{
  height: 300px;
}
.carousel-inner{
  width: 100%;
  height: 100%;
}
.carousel-item {
  height: 100%;
  width: 100%;
}
.carousel-item img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#knife_left{
position: absolute;
left: -10%;
z-index: 10;
}
#knife_left img{
width: 140px;
}

  #pig{
  width: 300px;
  height: 300px;
  left: -180px;
  top: 50px;
}
#cow{
  width: 300px;
  height: 300px;
  position: absolute;
  right: -180px;
  top: 85px;
}

#knife_right{
position: absolute;
right: -10%;
z-index: 10;
}
#knife_right img{
width: 140px;
}

#logo img{
  width: 250px;
}
}
</style>

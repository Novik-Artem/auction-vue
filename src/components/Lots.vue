<template>
  <div :class="$style.lots">
    <div :class="$style.content">
      <div :class="$style.title">{{ getSlides[getThisSlide].title }}</div>
      <div :class="$style.secondtitle">
        {{ getSlides[getThisSlide].secondTitle }}
      </div>
      <div :class="$style.text">
        {{ getSlides[getThisSlide].text }}
      </div>
      <a href="" :class="$style.button">
        Присоединиться
      </a>
    </div>
    <div :class="$style.slider">
        <div :class="$style.images">
          <img src="../assets/img/lSlider.png" alt="" :class="$style.image" @click="onPrev" />
          <img src="../assets/img/elipse.png" alt=""  :class="$style.image"/>
          <img src="../assets/img/rSlider.png" alt="" :class="$style.image" @click="onNext" />
        </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapMutations} from "vuex";
  export default {
    computed: mapGetters(["getSlides", "getThisSlide"]),
    methods: {
    ...mapMutations(["nextSlide", "previosSlide"]),
    onNext() {
      this.nextSlide();
    },
    onPrev() {
      this.previosSlide();
    },
  },
  }
</script>
<style lang="scss" module>
.lots {
  padding: 70px 0 0 0;
  margin: 0 0 80px 0;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "PFDinTextCondPro";
  padding: 40px 10px;
  background: url(../assets/img/main-picture.png) 50% 450px;
}
.title {
  font-family: "CeremoniousOne";
  font-size: 40px;
  line-height: 25px;
  color: #bb9c66;
  margin: 0 0 30px 0;
}
.secondtitle {
  font-family: "PFDinTextCondPro";
  font-size: 35px;
  line-height: 35px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #ffffff;
  margin: 0 0 25px 0;
}
.text {
  max-width: 620px;
  margin: 0 auto 25px auto;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
}
.button {
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  padding: 10px 0;
  border: 3px solid #bb9c66;
  font-size: 15px;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  transition: all 0.5s ease 0s;
  margin: 0 0 40px 0;
}
.button:hover {
  background-color: #5d5354;
  letter-spacing: 0.3rem;
}
.slider {
  position: relative;
  bottom: 40px;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  background-color: #fff;
  transform: rotate(-45deg);
}
.images {
  position: absolute;
  z-index: 2;
  top: 35px;
  left: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
}
.image:first-child,
.image:last-child {
  cursor: pointer;
}

.image:nth-child(2) {
  margin: 0 10px;
  animation: rotate 2s infinite linear;
}
@keyframes rotate {
  0% {

  }
  100% {
    transform: rotate(360deg);
  } 
}
@media (max-width: 820px) {
  .secondtitle {
    font-size: 30px;
  }
}
@media (max-width: 710px) {
  .secondtitle {
    font-size: 25px;
    line-height: 15px;
  }
  .text {
    max-width: 450px;
    margin: 15px auto;
    font-size: 14px;
  }
}
@media (max-width: 598px) {
  .lots {
    margin: 0 0 35px 0;
  }
}
@media (max-width: 592px) {
  .content {
    padding: 20px 10px;
  }
  .secondtitle {
    font-size: 13px;
    line-height: 10px;
  }
  .title {
    font-size: 35px;
  }
  .button {
    margin: 0 0 50px 0;
  }
}
</style>

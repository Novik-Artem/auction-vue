<template>
  <div :class="$style.content">
    <div :class="$style.conteiner">
      <div :class="$style.image">
        <img :src="getChosenLot.image" alt="" />
      </div>
      <div :class="$style.text">
        {{ getChosenLot.text }}
      </div>
      <div :class="$style.description">
        {{ getChosenLot.description }}
      </div>
      <div :class="$style.row">
        <div :class="$style.column">
          <img :src="getChosenLot.leftDecor" alt=""/>
          <div :class="$style.number">
            {{ getChosenLot.leftRateNumber }}
          </div>
        </div>
        <div :class="$style.column">
          <div :class="$style.text">
            {{ getChosenLot.rateText }}
          </div>
          <div :class="$style.price">
            {{ getChosenLot.price }}
          </div>
        </div>
        <div :class="$style.column">
          <img :src="getChosenLot.rightDecor" alt=""/>
          <div :class="$style.number">
            {{ getChosenLot.rightRateNumber }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  computed: mapGetters(["getChosenLot"]),
};
</script>
<style lang="scss" module>
.content {
  min-width: 100vw;
  min-height: 100vh;
  background-color: #e0dbd7;
  font-family: "PFDinTextCondPro";
  padding: 40px 20px;
}
.conteiner {
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
  padding: 60px 15px;
  background-color: #fff;
  border-radius: 40px;
}
.image img {
  width: 350px;
  height: 350px;
}
.image {
  margin: 0 0 20px 0;
}
.text {
  font-size: 20px;
  margin: 0 0 20px 0;
}
.description {
  max-width: 600px;
  margin: 0 auto 35px auto;
  font-size: 17px;
  text-align: center;
}
.row {
  display: flex;
  justify-content: center;
  margin: 0 0 25px 0;
}
.column:nth-child(2) {
  padding: 0 10px;
}
.price {
  font-family: "BravoRG";
  font-size: 50px;
  line-height: 35px;
  font-weight: 400;
  color: #1c242a;
}
@media (max-width: 592px) {
  .image img {
  width: 250px;
  height: 250px;
}
.conteiner {
  padding: 30px 15px;
}
}
</style>

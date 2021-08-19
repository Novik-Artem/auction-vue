<template>
  <div :class="$style.wrapper">
    <Header />
    <div :class="$style.lot">
    <div :class="$style.content" v-for="lot in getBoughtLots" :key="lot.id">
      <img
        :src="lot.image"
        alt=""
        :class="$style.image"
        @click="onGiveInfo(), $router.push('/lot')"
      />
      <div :class="$style.text">
        {{ lot.text }}
      </div>
      <div :class="$style.price">
        {{ lot.price }}
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "./Header";
export default {
  computed: mapGetters(["getBoughtLots"]),
  components: {
    Header,
  },
};
</script>
<style lang="scss" module>
.lot {
  flex: 0 1 33.333%;
  margin: 0 0 30px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 100px 0;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #bb9c66;
  padding: 15px;
  margin: 15px;
}
.image {
  width: 250px;
  height: 250px;
  margin: 0 0 30px 0;
}
.text {
  font-family: "PFDinTextCondPro";
  font-size: 21px;
  line-height: 25px;
  color: #000000;
  max-width: 250px;
  margin: 0 auto 15px auto;
  flex: 1 1 auto;
  text-align: center;
}
.price {
  font-family: "BravoRG";
  font-size: 50px;
  line-height: 35px;
  font-weight: 400;
  color: #1c242a;
  padding: 0 10px;
}
@media (max-width: 884px) {
  .lot {
    flex: 0 1 50%;
    justify-content: center;
  }
  .lot:last-child {
    flex: 0 1 100%;
  }
}
@media (max-width: 598px) {
  .lot {
    flex: 0 1 100%;
    justify-content: center;
  }
}
@media (max-width: 592px) {
  .lot {
    flex: 0 1 100%;
  }
}
</style>

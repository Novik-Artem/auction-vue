<template>
  <div :class="$style.allLots">
    <div :class="$style.conteiner">
      <div :class="$style.top">
        <img
          src="../assets/img/leftarrows.png"
          alt=""
        />
        <div :class="$style.title">
          Все лоты
        </div>
        <img
          src="../assets/img/rightarrows.png"
          alt=""
        />
      </div>
      <div :class="$style.content">
        <div :class="$style.row">
          <AllLotsColumn
            v-for="lot in getAllLots"
            :key="lot.id"
            :id="lot.id"
            :lotText="lot.text"
            :lotImage="lot.image"
            :lotIcon="lot.icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AllLotsColumn from "./AllLotsColumn";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getAllLots"]),
  components: {
    AllLotsColumn,
  },
};
</script>
<style lang="scss" module>
.allLots {
  font-family: "PFDinTextCondPro";
  text-transform: uppercase;
  margin: 0 0 80px 0;
}
.conteiner {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
}
.top {
  max-width: 300px;
  margin: 0 auto 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  padding: 12.5% 0 0 0;
  font-size: 21px;
  line-height: 25px;
  color: #000000;
  width: 100px;
  height: 100px;
  border: 3px solid #bb9c66;
  border-radius: 50%;
  transition: all 1.3s ease 0s;
}
.title:hover {
  transform: rotate(360deg);
}
.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
}
.soldLots,
.addLots {
  cursor: pointer;
  max-width: 250px;
  margin: 0 auto;
  padding: 10px 0;
  border: 3px solid #bb9c66;
  color: #000000;
  background-color: #fff;
  font-size: 15px;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.5s ease 0s;
}
.soldLots {
  margin: 0 auto 20px auto;
}
.soldLots:hover,
.addLots:hover {
  background-color: #6f5b47;
  color: #ffffff;
  border-radius: 10px;
}
@media (max-width: 598px) {
  .allLots {
    margin: 0 0 20px 0;
  }
  
}
</style>

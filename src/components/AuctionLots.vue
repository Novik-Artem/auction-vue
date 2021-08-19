<template>
  <div :class="$style.auctionLots">
    <div :class="$style.conteiner">
      <div :class="$style.title">
        Популярные
      </div>
      <div :class="$style.secondtitle">
        лоты под аукцион
      </div>
      <div :class="$style.images">
        <Decor />
        <img src="../assets/img/minclock.png" alt="" :class="$style.icon" />
        <Decor />
      </div>
      <div :class="$style.row">
        <AuctionLotsColumn
          v-for="lot in getAuctionLots"
          :key="lot.id"
          :lotId="lot.id"
          :lotText="lot.text"
          :lotImage="lot.image"
          :lotLeftDecor="lot.leftDecor"
          :lotLeftRateNumber="lot.leftRateNumber"
          :lotRightDecor="lot.rightDecor"
          :lotRightRateNumber="lot.rightRateNumber"
          :lotPrice="lot.price"
          :rateText="lot.rateText"
          :upPrice="lot.upPrice"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AuctionLotsColumn from "./AuctionLotsColumn";
import Decor from "./Decor";
export default {
  computed: mapGetters(["getAuctionLots"]),
  components: {
    AuctionLotsColumn,
    Decor,
  },
};
</script>
<style lang="scss" module>
.auctionLots {
  font-family: "PFDinTextCondPro";
  margin: 0 0 20px 0;
}
.conteiner {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
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
  color: #1c242a;
  margin: 0 0 25px 0;
}
.images {
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
  flex-shrink: inherit;
}
.icon img {
  max-width: 100%;
}
.icon {
  margin: 0 0 30px 0;
  padding: 0 5px 0 10px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /*justify-content: space-around;*/
}
@media (max-width: 592px) {
  .secondtitle {
    font-size: 25px;
  }
  .icon {
    padding: 0 0 0 5px;
  }
}
</style>

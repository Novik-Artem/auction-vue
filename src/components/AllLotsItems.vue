<template>
  <div :class="$style.row">
    <Header />
    <AllLotsItem
      :class="$style.line"
      v-for="lot in getChosenLots"
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
</template>
<script>
import AllLotsItem from "./AllLotsItem";
import Header from "./Header";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getChosenLots"]),
  components: {
    AllLotsItem,
    Header,
  },
};
</script>
<style lang="scss" module>
  .line {
    padding: 100px 0 0 0;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 498px) {
    .row  {
      padding:0 10px;
    }
  }
</style>
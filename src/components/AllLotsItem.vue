<template>
  <div :class="$style.allLotsItem">
    <div :class="$style.content">
      <img
        :src="lotImage"
        alt=""
        :class="$style.image"
        @click="onGiveInfo(), $router.push('/lot')"
      />
      <div :class="$style.text">
        {{ lotText }}
      </div>
      <div :class="$style.rate">
        <div :class="$style.row">
          <div :class="$style.rateColumn">
            <img :src="lotLeftDecor" alt="" />
            <div :class="$style.number">
              {{ lotLeftRateNumber }}
            </div>
          </div>
          <div :class="$style.rateColumn">
            <div :class="$style.rateText">
              {{ rateText }}
            </div>
            <div :class="$style.price">
              {{ lotPrice }}
            </div>
          </div>
          <div :class="$style.rateColumn">
            <img :src="lotRightDecor" alt="" />
            <div :class="$style.number">
              {{ lotRightRateNumber }}
            </div>
          </div>
        </div>
      </div>
      <button
        href="#"
        :class="$style.btn"
        @click="UpPrice(), change(), submit()"
      >
        ПОДНЯТЬ СТАВКУ
      </button>
      <span v-if="!upPrice"></span>
      <form action="#" v-else @submit.prevent="UpPrice(), change(), submit()">
        <input
          :class="$style.i"
          type="number"
          placeholder="введите новую ставку"
          v-model="price"
        />
      </form>
      <span v-if="!upPrice"></span>
      <form action="#" v-else @submit.prevent="UpPrice(), change(), submit()">
        <input
          :class="$style.i"
          type="number"
          placeholder="прибавить к ставке"
          v-model="pricePlus"
        />
      </form>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    lotId: String,
    lotText: String,
    lotImage: String,
    lotLeftDecor: String,
    lotLeftRateNumber: Number,
    lotRightDecor: String,
    lotRightRateNumber: Number,
    lotPrice: Number,
    rateText: String,
    upPrice: Boolean,
  },
  data() {
    return {
      price: null,
      pricePlus: null,
    };
  },
  methods: {
    ...mapMutations([
      "setChosenLot",
      "openUpPrice",
      "addNewPrice",
      "changePrice",
      "plusPrice",
      "changePricePlus",
    ]),
    onGiveInfo() {
      this.setChosenLot(this.lotId);
    },
    UpPrice() {
      this.openUpPrice(this.lotId);
    },
    change() {
      this.changePrice(this.price);
      this.price = null;
      this.changePricePlus(this.pricePlus)
      this.pricePlus = null;
    },
    submit() {
      this.addNewPrice(this.lotId);
      this.plusPrice(this.lotId);
    },
  },
};
</script>
<style lang="scss" module>
.allLotsItem {
  padding: 120px 10px;
  flex: 0 1 25%;
  font-family: "PFDinTextCondPro";
  margin: 0 0 10px 0;
}
.allLotsItem:last-child {
  margin: 0;
}
.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image {
  width: 250px;
  height: 250px;
  margin: 0 0 30px 0;
}
.text {
  font-size: 21px;
  line-height: 25px;
  color: #000000;
  max-width: 250px;
  margin: 0 auto 30px auto;
}
.rate {
  margin: 0 0 30px 0;
}
.row {
  display: flex;
}
.rateText {
  font-size: 14px;
  line-height: 25px;
  color: #000000;
  margin: 0 0 15px 0;
  padding: 0 10px;
}
.price {
  font-family: "BravoRG";
  font-size: 50px;
  line-height: 35px;
  font-weight: 400;
  color: #1c242a;
}
.btn {
  font-size: 21px;
  line-height: 25px;
  color: #000000;
  background-color: #fff;
  width: 203px;
  height: 50px;
  border: 3px solid #bb9c66;
  padding: 10px 20px;
  transition: all 0.5s ease 0s;
  margin: 0 0 15px 0;
}
.btn:hover {
  background-color: #6f5b47;
  color: #ffffff;
  border-radius: 10px;
}
.i {
  font-size: 17px;
  line-height: 25px;
  max-width: 203px;
  color: #000000;
  border: 2px solid #bb9c66;
  padding: 10px 20px;
  margin: 0 0 5px 0;
}
@media (max-width: 498px) {
  .allLotsItem {
    flex: 0 1 100%;
    padding: 10px;
    border: 2px solid #bb9c66;
  }
  .allLotsItem:first-child {
    margin: 30px 0 0 0;
  }
}
</style>

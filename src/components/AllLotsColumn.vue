<template>
  <div :class="$style.column" @click="ChangeLots(), $router.push('/lots')">
    <div :class="$style.content">
      <div :class="$style.icon">
        <img :src="lotIcon" alt="" />
      </div>
      <div :class="$style.text">
        {{ lotText }}
      </div>
      <div :class="$style.decor">
        <span></span>
      </div>
      <div :class="$style.image">
        <img :src="lotImage" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeLots"]),
    ChangeLots() {
      this.changeLots(this.lotText);
    },
  },
  props: {
    lotText: String,
    lotImage: String,
    lotIcon: String,
  },
};
</script>
<style lang="scss" module>
.column {
  flex: 0 1 33.333%;
}
.content {
  flex: 0 1 25%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px 10px 30px 10px;
  align-items: center;
  height: 250px;
  margin: 0 0 20px 0;
}
.text {
  font-family: "PFDinTextCondPro";
  font-size: 21px;
  line-height: 25px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  padding: 30px 0 0 0;
  flex: 1 1 auto;
  max-width: 190px;
  margin: 0 auto;
}
.decor {
  display: flex;
  align-items: center;
  justify-content: center;
}
.decor::before,
.decor::after {
  content: "";
  height: 1px;
  width: 25px;
  background-color: #bb9c66;
  flex: 1 1 auto;
}
.decor span {
  content: "";
  width: 15px;
  height: 15px;
  border: 1px solid #bb9c66;
  transform: rotate(-45deg);
  flex: 0 0 15px;
  margin: 0 12.5px;
}
.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
@media (max-width: 820px) {
  .column {
    flex: 0 1 50%;
  }
  .column:last-child {
    flex: 0 1 100%;
  }
}
@media (max-width: 592px) {
  .column {
    flex: 0 1 100%;
  }
}
</style>

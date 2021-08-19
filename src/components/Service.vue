<template>
  <div :class="$style.service">
    <div :class="$style.conteiner">
      <div :class="$style.top">
        <div :class="$style.title">
          Дополнительные
        </div>
        <div :class="$style.secondtitle">
          услуги
        </div>
        <div :class="$style.images">
          <Decor />
          <img src="../assets/img/02.png" alt="" :class="$style.icon"/>
          <Decor />
        </div>
      </div>
      <div :class="$style.content">
        <div :class="$style.row">
          <ServiceColumn
            v-for="item in getServiceRow"
            :key="item.id"
            :id="item.id"
            :itemText="item.text"
            :itemImage="item.image"
            :itemTitle="item.title"
            :itemInfo="item.info"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ServiceColumn from "./ServiceColumn";
import Decor from "./Decor";
export default {
  computed: mapGetters(["getServiceRow"]),
  components: {
    ServiceColumn,
    Decor,
  },
};
</script>
<style lang="scss" module>
.service {
  background-color: #1c242a;
  padding: 65px 0;
  margin: 0 0 50px 0;
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
  color: #ffffff;
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
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 598px) {
  .service {
    padding: 30px 10px;
    margin: 0 0 20px 0;
  }
}
</style>

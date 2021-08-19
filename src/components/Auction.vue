<template>
  <div>
    <Header />
    <Lots />
    <AuctionLots />
    <AllLots />
    <BlockText />
    <Service />
    <Info />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header";
import Lots from "../components/Lots";
import AuctionLots from "../components/AuctionLots";
import AllLots from "../components/AllLots";
import BlockText from "../components/BlockText";
import Service from "../components/Service";
import Info from "../components/Info";
import Footer from "../components/Footer";
import {mapGetters} from "vuex";
export default {
  computed: mapGetters(["getIsBurgerOpen"]),
  components: {
    Header,
    Lots,
    AuctionLots,
    AllLots,
    BlockText,
    Service,
    Info,
    Footer,
  },
};
</script>
<style lang="scss" module>
  .wrapper.lock {
    overflow: hidden;
  }
</style>



import VueRouter from "vue-router";
import Auction from "../components/Auction";
import AllLotsItems from "../components/AllLotsItems";
import ItemDescription from "../components/ItemDescription";
import BoughtLots from "../components/BoughtLots";
import CreateLot from "../components/CreateLot";
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Auction,
    },
    {
      path: "/lots",
      component: AllLotsItems,
    },
    {
      path: "/lot",
      component: ItemDescription,
    },
    {
      path: "/boughtLots",
      component: BoughtLots,
    },
    {
      path: "/addLot",
      component: CreateLot,
    },
  ],
});

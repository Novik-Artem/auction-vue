<template>
  <header :class="$style.header">
    <div :class="$style.conteiner">
      <div :class="$style.row">
        <div :class="$style.column">
          <a href="#" :class="$style.logo">
            <img src="../assets/img/header-logo.png" alt="" />
          </a>
        </div>
        <div :class="$style.column">
          <div :class="[$style.burger, getIsBurgerOpen ? $style.burgerOpen : '']" @click="open">
            <span></span>
          </div>
          <nav :class="[$style.menu, getIsBurgerOpen ? $style.burgerOpen : '']">
            <ul :class="$style.list" >
              <li>
                <span :class="$style.link" @click="$router.push('/')">Главная</span>
              </li>
              <li>
                <span  :class="$style.link">Аукцион</span>
              </li>
              <li>
                <span :class="$style.link">О проекте</span>
              </li>
              <li>
                <span :class="$style.link" @click="$router.push('/boughtLots')">Проданные лоты</span>
              </li>
              <li>
                <span :class="$style.link" @click="$router.push('/addLot')">Добавить лот</span>
              </li>
            </ul>
          </nav>
        </div>
        <div :class="$style.column">
          <div :class="$style.actions">
            <a href="#" :class="$style.regions"><span>Выбор региона</span></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import {mapGetters, mapMutations} from "vuex";
  export default {
    computed: mapGetters(["getIsBurgerOpen"]),
    methods: {
    ...mapMutations(["openBurger"]),
    open() {
      this.openBurger();
    }
  },
  }
</script>
<style lang="scss" module>
.header {
  background-color: #1c242a;
  position: fixed;
  width: 100%;
  z-index: 5;
}
.conteiner {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
}
.row {
  display: flex;
  height: 75px;
  justify-content: space-between;
  align-items: center;
}
.column {
  display: flex;
  align-items: center;
}
.burger {
  display: none;
}
.list {
  display: flex;
}
.list li {
  margin: 0 15px;
}
.link {
  font-family: "PFDinTextCondPro";
  font-size: 14px;
  letter-spacing: 1px;
  color: #ffffff;
  line-height: 21px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease 0s;
}
.link:hover {
  color:#b59762;
}
.regions {
  font-family: "PFDinTextCondPro";
  font-size: 16px;
  letter-spacing: 1px;
  color: #ffffff;
  line-height: 18px;
  text-transform: uppercase;
  padding: 0 0 0 30px;
  background: url(../assets/img/header-rigion__before.png) left no-repeat;
}
@media (max-width: 810px) {
  .link {
    color: #d0af76;
    font-size: 20px;
    transition: all 0.3s ease 0s;
  }
  .link:hover {
    letter-spacing: 3px;
  }
  .list {
    display: block;
    text-align: center;
  }
  .list li {
    margin: 0 0 30px 0;
  }
  .list li:last-child {
    margin: 0;
  }
  .regions {
    padding: 0 0 0 70px;
    width: 18px;
    height: 18px;
  }
  .regions span {
    display: none;
  }
  .burger {
    display: block;
    position: absolute;
    cursor: pointer;
    top: 30px;
    right: 10px;
    width: 30px;
    height: 19px;
    z-index: 2;
  }
  .burger:before,
  .burger:after {
    content: "";
    background-color: #d0af76;
    position: absolute;
    width: 100%;
    height: 2px;
    right: 0;
    transition: all 0.3s ease 0s;
  }
  .burger:before {
    top: 0;
  }
  .burger:after {
    bottom: 0;
  }
  .burger span {
    background-color: #d0af76;
    position: absolute;
    width: 100%;
    height: 2px;
    right: 0;
    top: 9px;
    transition: all 0.3s ease 0s;
  }
  .burger.burgerOpen:before {
    transform: rotate(45deg);
    top: 9px;
    background-color: #d0af76;
  }
  .burger.burgerOpen:after {
    transform: rotate(-45deg);
    bottom: 9px;
    background-color: #d0af76;
  }
  .burger.burgerOpen span {
    background-color: #d0af76;
    transform: scale(0);
  }
  .menu {
    padding: 80px 0 0 0;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 75px;
    left: 0;
    background-color: #5d5354;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease 0s;
    z-index: 2;
  }
  .menu.burgerOpen {
    opacity: 1;
    visibility: visible;
  }
}
</style>

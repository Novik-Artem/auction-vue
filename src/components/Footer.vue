<template>
  <footer :class="$style.footer">
    <div :class="$style.conteiner">
      <div :class="$style.row">
        <div :class="$style.column">
          <a href="#" :class="$style.logo"
            ><img src="../assets/img/header-logo.png" alt=""
          /></a>
          <a href="" :class="$style.link">Все права защищены © 2014</a>
        </div>
        <div :class="$style.column">
          <div :class="$style.menuLink">
            <a href="" :class="$style.item" v-for="item in items" :key="item.text">{{ item.text }}</a>
          </div>
        </div>
        <div :class="$style.column">
          <a href="#" :class="$style.number"> <span>+7</span>(495) 22-22-22</a>
          <a href="" :class="$style.link">Обратная связь</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { text: "Главная" },
        { text: "Аукцион" },
        { text: "О проекте" },
        { text: "Партнёрам" },
        { text: "Контакты" },
        { text: "Новости" },
        { text: "FAQ" },
        { text: "Реклама" },
        { text: "Соглашение" },
        { text: "Регистрация" },
        { text: "Услуги" },
      ],
    };
  },
};
</script>
<style lang="scss" module>
.footer {
  background-color: #1c242a;
  padding: 50px 0;
}
.conteiner {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.column:first-child {
  display: flex;
  flex-direction: column;
}
.column:nth-child(2) {
	max-width: 470px;
	margin: 0 auto;
}
.column:last-child {
  display: flex;
  flex-direction: column;
}
.link {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: #bb9c66;
}
.number {
  font-family: "BravoRG";
  font-size: 50px;
  text-transform: uppercase;
  color: #bb9c66;
  font-weight: 400;
}
.number span {
  font-family: "BravoRG";
  font-size: 25px;
  line-height: 25px;
  font-weight: 400;
  text-transform: uppercase;
  color: #bb9c66;
}
.item {
  font-family: "PFDinTextCondPro";
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  text-transform: uppercase;
  color: #ffffff;
  display: inline-block;
  margin: 0 6px 0 0;
}
.item:last-child {
  margin: 0;
}
@media (max-width: 900px) {
  .row {
    flex-wrap: wrap;
  }
  .column {
    flex: 0 1 50%;
    margin: 0 0 15px 0;
  }
  .column:first-child {
    order: 1;
  }
  .column:last-child {
    order: 2;
  }
  .column:nth-child(2) {
    flex: 0 1 100%;
    order: 3;
  }
}
@media (max-width: 455px) {
  .column {
    flex: 0 1 100%;
  }
  .footer {
    padding: 30px 0;
  }
}
</style>

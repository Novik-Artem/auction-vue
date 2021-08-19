<template>
  <div :class="$style.info">
    <div :class="$style.conteiner">
      <div :class="$style.top">
        <div :class="$style.title">
          Интересные
        </div>
        <div :class="$style.secondtitle">
          Цитаты
        </div>
        <div :class="$style.images">
          <Decor />
          <img src="../assets/img/03.png" alt="" :class="$style.icon" />
          <Decor />
        </div>
        <div :class="$style.quotes">
          <div :class="$style.row">
            <div :class="$style.column">
              <img src="../assets/img/tven.png" alt="" />
            </div>
            <div :class="$style.column">
              <div :class="$style.text">
                «Легче одурачить людей, чем убедить их в том, что они одурачены»
              </div>
              <p :class="$style.oldyears">
                Марк Твен
                <br />
                1910 -1935
              </p>
            </div>
          </div>
          <div :class="$style.minDecor">
            <div :class="$style.arrowBorder">
              <img src="../assets/img/arrow.png" alt="" :class="$style.arrow" />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.content">
        <div :class="$style.infoRow">
          <div :class="$style.infoColumn">
            <div :class="$style.subTitle">
              Новости
            </div>
            <div :class="$style.columnContent">
              <div :class="$style.date">12.07.14</div>
              <div :class="$style.minTitle">
                Уникальной Лакшери аукционе, здесь вы сможете найти
              </div>
              <div :class="$style.itemText">
                Продажа товаров, ценных бумаг, имущества предприятий,
                произведений искусства и других объектов, которая...
              </div>
            </div>
            <div :class="$style.columnContent">
              <div :class="$style.date">12.07.14</div>
              <div :class="$style.minTitle">
                Достойные для себя лоты
              </div>
              <div :class="$style.itemText">
                Имущества предприятий, произведений искусства и других объектов,
                произведений редприятий, произведений искусств...
              </div>
            </div>
            <div :class="$style.columnContent">
              <div :class="$style.date">12.07.14</div>
              <div :class="$style.minTitle">
                Уникальной Лакшери аукционе, здесь вы сможете найти
              </div>
              <div :class="$style.itemText">
                Продажа товаров, ценных бумаг, имущества предприятий,
                произведений искусства и других объектов, которая...
              </div>
            </div>
          </div>
          <div :class="$style.infoColumn">
            <div :class="$style.subTitle2">
              События
            </div>
            <div :class="$style.columnContent">
              <div :class="$style.minTitle">
                Достойные для себя лоты
              </div>
              <div :class="$style.itemText">
                Имущества предприятий, произведений искусства и других объектов,
                произведений редприятий, произведений искусств Продажа товаров,
                ценных бумаг, имущества предприятий, произведений искусства и
                других объектов, которая...
              </div>
            </div>
            <div :class="$style.columnContent">
              <div :class="$style.minTitle">
                Уникальной Лакшери аукционе, здесь вы сможете найти
              </div>
              <div :class="$style.itemText">
                Имущества предприятий, произведений искусства и других объектов,
                произведений редприятий, произведений искусств Продажа товаров,
                ценных бумаг, имущества предприятий, произведений искусства и
                других объектов, которая...
              </div>
            </div>
          </div>
          <div :class="$style.infoColumn">
            <div :class="$style.lastColumn">
              <div :class="$style.subTitle3">
                Подписка
              </div>
              <div :class="$style.lastColumnContent">
                <div :class="$style.lastItemText">
                  Для получения уведомлений о новых предложениях, введите адрес
                  своей электронной почты
                </div>
                <form action="" :class="$style.form">
                  <input
                    type="text"
                    placeholder="Ваш e-mail"
                    :class="$style.input"
                  />
                  <div :class="$style.formText">ok</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Decor from "./Decor";
export default {
  components: {
    Decor,
  },
};
</script>
<style lang="scss" module>
.info {
  margin: 0 0 50px 0;
}
.conteiner {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
}
.top {
  margin: 0 0 80px 0;
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
  justify-content: center;
  align-items: center;
}
.column {
  flex: 0 1 50%;
}
.text {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 21px;
  line-height: 30px;
  font-weight: 400;
  font-style: italic;
  text-transform: uppercase;
  color: #000000;
  max-width: 700px;
  margin: 0 auto 35px auto;
  text-align: left;
}
.oldyears {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-style: normal;
  text-transform: none;
  color: #1c242a;
  text-align: left;
}
.minDecor {
  display: flex;
  align-items: center;
  justify-content: center;
}
.minDecor::before,
.minDecor::after {
  content: "";
  max-width: 100px;
  height: 1px;
  background-color: #bb9c66;
  flex: 1 1 auto;
}
.arrowBorder {
  width: 50px;
  height: 50px;
  border: 1px solid #bb9c66;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 65px;
  transition: all 1s ease 0s;
}
.arrowBorder::before,
.arrowBorder::after {
  content: "";
  width: 10px;
  height: 10px;
  border: 1px solid #bb9c66;
  border-radius: 50%;
  flex: 0 0 10px;
}
.arrowBorder:hover {
  transform: rotate(-360deg);
}
.arrow {
  width: 20px;
  height: 20px;
  margin: 0 65px;
}
.infoRow {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.infoColumn {
  flex: 0 1 50%;
  display: block;
  border: none;
}
.infoColumn:last-child {
  flex: 0 1 100%;
}
.lastColumnContent {
  display: flex;
  align-items: center;
  text-align: left;
}
.lastItemText {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  color: #333333;
  text-align: left;
}
.columnContent {
  padding: 0 0 0 15px;
  text-align: left;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  margin: 0 0 20px 0;
}
.subTitle {
  text-align: left;
  background: url(../assets/img/icons/1.png) left no-repeat;
  padding: 0 0 0 40px;
  font-family: "PFDinTextCondPro";
  font-size: 35px;
  line-height: 35px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1c242a;
  margin: 0 0 25px 0;
}
.subTitle2 {
  text-align: left;
  padding: 0 0 0 40px;
  font-family: "PFDinTextCondPro";
  font-size: 35px;
  line-height: 35px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1c242a;
  margin: 0 0 25px 0;
  background: url(../assets/img/icons/2.png) left no-repeat;
}
.subTitle3 {
  text-align: left;
  padding: 0 0 0 40px;
  font-family: "PFDinTextCondPro";
  font-size: 35px;
  line-height: 35px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1c242a;
  margin: 0 0 25px 0;
  background: url(../assets/img/icons/3.png) left no-repeat;
}
.date {
  font-size: 12px;
  line-height: 25px;
  font-weight: 400;
  color: #bb9c66;
}
.minTitle {
  font-size: 15px;
  font-weight: 700;
  text-decoration: underline;
  color: #333333;
  margin: 0 0 1px 0;
}
.itemText {
  font-size: 15px;
  color: #333333;
  max-width: 500px;
}
.form {
  width: 450px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  border: 2px solid #bb9c66;
}
.formText {
  font-family: "PFDinTextCondPro";
  font-size: 21.3px;
  line-height: 25px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1c242a;
  padding: 0 40px 0 0;
  margin: 0 20px 0 0;
  display: flex;
  align-items: center;
  background: url(../assets/img/okdecor.png) right no-repeat;
  cursor: pointer;
  transition: all 1s ease 0s;
}
.formText:hover {
  margin: 0 10px 0 0;
}
.formText::before {
  content: "";
  width: 2px;
  height: 40px;
  background-color: #bb9c66;
  margin: 0 15px 0 0;
}
.input {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  color: #4f4f4f;
  width: 100%;
  height: 100%;
}
@media (max-width: 884px) {
  .infoColumn {
    flex: 0 1 50%;
    justify-content: center;
  }
  .infoColumn:last-child {
    flex: 0 1 100%;
  }
    .column {
    flex: 0 1 50%;
    justify-content: center;
  }
  .column:last-child {
    flex: 0 1 100%;
  }
}
@media (max-width: 850px) {
  .lastColumnContent {
    display: block;
  }
  .form {
    width: 100%;
    margin: 20px 0 0 0;
  }
}
@media (max-width: 820px) {
  .infoColumn {
    flex: 0 1 100%;
  }
}
@media (max-width: 598px) {
  .infoColumn {
    flex: 0 1 100%;
    justify-content: center;
    border: 2px solid #bb9c66;
    padding: 10px;
    margin: 0 0 15px 0;
  }
  .infoColumn:last-child {
    margin: 0 0 30px 0;
  }
  .info {
    margin: 0 0 20px 0;
  } 
}
@media (max-width: 592px)  {
  .row {
    display: block;
  }
  .text {
    font-size: 18px;
    line-height: 25px;
    max-width: 300px;
    margin: 0 auto 15px auto;
    text-align: center;
  }
  .oldyears {
    color: #1c242a;
    text-align: center;
    margin: 0 0 15px 0;
  }
}
</style>

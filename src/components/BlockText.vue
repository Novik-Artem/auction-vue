<template>
  <div :class="$style.blockText">
    <div :class="$style.conteiner">
      <div :class="$style.content">
        <p :class="$style.item">
          Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы
          сможете найти достойные для себя лоты. Аукцион по продаже недвижимости
          во многих развитых странах являюется основным инструментом
          купли-продажи коммерческой, жилой, и муниципальной недвижимости, в том
          числе квартир. Общий объем сделок в мире на аукционах по продаже
          недвижимости варьируется от 30% до 80%. Для России аукцион
          недвижимости является относительно новым и обретает все большую
          популярность.
        </p>
        <p :class="$style.item">
          Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы
          сможете найти достойные для себя лоты. Аукцион по продаже недвижимости
          во многих развитых странах являюется основным инструментом
          купли-продажи коммерческой, жилой, и муниципальной недвижимости, в том
          числе квартир. Общий объем сделок в мире на аукционах по продаже
          недвижимости варьируется от 30% до 80%. Для России аукцион
          недвижимости является относительно новым и обретает все большую
          популярность.
        </p>
        <p :class="$style.item">
          Муниципальной недвижимости, в том числе квартир. Общий объем сделок в
          мире на аукционах по продаже недвижимости варьируется от 30% до 80%.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
.blockText {
  margin: 0 0 50px 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 29px;
  font-weight: 400;
  color: #333333;
}
.conteiner {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
}
.content {
  background: url(../assets/img/text_decor2.png) left top repeat-y;
}
.item {
  text-align: left;
  margin: 0 0 15px 0;
  overflow: hidden;
  padding: 0 0 0 135px;
}
.item:last-child {
  margin: 0;
}
@media (max-width: 850px) {
  .item p {
    line-height: 20px;
  }
}
@media (max-width: 710px) {
  .item {
    line-height: 22.19px;
  }
  .item p {
    padding: 0 0 0 110px;
  }
}
@media (max-width: 592px) {
  .blockText {
    text-align: center;
    background: none;
    margin: 0 0 30px -125px;
  }
  .content {
    background: none;
  }
  .item {
    margin: 0 0 15px 0;
  }
}
</style>

<template>
  <div :class="$style.body">
    <div :class="$style.conteiner">
      <div :class="$style.title">Добавляйте свои лоты!!!</div>
      <div :class="$style.text">
        Совсем недавно на нашем сайте появилась функция добавления лотов.
        Теперь, в случае, если у вас есть что-нибудь интересное, вы можете
        выставить это на наш онлайн-аукцион. Внимательно следуйте действиям
        ниже, и вы без труда добавите свои лоты.
      </div>
      <section :class="$style.add">
        <div :class="$style.image">
          <input
            type="text"
            placeholder="вставьте ссылку на изображение лота"
            :class="$style.input"
            v-model="addImage"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="введите название лота"
            v-model="addText"
            :class="$style.input"
          />
        </div>
        <div>
          <div :class="$style.desc">введите описание лота</div>
          <textarea
            type="text"
            :class="$style.input"
            v-model="addDesc"
          ></textarea>
        </div>
        <div>
          <input
            type="number"
            placeholder="введите стартовую цену"
            v-model="addStartPrice"
            :class="$style.input"
          />
        </div>
        <select :class="$style.select" v-model="txt">
          <option disabled value="">Выберите категорию</option>
          <option v-for="item in getCategories" :key="item.id">{{
            item.text
          }}</option
          >>
        </select>
        <button :class="$style.btn" @click="submit()">Добавить лот</button>
      </section>
      <div :class="$style.text">
        Если вы следовали всем правилам, ваш лот будет добавлен в указанную
        категорию. Если вы не заполнили одно из полей(оставить пустым можно
        только поле "описание лота"), лот добавлен не будет!
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: mapGetters(["getCategories"]),
  data() {
    return {
      addText: "",
      addStartPrice: null,
      txt: "",
      addImage: "",
      addDesc: "",
    };
  },
  methods: {
    ...mapMutations([
      "addNewLot",
      "addNewText",
      "addNewStartPrice",
      "addNewImage",
      "addNewDesc",
    ]),
    submit() {
      this.addNewText(this.addText);
      this.addNewStartPrice(this.addStartPrice);
      this.addNewImage(this.addImage);
      this.addNewDesc(this.addDesc);
      this.addNewLot(this.txt);
      this.addStartPrice = null;
      this.addText = "";
      this.txt = "";
      this.addImage = "";
      this.addDesc = "";
    },
  },
};
</script>
<style lang="scss" module>
.body {
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgb(134, 116, 76);
}
.conteiner {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 15px;
  font-family: "PFDinTextCondPro";
}
.title {
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  margin: 0 0 25px 0;
}
.text {
  color: #fff;
  font-size: 20px;
  text-align: left;
  margin: 0 0 40px 0;
}
.input,
.select {
  padding: 10px 0 10px 5px;
  border: 2px solid #bb9c66;
  font-size: 20px;
  line-height: 25px;
  font-weight: 400;
  color: #4f4f4f;
  width: 100%;
  margin: 0 0 10px 0;
}
.select {
  cursor: pointer;
}
.image {
  color: #fff;
  display: flex;
  align-items: center;
}
.desc {
  color: #fff;
  font-size: 18px;
  margin: 0 0 10px 0;
}
.btn {
  font-size: 25px;
  letter-spacing: 5px;
  line-height: 25px;
  color: #4f4f4f;
  background-color: #fff;
  width: 100%;
  height: 50px;
  border: 3px solid #bb9c66;
  padding: 10px 20px;
  transition: all 0.5s ease 0s;
  margin: 0 0 40px 0;
}
.btn:hover {
  background-color: #6f5b47;
  color: #ffffff;
  border-radius: 10px;
}
@media (max-width: 410px) {
  .title {
    font-size: 20px;
    line-height: 20px;
    margin: 0 0 20px 0;
  }
  .conteiner {
    padding: 20px 10px 0 10px;
  }
  .text {
    font-size: 15px;
    text-align: center;
    margin: 0 0 10px 0;
  }
  .input,
  .select {
    padding: 10px 0 10px 10px;
    border: 2px solid #bb9c66;
    font-size: 15px;
    line-height: 25px;
    font-weight: 400;
    color: #4f4f4f;
    width: 100%;
    margin: 0 0 10px 0;
  }
  .desc {
    font-size: 15px;
  }
  .btn {
    font-size: 20px;
    letter-spacing: 0;
    line-height: 20px;
    color: #4f4f4f;
    background-color: #fff;
    width: 100%;
    height: 40px;
    border: 3px solid #bb9c66;
    padding: 5px 10px;
    transition: all 0.5s ease 0s;
    margin: 0 0 10px 0;
  }
}
</style>

<template>
  <div :class="$style.column">
    <div :class="$style.image">
      <img :src="itemImage" alt="" />
    </div>
    <div :class="$style.title">
      {{ itemTitle }}
    </div>
    <div :class="$style.text">
      {{ itemText }}
    </div>
    <div :class="$style.info">
      {{ itemInfo }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemText: String,
    itemImage: String,
    itemTitle: String,
    itemInfo: String,
  },
};
</script>
<style lang="scss" module>
.column {
  flex: 0 1 33.333%;
  display: flex;
  flex-direction: column;
}
.image {
  margin: 0 0 40px 0;
  flex: 1 1 auto;
}
.title {
  font-family: "PFDinTextCondPro";
  font-size: 21px;
  line-height: 25px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin: 0 0 35px 0;
}
.text {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  color: #bb9c66;
  max-width: 260px;
  margin: 0 auto 35px auto;
}
.info {
  font-family: "PFDinTextCondPro";
  font-size: 21px;
  line-height: 25px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin: 0 0 35px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.info::before,
.info::after {
  content: "";
  width: 50px;
  height: 1px;
  background-color: #bb9c66;
}
.info::before {
  margin: 0 15px 0 0;
}
.info::after {
  margin: 0 0 0 15px;
}
@media (max-width: 884px) {
  .column {
    flex: 0 1 50%;
  }
  .column:last-child {
    flex: 0 1 100%;
  }
}
@media (max-width: 598px) {
  .column {
    flex: 0 1 100%;
    border: 2px solid #bb9c66;
    margin: 0 0 20px 0;
    padding: 20px 10px;
  }
  .column:last-child {
    margin: 0;
  }
}
</style>

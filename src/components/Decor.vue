<template>
  <div :class="$style.decor">
    <span></span>
  </div>
</template>
<style lang="scss" module>
  .decor {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}
.decor:last-child {
  flex-direction: row-reverse;
}
.decor::before {
  content: "";
  height: 1px;
  width: 100%;
  background-color: #bb9c66;
  flex: 1 1 auto;
}
.decor::after {
  content: "";
  width: 25px;
  height: 25px;
  border: 1px solid #bb9c66;
  transform: rotate(-45deg);
  flex: 0 0 25px;
  margin: 0 0 0 5px;
}
.decor span {
  display: flex;
  align-items: center;
  margin: 0 5px;
}
.decor:last-child span {
  flex-direction: row-reverse;
}
.decor span::before {
  content: "";
  width: 10px;
  height: 10px;
  border: 1px solid #bb9c66;
  border-radius: 50%;
  flex: 0 0 10px;
  margin: 0 5px;
}
.decor span::after {
  content: "";
  width: 15px;
  height: 15px;
  border: 1px solid #bb9c66;
  transform: rotate(-45deg);
  flex: 0 0 15px;
  margin: 0 0 0 5px;
}
.decor:last-child span::before {
  content: "";
  margin: 0 5px 0 10px;
}
.decor:first-child {
  padding: 0 10px 30px 0;
}
.decor:last-child {
  padding: 0 0 30px 10px;
}
</style>
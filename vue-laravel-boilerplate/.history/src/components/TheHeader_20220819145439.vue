<template>
  <main class="header">
    <div class="header__left">
      <div class="header__logo">PiepMARK</div>
      <form class="header__form">
        <i class="fa fa-search"></i>
        <input type="text" class="header__search" />
      </form>
    </div>
    <div class="header__right"></div>
  </main>
</template>


<style lang="scss" scoped>
.header {
  height: 74px;
  display: flex;
  align-items: center;
  margin: 0 0 23px;
  padding: 9px 50px 11px;
  background-color: $color-blue-0;

  .header__left {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header__form {
    width: 679px;
    height: 50px;
    margin: 3px 377px 1px 169.8px;
    padding: 10px 320px 10px 23px;
    border-radius: 100px;
    background-color: $color-white-0;
  }
}
</style>


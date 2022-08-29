<template>
  <main class="header">
    <div class="header__left">
      <div class="header__logo">PiepMARK</div>
      <form class="header__form">
        <input type="text" class="header__search" />
        <i class="fa fa-search"></i>
      </form>
    </div>
    <div class="header__right"></div>
  </main>
</template>


<style lang="scss" scoped>
.header {
  width: 1728px;
  height: 74px;
  display: flex;
  align-items: center;
  margin: 0 0 23px;
  padding: 9px 50px 11px;
  background-color: #4d92fb;

  .header__logo {
    padding: 10px 20px;
  }
  .header__form {
    width: 19.9px;
    height: 21.6px;
    color: white;
  }
}
</style>


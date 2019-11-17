<template>
  <div class="header">
    <div class="header__name">
      ENNA KIM <span class="header__fongki">[fongkikid]</span>
    </div>
    <div class="header__menuOptions">
      <div class="header__projects header__tab">PROJECTS</div>
      <div class="header__cv header__tab">CV</div>
      <div class="header__contact header__tab">CONTACT</div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  border: 5px solid black;
  &__name {
    justify-content: flex-start;
    width: 45%;
    font-weight: bold;
    font-size: 36px;
  }
  // &__fongki {
  //   // font-size: 24px;
  //   // align-content: center;
  //   // align-items: center;
  //   // align-self: center;
  // }
  &__menuOptions {
    width: 95%;
    display: inline-flex;
    justify-content: flex-end;
  }
  &__tab {
    // padding: 12px 16px;
    padding: 40px 70px;
    justify-content: center;
    position: relative;
    font-weight: bold;
    border-right: 5px solid black;
  }
  &__projects {
    border-left: 5px solid black;
  }
}
</style>

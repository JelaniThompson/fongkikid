<template>
  <div class="header">
    <div class="header__name">
      ENNA KIM <span class="header__fongki">[fongkikid]</span>
    </div>
    <div class="header__menuOptions">
      <div class="header__projects header__tab">
        PROJECTS
        <!-- Dropdown check -->
        <div class="header__dropdown">
          <div class="header__projectsDropdownItems">
            <div
              v-for="(item, index) in menuItems"
              :key="item.id"
              class="header__dropdownBox"
              :style="{
                backgroundColor: colours[index],
                display: 'inline-flex',
                width: '100%'
              }"
            >
              <a
                class="header__dropdownItem"
                :href="routes[index]"
                target="__blank"
                >{{ item }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="header__cv header__tab">CV</div>
      <!-- <div class="header__contact header__tab">CONTACT</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data: () => {
    return {
      menuItems: [
        "Outdated(오래된)",
        "ARCHITECTURE IS MY EX-BOYFRIEND 2018",
        "FILL THE VOID 2019",
        "In Hiding (숨다)2019"
      ],
      colours: ["#7efc8d", "#81ecf2", "#ff64f0", "#6d66ff"],
      routes: ["/outdated", "/arch", "/void", "/hiding"]
    };
  }
};
</script>

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
    display: flex;
  }

  &__dropdown {
    position: absolute;
    border: 5px solid black;
    width: 100%;
    margin: -21% auto 0 auto;
    opacity: 0;
  }
  &__dropdown:hover {
    opacity: 100;
    // margin: 28% auto 0 auto;
  }
  &__dropdownBox {
    justify-content: center;
  }
  &__dropdownItem {
    padding: 5% 0;
    text-decoration: none;
    color: black;
    // border-top: 5px solid black;
  }
}
</style>

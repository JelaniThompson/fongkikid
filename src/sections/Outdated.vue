<template>
  <div class="outdated">
    <!-- Make each div match up with Enna's screenshots -->
    <div class="outdated__outdated outdated__section">
      <div class="outdated__outdatedBox">
        Outdated(오래된)
      </div>
      <img
        class="outdated__ennaImageOne"
        src="../assets/outdated/enna_pageOne.png"
      />
      <div class="outdated__infoBox">
        Outdated(오래된) is a time-based media installation that uses digital
        animation & computer models to investigate the
        <span class="outdated__highlight">difficulties of communication</span>
        between immigrant parents and their children by comparing them to
        computer hardware.
      </div>
      <img
        class="outdated__interaccess-image"
        src="../assets/outdated/1811-Interaccess-Preservation-Permanence-55.jpg"
      />
      <div class="outdated__infoBoxTwo">
        My parents are expired computer models, SK-1960s, byproducts of the
        Korean War, the last of their kind. I am the upgraded version of the
        latest model CAN-1995.<br />
        This piece is my attempt to use technology to decrypt my family dynamic
        and identity.
      </div>
    </div>
    <div class="outdated__digital-diaspora outdated__section"></div>
    <div class="outdated__research outdated__section"></div>
    <div class="outdated__language outdated__section"></div>
    <div class="outdated__exhibition outdated__section"></div>
  </div>
</template>

<script>
export default {
  name: "Outdated",
  components: {}
};
</script>

<style lang="scss">
.outdated {
  &__section {
    height: 100vh;
    width: 100%;
    border: 5px solid black;
  }
  &__outdatedBox {
    font-size: 36px;
    background-color: #7efc8d;
    border: 5px solid black;
    position: absolute;
    // Prevent lines from overlapping
    margin-left: -5px;
    margin-top: -5px;
    width: 35%;
    height: 15%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 0 2%;
    z-index: 99;
  }
  &__highlight {
    background-color: #7efc8d;
  }
  &__ennaImageOne {
    height: 100%;
    position: absolute;
    width: 65%;
    object-fit: cover;
    left: 0;
    border-right: 5px solid black;
    z-index: 0;
  }
  &__infoBox {
    border: 5px solid black;
    font-size: 20px;
    text-align: left;
    width: 30%;
    padding: 2%;
    margin-top: 0.5%;
    position: absolute;
    margin-left: 55%;
    background-color: white;
    z-index: 99;
    font-weight: bold;
  }
  &__infoBoxTwo {
    border: 2.5px solid black;
    z-index: 99;
    position: relative;
    text-align: center;
    font-weight: bold;
    padding: 2%;
    width: 30%;
    margin-top: 41%;
    background-color: #fff;
    margin-left: 55%;
  }
  &__interaccess-image {
    position: absolute;
    border: 5px solid black;
    width: 31%;
    object-fit: stretch;
    // max-height: 200px;
    // border-left: transparent;
    margin-top: 18.7%;
    margin-left: 13%;
  }
}
</style>

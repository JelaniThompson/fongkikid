<template>
  <div class="arch">
    <Header />
    <div class="arch__section arch__arch">
      <img
        src="../assets/arch/new_dimensions/arch.png"
        alt="Architecture is my Ex-BF"
        class="arch__archImage"
      />
    </div>
    <div class="arch__section arch__video">
      <div class="arch__vidContainer">
        <div class="arch__borderTwo">
          <iframe
            src="https://player.vimeo.com/video/260596089"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <img
        src="../assets/arch/new_dimensions/stages.png"
        class="arch__stages"
      />
    </div>
    <div class="arch__section arch__archPhotogrammetry">
      <img
        src="../assets/arch/new_dimensions/arch_2.png"
        alt="Architecture is my Ex-BF"
        class="arch__archImage"
      />
    </div>
    <div class="arch__section arch__archPhotogrammetry">
      <img
        src="../assets/arch/new_dimensions/arch_3.png"
        alt="Architecture is my Ex-BF"
        class="arch__archImage"
      />
    </div>
    <div class="arch__section arch__archPhotogrammetry">
      <img
        src="../assets/arch/new_dimensions/arch_4.png"
        alt="Architecture is my Ex-BF"
        class="arch__archImage"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "ArchIsMyEx",
  components: {
    Header
  }
};
</script>

<style lang="scss">
.arch {
  &__section {
    height: 100vh;
    width: 100%;
    // border: 5px solid black;
    // overflow: hidden;
    display: flex;
    margin: 0;
    padding: 3% 0 0 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    &:nth-child(1) {
      margin-top: 15%;
    }
    &:nth-child(2) {
      padding: 0% 0 0 0;
      // margin-top: -7%;
      margin-bottom: 2%;
    }
  }
  // &__arch {
  //   margin-top: 12%;
  // }
  &__archImage {
    object-fit: cover;
    max-width: 100%;
    pointer-events: none;
    height: auto;
    margin-top: 12%;
    pointer-events: none;
  }
  &__video {
    justify-content: center;
    position: relative;
  }
  &__vidContainer {
    align-self: center;
    justify-content: center;
    // height: 100vh;
    z-index: 98;
    width: 100vw;
  }
  &__borderTwo {
    background-color: #81ecf2;
    width: 58%;
    height: 100%;
    z-index: -1;
    margin: 0 auto;
    position: relative;
    padding: 1%;
    align-self: center;
    border: 5px solid black;
  }
  &__videoPlayer {
    margin: 0 auto;
    border: 10px black;
    display: flex;
    object-fit: contain;
    width: 99.5%;
    z-index: 99;
    height: 100%;
    align-self: center;
    display: block;
  }

  &__stages {
    position: absolute;
    width: 100%;
    height: 30%;
    margin-top: 4%;
    z-index: -1;
    align-self: flex-end;
    object-fit: contain;
  }

  @media (max-width: 1920px) {
    .arch {
      &__archImage {
        object-fit: contain;
      }
    }
  }
}
</style>

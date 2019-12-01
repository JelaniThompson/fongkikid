<template>
  <div class="speaking">
    <Header />
    <div class="speaking__section speaking__speaking">
      <img
        src="../assets/speaking/speaking.png"
        alt="speaking"
        class="speaking__speakingImage"
      />
    </div>
    <div class="speaking__section speaking__speaking">
      <img
        src="../assets/speaking/speaking_1.png"
        alt="speaking"
        class="speaking__speakingImage"
      />
    </div>
    <div class="speaking__section speaking__speaking">
      <img
        src="../assets/speaking/speaking_2.png"
        alt="speaking"
        class="speaking__speakingImage"
      />
    </div>
    <div class="speaking__section speaking__speaking">
      <img
        src="../assets/speaking/speaking_3.png"
        alt="speaking"
        class="speaking__speakingImage"
      />
    </div>
    <div class="speaking__section speaking__speaking">
      <img
        src="../assets/speaking/speaking_4.png"
        alt="speaking"
        class="speaking__speakingImage"
      />
    </div>
    <div class="speaking__section speaking__speaking">
      <img
        src="../assets/speaking/speaking_5.png"
        alt="speaking"
        class="speaking__speakingImage"
      />
    </div>
    <div class="speaking__section speaking__speaking">
      <img
        src="../assets/speaking/speaking_6.png"
        alt="speaking"
        class="speaking__speakingImage"
      />
    </div>
    <div class="speaking__section speaking__speaking">
      <img
        src="../assets/speaking/speaking_7.png"
        alt="speaking"
        class="speaking__speakingImage"
      />
    </div>
    <div class="speaking__section speaking__speaking">
      <img
        src="../assets/speaking/speaking_8.png"
        alt="speaking"
        class="speaking__speakingImage"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "speaking",
  components: {
    Header
  }
};
</script>

<style lang="scss">
.speaking {
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
  }
  &__speaking {
    margin-top: 8%;
  }
  &__speakingImage {
    object-fit: cover;
    max-width: 100%;
    pointer-events: none;
    height: auto;
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
    background-color: #ff64f0;
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
    .speaking {
      &__speakingImage {
        object-fit: contain;
      }
    }
  }
}
</style>

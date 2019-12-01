<template>
  <div class="void">
    <Header />
    <div class="void__section void__void">
      <img
        src="../assets/void/new_dimensions/void.png"
        alt="void"
        class="void__voidImage"
      />
    </div>
    <div class="void__section void__video">
      <div class="void__vidContainer">
        <div class="void__borderTwo">
          <iframe
            src="https://player.vimeo.com/video/286925606"
            width="840"
            height="560"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="void__section void__1">
      <img
        src="../assets/void/new_dimensions/void_1.png"
        alt="void"
        class="void__voidImage"
      />
    </div>
    <div class="void__section void__2">
      <img
        src="../assets/void/new_dimensions/void_2.png"
        alt="void"
        class="void__voidImage"
      />
    </div>
    <div class="void__section void__3">
      <img
        src="../assets/void/new_dimensions/void_3.png"
        alt="void"
        class="void__voidImage"
      />
    </div>
    <div class="void__section void__4">
      <img
        src="../assets/void/new_dimensions/void_4.png"
        alt="void"
        class="void__voidImage"
      />
    </div>
    <div class="void__section void__5">
      <img
        src="../assets/void/new_dimensions/void_5.png"
        alt="void"
        class="void__voidImage"
      />
    </div>
    <div class="void__section void__6">
      <img
        src="../assets/void/new_dimensions/void_6.png"
        alt="void"
        class="void__voidImage"
      />
    </div>
    <div class="void__section void__7">
      <img
        src="../assets/void/new_dimensions/void_7.png"
        alt="void"
        class="void__voidImage"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Void",
  components: {
    Header
  }
};
</script>

<style lang="scss">
.void {
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
  &__void {
    margin-top: 8%;
  }
  &__voidImage {
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
    width: 67%;
    height: 90%;
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
    .void {
      &__voidImage {
        object-fit: contain;
      }
    }
  }
}
</style>

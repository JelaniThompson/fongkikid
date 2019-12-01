<template>
  <div class="outdated">
    <Header />
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <!-- Outdated Video Section -->
    <div class="outdated__video outdated__section">
      <div class="outdated__vidContainer">
        <div class="outdated__borderTwo">
          <iframe
            src="https://player.vimeo.com/video/299457576"
            width="840"
            height="560"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <p class="outdated__infoBox outdated__videoParagraph">
          When translating Korean to English, there are nuances lost in between
          the languages. The problem lies beyond our hardware. Our ports might
          be incongruent and our software slightly incompatible but we are made
          from the same parts. So why do I fail to communicate with them?
        </p>
      </div>
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_2.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_3.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_4.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_5.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_6.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_7.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_8.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_9.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_10.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
    <div class="outdated__outdated outdated__section outdated__image">
      <img
        src="../assets/outdated/outdated_11.png"
        alt="outdated"
        class="outdated__outdatedImage"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Outdated",
  components: {
    Header
  }
};
</script>

<style lang="scss">
.outdated {
  &__section {
    height: 100vh;
    width: 100%;
    // pointer-events: none;
    // border: 5px solid black;
    // overflow: hidden;
    display: flex;
    margin: 0;
    // padding: 0;
    padding: 5% 0 0 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
  }
  &__outdated {
    margin-top: 8%;
  }
  &__outdatedImage {
    object-fit: cover;
    max-width: 100%;
    height: auto;
    pointer-events: none;
  }
  &__vidContainer {
    align-self: center;
    justify-content: center;
    margin-top: 8%;
    // height: 100vh;
    z-index: 98;
    width: 100vw;
  }
  &__titleBox {
    background-color: #7efc8d;
    display: flex;
    font-size: 36px;
    border: 5px solid black;
    height: 15%;
    font-weight: bold;
    padding: 0 2%;
    z-index: 99;
    align-items: center;
  }
  /*
    Intro
  */
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
  &__interaccess-image {
    position: absolute;
    border: 5px solid black;
    width: 39%;
    object-fit: contain;
    margin-top: 4%;
    justify-content: flex-end;
    align-self: center;
    margin-left: 57%;
  }
  &__infoBoxTwo {
    display: flex;
    align-items: center;
    align-self: flex-end;
    border: 2.5px solid black;
    z-index: 99;
    position: relative;
    justify-content: flex-end;
    text-align: center;
    font-weight: bold;
    padding: 2%;
    width: 40%;
    right: 0;
    height: 10%;
    bottom: 0;
    background-color: #fff;
    margin-left: 55%;
  }

  /*
    Digital Diaspora
  */
  &__digital-image {
    width: 50%;
    height: 100vh;
    justify-content: flex-start;
    border: 5px solid black;
    object-fit: cover;
    margin-top: -5px;
  }

  &__whoAreYou {
    position: absolute;
    width: 40%;
    border: 5px solid black;
    // margin-top: 2.5%;
    margin-top: -5px;
    margin-right: 10.5%;
    right: 0;
  }

  &__digitalDiasporaTitle {
    margin-left: 20%;
    margin-top: 19%;
  }

  &__digitalInfoBox {
    margin-top: 7.3%;
    margin-left: 61%;
    align-self: center;
  }

  &__digitalInfoBoxTwo {
    font-size: 16px;
    align-self: flex-end;
    margin-left: 61%;
    z-index: -1;
  }

  &__digitalInfoBoxThree {
    align-self: flex-end;
    width: 18%;
    font-size: 16px;
    margin-left: 5px;
    left: 0;
    justify-self: flex-start;
  }

  &__researchInfoBox {
    border: none;
    align-self: flex-end;
    right: 0;
    z-index: -1;
    font-size: 16px;
    width: 25%;
    margin-bottom: 1.5%;
    text-align: left;
    // bottom: 0;
  }
  &__researchInfoBoxTwo {
    border: none;
    // right: 0;
    z-index: -1;
    font-size: 16px;
    width: 25%;
    text-align: left;
    margin-left: 50%;
    justify-self: flex-end;
  }

  &__researchInfoBoxThree {
    border: none;
    // right: 0;
    z-index: -1;
    font-size: 16px;
    width: 25%;
    text-align: left;
    margin-left: 17%;
    margin-top: 37%;
  }

  /* Video section */
  &__video {
    justify-content: center;
    position: relative;
    margin-top: 8%;
  }

  &__borderTwo {
    background-color: #7efc8d;
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
    height: 95%;
    align-self: center;
    display: block;
  }
  &__videoParagraph {
    border: none;
    position: relative;
    align-self: flex-end;
    margin-bottom: -5%;
    font-size: 16px;
    margin: 0 auto;
    width: 40%;
    font-weight: bold;
    text-align: center;
    z-index: -2;
  }
  &__exhibitionImage {
    object-fit: cover;
  }

  /* Research */
  &__researchImage {
    object-fit: contain !important;
  }

  // Add screen breakpoints (1400 and up)
  @media (max-width: 1920px) {
    .outdated {
      &__outdatedImage {
        object-fit: contain;
      }
    }
  }
}
</style>

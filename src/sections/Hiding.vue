<template>
  <div class="hiding">
    <Header />
    <div class="hiding__section hiding__hiding">
      <img
        src="../assets/hiding/new_dimensions/Hiding.jpg"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div>
    <div class="hiding__sliderSection">
      <Flickity
        ref="flickity"
        :options="flickityOptions"
        class="hiding__slider"
      >
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_1.jpg"
            alt="orange tree"
            class="cell-image"
          />
        </div>
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_2.jpg"
            alt="orange tree"
            class="cell-image"
          />
        </div>
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_3.jpg"
            alt="orange tree"
            class="cell-image"
          />
        </div>
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_4.jpg"
            alt="orange tree"
            class="cell-image"
          />
        </div>
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_5.jpg"
            alt="orange tree"
            class="cell-image"
          />
        </div>
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_6.jpg"
            alt="orange tree"
            class="cell-image"
          />
        </div>
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_7.jpg"
            alt="orange tree"
            class="cell-image"
          />
        </div>
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_8.jpg"
            alt="orange tree"
            class="cell-image"
          />
        </div>
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_9.png"
            alt="orange tree"
            class="cell-image"
          />
        </div>
        <div class="carousel-cell">
          <img
            src="../assets/zine/Hiding_10.png"
            alt="orange tree"
            class="cell-image"
          />
        </div>
      </Flickity>
    </div>
    <div class="hiding__section hiding__hiding">
      <img
        src="../assets/hiding/below_slider/hiding_1.png"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div>
    <div class="hiding__section hiding__3">
      <img
        src="../assets/hiding/below_slider/hiding_3.png"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div>
    <div class="hiding__section hiding__4">
      <img
        src="../assets/hiding/below_slider/hiding_4.png"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div>
    <div class="hiding__section hiding__5">
      <img
        src="../assets/hiding/below_slider/hiding_5.png"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div>
    <div class="hiding__section hiding__6">
      <img
        src="../assets/hiding/below_slider/hiding_6.png"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div>
    <div class="hiding__section hiding__7">
      <img
        src="../assets/hiding/below_slider/hiding_7.png"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div>
    <div class="hiding__section hiding__8">
      <img
        src="../assets/hiding/below_slider/hiding_8.png"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div>
    <div class="hiding__section hiding__9">
      <img
        src="../assets/hiding/below_slider/hiding_9.png"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div>
    <!-- <div class="hiding__section hiding__12">
      <img
        src="../assets/hiding/new_dimensions/Hiding_12.png"
        alt="hiding"
        class="hiding__hidingImage"
      />
    </div> -->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Flickity from "vue-flickity";
export default {
  name: "Hiding",
  components: {
    Header,
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        autoPlay: 3700,
        prevNextButtons: true,
        pageDots: false,
        resize: true,
        lazyLoad: true,
        fullscreen: true,
        imagesLoaded: true,
        contain: true
      }
    };
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  }
};
</script>

<style lang="scss">
.carousel {
  background: black;
  width: 100%;
  display: flex;
  align-content: center;
}

.carousel img {
  display: block;
  height: 600px;
  width: 100%;
}

.carousel-cell {
  display: block;
  height: 800px;
  width: 100%;
}

.cell-image {
  width: 100%;
  object-fit: contain;
  height: 800px;
}

@media screen and (min-width: 768px) {
  .carousel img {
    display: block;
    height: 800px;
    width: 100%;
  }
}
.hiding {
  &__section {
    height: 100vh;
    width: 100%;
    display: flex;
    margin: 0;
    padding: 3% 0 0 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
  }
  &__hiding {
    margin-top: 8%;
  }
  &__sliderSection {
    margin-top: 10%;
    background-color: #eee;
    width: 100%;
    height: 800px;
    // height: 100vh;
  }
  &__slider {
    height: 100%;
    object-fit: contain;
    position: relative;
    // overflow: hidden;
  }
  &__hidingImage {
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
    background-color: #6d66ff;
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
    .hiding {
      &__hidingImage {
        object-fit: contain;
      }
    }
  }
}
</style>

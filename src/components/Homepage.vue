<template>
  <div class="homepage">
    <!-- Have header at the top -->
    <Header />
    <div class="homepage__main-section">
      <img src="../assets/fongkikid.jpg" class="homepage__fongkikid-homepage" />
      <p class="homepage__paragraph">
        Enna Kim [fongkikid] is an interdisciplinary artist, designer and
        researcher based in Toronto, Canada. <br /><br />
        For my thesis, I am creating a speculative narrative animation that
        explores how diasporic people choose to represent themselves in online
        and offline spaces in order to further my understanding of my South
        Korean roots.
      </p>
    </div>
    <div class="homepage__vidContainer">
      <div class="homepage__borderTwo">
        <iframe
          src="https://player.vimeo.com/video/376470478"
          width="1240"
          height="960"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Homepage",
  components: {
    Header
  }
};
</script>

<style lang="scss">
.homepage {
  overflow-y: hidden;
  font-family: "Helvetica Neue";
  &__main-section {
    display: flex;
    margin-top: 8%;
    border-bottom: 5px solid black;
  }
  &__fongkikid-homepage {
    justify-content: flex-start;
    border-right: 5px solid black;
  }
  &__paragraph {
    margin-left: 2.5%;
    margin-top: 12.5%;
    max-width: 30%;
    text-align: left;
    font-weight: bold;
    font-family: "Helvetica Neue";
    font-size: 24px;
  }
  &__vidContainer {
    // align-self: center;
    justify-content: center;
    // height: 100vh;
    z-index: 98;
    width: 100vw;
    // margin-top: 5%;
    padding-bottom: 5%;
  }
  // &__borderTwo {
  //   margin-top: 10%;
  //   padding-bottom: 10%;
  // }
}
</style>

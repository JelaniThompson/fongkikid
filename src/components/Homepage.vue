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
  &__main-section {
    display: flex;
  }
  &__fongkikid-homepage {
    justify-content: flex-start;
    border: 5px solid black;
  }
  &__paragraph {
    margin-left: 2.5%;
    margin-top: 15.5%;
    max-width: 25%;
    text-align: left;
    font-weight: bold;
  }
}
</style>

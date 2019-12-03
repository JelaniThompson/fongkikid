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
      <a
        href="https://www.instagram.com/fongkikid/"
        target="__blank"
        class="homepage__imageLink"
      >
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="homepage__instagram"
        />
      </a>

      <a
        href="https://vimeo.com/fongkikid"
        target="__blank"
        class="homepage__imageLink"
      >
        <font-awesome-icon :icon="['fab', 'vimeo']" class="homepage__vimeo" />
      </a>
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
      <p class="homepage__videoParagraph">
        My thesis is a speculative narrative animation that talks about how
        diasporic people navigate through their online and offline spaces. This
        animation is a collection of in-person interviews, survey answers and
        personal experiences that represent my childhood growing up as a
        second-generation immigrant. I am using speculative narrative animation
        as a design tool to further my understanding of my South Korean
        identity. My methodology is a mixed approach, combining narrative
        inquiry to design my survey (<span class="homepage__linkText"
          ><a
            href="https://forms.gle/zHqCmgV38zkKjJ4D7"
            target="__blank"
            class="homepage__videoParagraphLink"
            >https://forms.gle/zHqCmgV38zkKjJ4D7</a
          ></span
        >), participatory action research for facilitating workshops and
        speaking events. Online presence plays a strong role in my thesis
        because the internet started to become my third parents. My project
        visualizes the difficulties and discrepancies of being born between two
        cultures and feeling the pressure to identify with one or the other
        dependent on my surroundings.
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

  &__instagram {
    bottom: 0;
    align-self: flex-end;
    margin-bottom: 3%;
    font-size: 2em;
    // margin-right: 5%;
    margin-left: -5%;
    position: absolute;
  }
  &__vimeo {
    bottom: 0;
    align-self: flex-end;
    margin-bottom: 3%;
    margin-left: -1%;
    font-size: 2em;
    // margin-left: 1%;
    position: absolute;
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
  &__videoParagraph {
    margin: 0 auto;
    text-align: left;
    width: 80%;
    font-weight: bold;
    font-size: 24px;
  }
  &__videoParagraphLink {
    color: blue !important;
  }

  // &__borderTwo {
  //   margin-top: 10%;
  //   padding-bottom: 10%;
  // }
}
</style>

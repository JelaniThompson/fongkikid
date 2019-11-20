<template>
  <div class="outdated">
    <div class="outdated__outdated outdated__section">
      <div class="outdated__outdatedBox outdated__titleBox">
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
    <!-- Outdated Video Section -->
    <div class="outdated__video outdated__section"></div>

    <!-- Digital Diaspora -->
    <div class="outdated__digital-diaspora outdated__section">
      <img
        class="outdated__digital-image"
        src="../assets/outdated/enna_outdated_3.png"
      />
      <img class="outdated__whoAreYou" src="../assets/outdated/whoAreYou.jpg" />
      <div class="outdated__digitalDiasporaTitle outdated__titleBox">
        Digital Diaspora
      </div>
      <div class="outdated__digitalInfoBox outdated__infoBox">
        This work redefines the term “diaspora,” a phrase used to describe
        people who are living somewhere else other than their birthplace.
      </div>
      <div class="outdated__digitalInfoBoxTwo outdated__infoBox">
        Moreover, transnational bonds no longer have to be cemented by migration
        or by exclusive territorial claims. In the age of cyberspace, a diaspora
        can, to some degree, be held together or re-created through the mind,
        through cultural artefacts and through a shared imagination.” (Cohen,
        1997: 26).
      </div>
      <div class="outdated__digitalInfoBoxThree outdated__infoBox">
        Me hugging my (computer) parents, a rare interaction situated in the
        living room, a room we rarely occupied with conversation but instead
        silently shared meals.
      </div>
    </div>
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
    // overflow: hidden;
    display: flex;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
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
  }

  &__digitalInfoBoxThree {
    align-self: flex-end;
    width: 18%;
    font-size: 16px;
    margin-left: 0;
    left: 0;
    justify-self: flex-start;
  }
}
</style>

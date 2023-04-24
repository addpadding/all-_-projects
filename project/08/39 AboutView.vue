<template>
  <div class="about-one">
    <h1 v-bold>{{ pageName }}</h1>
    <!-- <p v-bold>{{ pageDescription }}</p> -->
    <!-- <p v-font="60">{{ pageDescription }}</p> -->
    <p v-format.bold.orange="60">{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "About us",
      pageDescription: "This is About Us Page",
    };
  },
  directive: {
    bold: {
      bind: function (el) {
        el.style.fontWeight = "bold";
      },
    },
  },
  name: "AboutOne",
};
</script>

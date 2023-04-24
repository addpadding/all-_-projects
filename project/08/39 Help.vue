<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <p v-format.bold.orange="60">{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Help Us",
      pageDescription: "This is Help Us Page",
    };
  },
  name: "OurHelp",
};
</script>

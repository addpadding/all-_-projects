<template>
  <div class="about-one">
    <h1>{{ pageName }}</h1>
    <p v-bold>{{ pageDescription }}</p>
    <p v-font="60">{{ pageDescription }}</p>
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
  name: "AboutOne",
};
</script>

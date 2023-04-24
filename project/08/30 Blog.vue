<template>
  <div class="our-Blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Blog Us",
      pageDescription: "This is Blog Us Page",
    };
  },
  name: "OurBlog",
};
</script>

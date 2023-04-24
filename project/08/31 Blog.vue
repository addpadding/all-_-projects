<template>
  <div class="our-Blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Learn VueJs
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        ></button>
        <span aria-hidden="true">&times;</span>
      </div>
    </div>
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

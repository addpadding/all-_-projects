<template>
  <div class="our-Blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidbar">
            <BlogSidbar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidbar from "@/components/Blog/BlogSidbar.vue";
export default {
  data: function () {
    return {
      pageName: "Blog Us",
      pageDescription: "This is Blog Us Page",
    };
  },
  name: "OurBlog",
  components: {
    BlogPosts,
    BlogSidbar,
  },
};
</script>

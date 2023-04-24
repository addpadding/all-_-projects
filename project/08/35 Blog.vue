<template>
  <div class="our-Blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
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
import JsonPosts from "../json/blog_posts.json";
export default {
  data: function () {
    return {
      pageName: "Blog Us",
      pageDescription: "This is Blog Us Page",
      posts: JsonPosts,
    };
  },
  name: "OurBlog",
  components: {
    BlogPosts,
    BlogSidbar,
  },
};
</script>

<template>
  <div class="post-box">
    <span class="post-views">10</span>
    <h3 class="post-title">Blog post Title</h3>
    <span class="post-date">25-10-2018</span>
    <p class="post-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio
      impedit recusandae asperiores eum et, odit vero debitis voluptate, tenetur
      esse, nobis ab quaerat libero? Esse ut corrupti laborum dignissimos.
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">Post Author</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-category">Category Name</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostTest",
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #4caf50;
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.8;
    color: #666;
  }
  .post-author {
    background-color: #607d88;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
  .post-category {
    background-color: #e91e63;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
}
</style>

<template>
  <div class="about-one">
    <h1>This is an about page</h1>
    <WelcomeMessage />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMessage from "@/components/WelcomeMessage.vue";

export default {
  name: "AboutOne",
  components: {
    WelcomeMessage,
  },
};
</script>

<template>
  <div class="app-header">
    <div class="logo">Elzero vue</div>
    <ul id="nav">
      <router-link to="/" tag="li" exact>
      <a>Home</a>
      </router-link>
      <router-link to="/about" tag="li">
      <a>About</a>
      </router-link>
      <router-link to="/help" tag="li" replace>
      <a>Help</a>
      </router-link>
    </ul>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
};
</script>

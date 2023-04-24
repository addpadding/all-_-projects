<template>
  <div class="Sidbar-widgets">{{ title | uppercase }}</div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Tisting",
    };
  },
  name: "SidbarTest",
  filters: {
    uppercase: function (v) {
      return v.touppercase();
    },
  },
};
</script>

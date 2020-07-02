<template>
  <div>
    <button @click="go('/sound')">Sound</button>
    <LineChart></LineChart>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
export default {
  components: { LineChart },
  methods: {
    go(name) {
      this.$router.push(name);
    },
  },
};
</script>

<style scoped></style>

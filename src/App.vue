<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <PackChart :data="loadData" />
  </div>
</template>

<script>
import PackChart from "./components/Chart.vue";
// import HelloWorld from "./components/HelloWorld.vue";

import * as d3 from "d3";

export default {
  name: "App",
  components: {
    // HelloWorld,
    PackChart
  },
  data() {
    return {
      loadData: {}
    };
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
  method: {
    async fetchData() {
      let data = await d3.json("./tweets.json");
      this.loadData = data;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

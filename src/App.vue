<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <PackChart :tweetData="loadData" /> -->
    <LineChart></LineChart>
  </div>
</template>

<script>
//import PackChart from "./components/Chart.vue";
import LineChart from "./components/LineChart.vue";
// import HelloWorld from "./components/HelloWorld.vue";

import * as d3 from "d3";

export default {
  name: "App",
  components: {
    // HelloWorld,
    //PackChart,
    LineChart
  },
  data() {
    return {
      loadData: []
    };
  },
  methods: {
    async fetchData() {
      let data = await d3.json("./tweets.json");
      this.loadData = data;
    }
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
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

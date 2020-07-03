<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <PackChart :tweetData="loadData" /> -->
    <!-- <Calendar></Calendar> -->

    <router-view></router-view>
  </div>
</template>

<script>
//import PackChart from "./components/Chart.vue";

// import HelloWorld from "./components/HelloWorld.vue";
//import Calendar from "./components/Calendar.vue";

import * as d3 from "d3";

export default {
  name: "App",
  components: {
    // HelloWorld,
    //PackChart,
    //Calendar,
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
    //console.log("App loaded");
    this.fetchData();
  }
};
</script>

<style></style>

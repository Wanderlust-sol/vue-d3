<template>
  <div>
    <h1>Circle Pack in D3</h1>
    <h2>{{ msg }}</h2>
    <svg :height="height" :width="width" />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "PackChart",
  props: ["tweetData"],
  data() {
    return {
      msg: "from the Chart Component",
      height: 600,
      width: 600
    };
  },
  created() {
    this.colourScale = d3
      .scaleOrdinal()
      .range(["#5EAFC6", "#FE9922", "#93c464", "#75739F"]);
  }
};
</script>

<style scoped></style>

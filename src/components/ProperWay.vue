<template>
  <div>
    <input type="text" v-model="curve" />
    <svg>
      <path fill="none" stroke="yellow" stroke-width="5" :d="d" />
      <circle
        v-for="(item, index) in dataset"
        :key="index"
        :cx="item[0]"
        :cy="item[1]"
        r="10"
        fill="black"
        @click="onClick(item)"
      />
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import _ from "lodash";
import dataset from "../../public/dataset";

export default {
  data() {
    return {
      dataset,
      curve: "curveNatural",
    };
  },
  methods: {
    onClick(item) {
      this.dataset = _.shuffle(this.dataset);
      this.curve =
        this.curve === "curveStepAfter" ? "curveStepBefore" : "curveStepAfter";
      console.log(item);
    },
  },
  computed: {
    lineGenerator() {
      return d3
        .line()
        .curve(d3[this.curve])
        .x((v) => v[0])
        .y((v) => v[1]);
    },
    d() {
      return this.lineGenerator(this.dataset);
    },
  },
};
</script>

<style scoped>
svg {
  width: 1000px;
  height: 1000px;
}
path {
  transition: all 500ms ease;
}
</style>

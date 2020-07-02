<template>
  <div>
    <svg :height="height" :width="width">
      <g />
    </svg>
  </div>
</template>

<script>
//import * as d3 from "d3";

export default {
  data() {
    return {
      width: 500,
      height: 300
    };
  },
  methods: {
    getMedia() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(
        stream => {
          gotStream(stream);
        },
        error => {
          console.log(error);
        }
      );

      const gotStream = stream => {
        const audioContext = new AudioContext();
        const mediaStreamSource = audioContext.createMediaStreamSource(stream); //마이크를 통해 발생한 오디오 스트림의 정보를 보여준다.

        //AnalyseerNode를 생성하여 오디오의 시간이나 주파수 정보를 알아내어 데이터를 시각화하는데 사용할 수 있다.
        const analyzer = audioContext.createAnalyser();
        mediaStreamSource.connect(analyzer);

        //음원의 진행상태에 직접전근에 사용된다.
        const scriptProcessor = audioContext.createScriptProcessor();
        analyzer.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);
        console.log(scriptProcessor);
      };
    }
    // getScaling() {
    //   const xScaler = d3
    //     .scaleLinear()
    //     .domain([0, frequencyBinCount - 1])
    //     .range([0, 200]);
    //   const pieDataConvertor = d3
    //     .pie()
    //     .startAngle(-Math.PI * 3)
    //     .endAngle(Math.PI * 3)
    //     .sort(null)
    //     .value((d, index) => d * weight(index));
    // }
  },
  mounted() {
    this.getMedia();
  }
};
</script>

<style scoped></style>

<template>
  <div id="calendar"></div>
</template>

<script>
import Calendar from "tui-calendar"; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";

export default {
  methods: {
    getCalendar() {
      new Calendar("#calendar", {
        defaultView: "month",
        taskView: true,
        scheduleView: true,
        disableDblClick: true,
        useCreationPopup: true,
        template: {
          monthDayname: function(dayname) {
            return (
              '<span class="calendar-week-dayname-name">' +
              dayname.label +
              "</span>"
            );
          },
        },
      });
    },
  },
  mounted() {
    this.getCalendar();
  },
};
</script>

<style scoped></style>

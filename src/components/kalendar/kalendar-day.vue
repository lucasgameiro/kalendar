<template>
  <ul style="position: relative;" @mouseleave="clearCreatingLeftovers" :class="{'is-weekend': isWeekend, 'is-today': isToday, 'creating': calendarOptions.currently_working_on_date === day.date}" class="kalendar-day">
    <kalendar-cell v-for="(quarter, index) in day.date_hours" :key="`${day.date}_${index}`" :creator="creator" :day="day" :index="index" :cell-data.sync="quarter" @select="updateCreator" @reset="resetEvents()" @initiatePopup="initiatePopup()" />
    <div ref="nowIndicator" :class="calendarOptions.style === 'material_design' ? 'hour-indicator-line' : 'hour-indicator-tooltip'" v-if="isToday" :style="`top:calc(${passedTime}% - 5px)`">
      <span class="line" v-show="calendarOptions.style === 'material_design'"></span>
    </div>
  </ul>
</template>
<script>
import isWeekend from 'date-fns/is_weekend';
import isToday from 'date-fns/is_today';

export default {
  props: ['day', 'passedTime'],
  components: {
    kalendarCell: () =>
      import ('./kalendar-cell.vue'),
  },
  inject: ['calendarOptions'],
  mounted() {
    if (this.scrollToNow && this.isToday) this.scrollView();
  },
  computed: {
    isWeekend() {
      return isWeekend(this.day.date);
    },
    isToday() {
      return isToday(this.day.date);
    },
    currentDay() {
      return this.calendarOptions.current_day;
    },
    scrollToNow() {
      return this.calendarOptions.scrollToNow;
    },
  },
  data: () => ({
    creator: {
      creating: false,
      starting_cell_index: null,
      current_cell_index: null,
      appointment_id: null,
      status: null,
    },

  }),
  methods: {
    resetEvents() {
      if (!this.creator.creating && this.creator.status === null) return;
      this.creator = {
        creating: false,
        starting_cell_index: null,
        current_cell_index: null,
        appointment_id: null,
        status: null,
      };
      this.calendarOptions.currently_working_on_date = null;
    },
    clearCreatingLeftovers() {
      let { existing_appointments } = this.calendarOptions;
      for (let key in existing_appointments) {
        if (existing_appointments[key]['status'] === 'creating') {
          this.resetEvents();
          this.$delete(existing_appointments, key);
        }
      }
    },
    updateCreator({ payload, index, event_type }) {
      this.creator = payload;
      this.selectCell(index);
    },
    selectCell(index, status = 'creating') {
      if (!this.creator.creating) return;
      let { creating, appointment_id, ending_cell_index, current_cell_index, starting_cell_index } = this.creator;
      let _ending_index = ending_cell_index == null ? current_cell_index : ending_cell_index;
      let payload = {
        id: appointment_id,
        data: {
          start: starting_cell_index,
          end: _ending_index,
          status: status,
        },
      };
      this.$emit('updateAppointments', payload);
      if (creating) {
        this.day.date_hours.forEach((hour, index) => {
          let is_in_range = hour.index >= starting_cell_index && hour.index <= _ending_index;
          if (is_in_range) {
            this.day.date_hours[index] = { ...hour, ['appointment_id']: appointment_id };
          } else if (hour['appointment_id'] === appointment_id && !is_in_range) {
            this.day.date_hours[index] = { ...hour, ['appointment_id']: null };
          }
        });
      }
    },
    initiatePopup() {
      let { creating, appointment_id, ending_cell_index, current_cell_index, starting_cell_index } = this.creator;
      let _ending_index = ending_cell_index == null ? current_cell_index : ending_cell_index;
      let payload = {
        id: appointment_id,
        data: {
          start: starting_cell_index,
          end: _ending_index,
          status: 'popup-initiated',
        }
      };
      this.$emit('updateAppointments', payload);
      this.creator = { ...this.creator, ['creating']: false };
    },
    scrollView() {
      let topoffset = this.$refs.nowIndicator.offsetTop;
      console.log('Scrolling to now.', topoffset);
      setTimeout(() => {
        window.scroll({ top: topoffset, left: 0, behavior: 'smooth' });
      }, 500);
    },
  },
  watch: {
    scrollToNow(val) {
      if (val && this.isToday) this.scrollView();
    },
  },
}
</script>
<style lang="scss">
ul.kalendar-day {
  position: relative;
  background-color: white;
  &.is-weekend {
    background-color: var(--weekend-color);
  }
  &.is-today {
    background-color: var(--current-day-color);
  }
  .clear {
    position: absolute;
    z-index: 1;
    top: -20px;
    right: 0;
    font-size: 10px;
  }
  .creating {
    z-index: 3;
  }
}
</style>
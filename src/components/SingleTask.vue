<template>
  <div class="container px-2 py-4">
    <div class="md:px-8 px-4 inline">
      <span>
        <font-awesome-icon
          v-show="taskOnProgress"
          v-on:click="onSubmitProgress(task._id, 100)"
          class="cursor-pointer text-xl text-gray-500 hover:text-green-400"
          :icon="['far', 'circle']"
        />
      </span>
      <span>
        <font-awesome-icon
          v-show="taskDone"
          class="text-xl text-green-400"
          :icon="['fas', 'check-circle']"
        />
      </span>
    </div>

    <span class="w-1/3 text-lg text-blue-500">{{ task.taskName }}</span>
    <div
      class="md:absolute md:text-right md:mr-16 lg:text-right lg:mr-40 md:w-2/3 w-full  right-0 md:inline-block block text-right text-blue-600"
    >
      <span class="text-green-400"> {{ task.progress }}% </span>
      <!-- <div class="cursor-pointer w-1/4 inline-block p-0 m-0">
        <v-slider
          v-model="task.progress"
          :color="color"
          track-color="grey"
          always-dirty
          min="0"
          max="100"
          v-on:click.stop="onSubmitProgress(task._id, task.progress)"
        >
        </v-slider>
      </div> -->
      <span class="cursor-pointer slider">
        <input
          v-model="task.progress"
          type="range"
          min="0"
          max="100"
          v-on:click.stop="onSubmitProgress(task._id, task.progress)"
        />
      </span>

      <!-- <div class=" w-1/4 inline-block">
        <VueSimpleRangeSlider
          style="100%"
          :min="0"
          :max="100"
          :logarithmic="false"
          :barColor="color"
          v-model="task.progress"
          v-on:click.stop="onSubmitProgress(task._id, task.progress)"
        ></VueSimpleRangeSlider>
      </div> -->

      <span>
        <!-- <font-awesome-icon
          class="cursor-pointer text-xl text-gray-400 ml-4 hover:text-green-400"
          :icon="['fas', 'edit']"
        /> -->
        <font-awesome-icon
          class="cursor-pointer text-xl text-gray-400 mx-4 hover:text-red-400"
          :icon="['fas', 'trash-alt']"
          v-on:click="onSubmitDelete(task._id)"
        />
      </span>
    </div>
    <hr class="w-full text-center text-gray-300" />
  </div>
</template>

<script>
//import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/dist/vueSimpleRangeSlider.css";

import { mapActions } from "vuex";
export default {
  name: "SingleTask",
  props: ["task"],
  data() {
    return {
      taskDone: false,
      taskOnProgress: true,
      disabled: 1,
      slider: {
        value: 45
      },
      taskTitle: "Edit User"
    };
  },
  components: {
    //VueSimpleRangeSlider
  },
  computed: {
    // color() {
    //   if (this.task.progress < 10) return "#FF0000";
    //   if (this.task.progress < 20) return "#DC143C";
    //   if (this.task.progress < 30) return "#F08080";
    //   if (this.task.progress < 40) return "#FF8C00";
    //   if (this.task.progress < 50) return "#FFA500";
    //   if (this.task.progress < 60) return "#FFD700";
    //   if (this.task.progress < 70) return "#7CFC00";
    //   if (this.task.progress < 80) return "#32CD32";
    //   if (this.task.progress < 90) return "#228B22";
    //   return "#008000";
    // }
  },
  methods: {
    ...mapActions("task", ["deleteTask", "progressTask"]),
    onSubmitProgress: function(id, value) {
      if (parseInt(value) === 100) {
        this.taskDone = true;
        this.taskOnProgress = false;
        //this.disabled = 0;
        this.task.progress = 100;
        console.log("Task is Done");
      } else {
        this.taskDone = false;
        this.taskOnProgress = true;
      }
      console.log(id);
      this.progressTask({ id, value });
    },
    onSubmitDelete: function(id) {
      this.deleteTask({ id });
    }
  },
  created() {
    if (this.task.progress == 100) {
      this.taskDone = true;
      this.taskOnProgress = false;
    }
  }
};
</script>

<style>
.slider {
  color: crimson;
}
</style>

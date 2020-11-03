<template>
  <div class="rounded mx-8 md:mx-10 lg:mx-32">
    <img
      class="h-16 w-16 rounded-full bg-white mx-auto my-2 md:mt-4 lg:mt-6 shadow-2xl"
      src="@/assets/male-avatar.jpg"
      alt
    />
    <div class="text-center text-xl text-white pb-2">{{ currentUser }}</div>
    <div class="bg-white shadow-2xl ">
      <div class="rounded-b bg-green-600 py-2 mb-2">
        <span class="text-2xl text-white pl-2">Task Board</span>
      </div>
      <SingleTask
        v-for="task in tasks"
        v-bind:key="task.id"
        v-bind:task="task"
      ></SingleTask>
      <transition name="slide-fade">
        <!-- <AddTask v-show="addTaskOn" v-model="taskAdded"></AddTask> -->
        <AddTask v-model="taskAdded"></AddTask>
      </transition>
      <div class="text-center pt-4 pb-2">
        <span>
          <font-awesome-icon
            class="cursor-pointer text-3xl text-green-400 hover:text-green-600 animate-bounce"
            v-on:click="onSubmit(taskAdded)"
            :icon="['fas', 'plus-circle']"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTask from "@/components/SingleTask.vue";
import AddTask from "@/components/AddTask.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      addTaskOn: false,
      taskAdded: ""
    };
  },
  components: { SingleTask, AddTask },
  computed: {
    ...mapGetters("task", ["tasks"]),
    ...mapGetters("auth", ["currentUser"])
  },
  methods: {
    ...mapActions("task", ["addTask", "fetchTasks", "setUser"]),
    onSubmit: function(taskAdded) {
      this.addTaskOn = true;
      if (this.taskAdded !== "") {
        console.log(this.taskAdded);
        this.addTask({ taskAdded });
        console.log(this.tasks);
        this.taskAdded = "";
        this.addTaskOn = false;
        this.fetchTasks();
      } else {
        console.log("No task added");
      }
    }
  },
  created() {
    this.setUser();
    this.fetchTasks().then(() => {
      console.log("fetchTasks is done");
      console.log(this.currentUser);
    });
  }
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

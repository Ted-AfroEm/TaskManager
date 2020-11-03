<template>
  <AddTask v-model="taskAdded"></AddTask>
</template>

<script>
import AddTask from "@/components/AddTask.vue";

export default {
  data() {
    return {
      taskAdded: ""
    };
  },
  components: {
    AddTask
  }
};
</script>

<style></style>

<template>
  <div>
    <form action method="get" class="py-2">
      <div class="py-4 text-center">
        <label class="m-4 focus:text-blue-600" for="name">
          <font-awesome-icon
            class="text-lg text-gray-500 hover:text-blue-500"
            :icon="['fas', 'pen']"
          />
        </label>
        <input
          class="rounded w-2/4 py-2 text-center outline-none bg-gray-100 hover:bg-gray-200 focus:shadow-lg focus:placeholder-transparent"
          type="text"
          name="name"
          id="name"
          placeholder="Add Task"
          required
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
        />
        <!-- <hr class="w-2/3 text-center ml-24 " /> -->
      </div>
      <!-- <div class="text-right px-2">
        <button
          type="submit"
          value="Login"
          class="font-medium bg-blue-500 hover:bg-blue-700 text-white text-center py-1 px-2 rounded"
        >
          ADD
        </button>
      </div>-->
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  props: ["value"]
};
</script>

<style></style>

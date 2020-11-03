<template>
  <div>
    <div
      class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 flex justify-center"
      role="alert"
    >
      <p class="font-bold">You have signed up successfully</p>
    </div>
    <router-link to="/login">
      <div class="inline-block lg:m-4 ">
        <button
          type="submit"
          value="Login"
          class="w-40  font-medium bg-blue-500 hover:bg-blue-700 text-white text-center py-1 px-2 rounded"
        >
          LogIn
        </button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

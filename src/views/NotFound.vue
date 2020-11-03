<template>
  <div class="text-center py-16">
    <h1 class="text-white font-mono text-6xl">404</h1>
    <h1 class="text-white text-2xl">Page Not Found</h1>
    <p class="text-white">
      Oops we couldn't find that page Try going
      <router-link class="text-blue-400" :to="{ name: 'Home' }"
        >home</router-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

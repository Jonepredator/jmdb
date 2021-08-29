<template>
  <div class="flex ml-5 mt-3">
    <router-link to="/">
      <img src="@/assets/images/logo.png" alt="logo" class="mb-4" />
    </router-link>

    <ul class="flex mt-3.5">
      <li>
        <router-link to="/" class="ml-8"> Movies </router-link>
      </li>
      <li>
        <router-link to="/actors" class="ml-8"> Actors </router-link>
      </li>
      <li>
        <router-link to="/profile" class="ml-8"> Profile </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
<template>
  <div class="flex">
    <img src="@/assets/images/logo.png" alt="logo" class="mb-4" />

    <ul class="flex mt-3.5">
      <li>
        <router-link to="/movies" class="ml-8"> Movies </router-link>
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
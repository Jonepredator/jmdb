<template>
  <div class="mx-5">
    <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold">
      Popular Movies
    </h2>

    <div
      class="
        grid grid-cols-1
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        gap-8
      "
    >
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>
  </div>
</template>

<script>
import MovieItem from "./items/MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
};
</script>

<style>
</style>
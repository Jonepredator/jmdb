<template>
  <div class="container mx-auto px-4 py-16">
    <PopularMovies />
    <UpcomingMovies />
  </div>
</template>

<script>
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";
export default {
  components: {
    PopularMovies,
    UpcomingMovies,
  },
};
</script>

<style>
</style>
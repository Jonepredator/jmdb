<template>
  <div>
    <router-link to="/movie/11">
      <img
        src="@/assets/images/space-jam.jpg"
        alt="space-jam"
        class="hover:opacity-75 transition ease-in duration-300"
      />
    </router-link>
    <h3>2067</h3>
    <div class="flex">
      <svg class="fill-current text-yellow-600 w-4" viewBox="0 0 576 512">
        <path
          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          data-icon="star"
        />
      </svg>
      <span class="ml-2"> 47% | 2020-10-01</span> <br />
    </div>
    <span class="text-sm text-gray-500">Science Fiction, Thriller, Drama</span>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
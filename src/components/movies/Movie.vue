<template>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
      <img src="@/assets/images/space-jam.jpg" alt="" class="w-64" />
      <div class="ml-24">
        <h2 class="text-4xl font-semibold">Space-Jam</h2>
        <span class="text-gray-500 text-sm flex">
          <svg
            class="fill-current text-yellow-600 w-4 mr-1"
            viewBox="0 0 576 512"
          >
            <path
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              data-icon="star"
            />
          </svg>
          47% | 2020-10-01 Science Fiction, Thriller, Drama</span
        >
        <p class="mt-5">
          A rogue artificial intelligence kidnaps the son of famed basketball
          player LeBron James, who then has to work with Bugs Bunny to win a
          basketball game.
        </p>

        <div class="mt-5">
          <span class="mt-5 font-semibold">Featured Cast</span>

          <div class="flex">
            <div class="flex flex-col mt-5 mr-5">
              <span>Leo Benvenuti</span>

              <span class="text-gray-500">Writer</span>
            </div>
            <div class="flex flex-col mt-5">
              <span>Allison Abbate</span>

              <span class="text-gray-500">Executive producer</span>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <a
            href="#"
            class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black"
          >
            <svg class="w-6 fill-current" viewBox="0 0 512 512">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
              />
            </svg>

            <span class="ml-3">Play Trailer</span>
          </a>
          <a
            href="#"
            class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black ml-5"
          >
            <svg class="w-6 fill-current" viewBox="0 0 512 512">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              />
            </svg>

            <span class="ml-3">Favourite</span>
          </a>
        </div>
      </div>
    </div>

    <Cast />
    <Images />
  </div>
</template>

<script>
import Cast from "./Cast.vue";
import Images from "./Images";
export default {
  components: {
    Cast,
    Images,
  },
};
</script>

<style>
</style>
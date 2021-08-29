<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold">
      popular actors
    </h2>
    <div
      class="
        grid grid-cols-2
        sm:grid-cols-2
        md:grid-cols-5
        lg:grid-cols-5
        gap-5
      "
    >
      <ActorItem :key="actor.id" v-for="actor in this.actors" :actor="actor" />
    </div>

    <div class="text-center mt-5">
      <a href="" v-on:click.prevent="previous()"> Previous </a>
      <a href="" v-on:click.prevent="next()" class="ml-20"> Next </a>
    </div>

    <!-- <div class="flex justify-center">
      <div class="spinner"></div>
    </div> -->
  </div>
</template>

<script>
let currentPage = 1;

import ActorItem from "../items/ActorItem.vue";
export default {
  data() {
    return {
      actors: [],
    };
  },
  components: {
    ActorItem,
  },

  mounted() {
    this.fetchActors(currentPage);
    //  this.scroll();
  },

  methods: {
    async fetchActors(page) {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/person/popular?page=" + page
        );
        this.actors = response.data.results;
        //   this.actors.push(...response.data.results);
      } catch (error) {
        console.log(error);
      }
    },

    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          currentPage += 1;
          this.fetchActors((currentPage += 1));
        }
      };
    },

    next() {
      currentPage += 1;
      this.fetchActors(currentPage);
      // alert("next");
    },
    previous() {
      currentPage -= 1;
      this.fetchActors(currentPage);
      // alert("previous");
    },
  },
};
</script>

<style>
</style>
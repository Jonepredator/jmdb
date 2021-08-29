<template>
  <div class="flex mt-4">
    <input
      ref="searchBox"
      type="text"
      class="
        rounded-full
        bg-gray-600
        px-6
        w-50
        h-10
        mr-3
        focus:outline-none focus:outline-shadow
      "
      placeholder="Search..."
      @input="debounceSearch"
      v-model="searchTerm"
      @focus="handleFocus"
    />
    <div class="absolute">
      <svg
        class="h-6 w-4 text-gray-400 mt-2 ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>

    <div class="absolute mt-12 ml-2 rounded bg-gray-600 w-60 z-50">
      <ul class="mt-3" v-if="showSearchResult">
        <li :key="index" v-for="(movie, index) in searchResult">
          <router-link
            :to="`/movie/${movie.id}`"
            @click.native="showSearchResult = false"
            class="flex items-center border-b border-gray-500 p-1"
          >
            <img
              :src="posterPath(movie.poster_path)"
              alt="small-image"
              class="w-10 p1"
            />
            <span class="ml-3">{{ movie.title }}</span>
          </router-link>
        </li>
      </ul>
      <ul class="px-3" v-else>
        <li v-if="noResultFound">No result found for "{{ searchTerm }}"</li>
      </ul>
    </div>
    <img src="@/assets/images/face.jpg" alt="face" class="h-10 rounded-full" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResult: [],
      noResultFound: false,
      searchTerm: "",
      showSearchResult: false,
    };
  },
  mounted() {
    this.keyboardEvents();
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debaounce);
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 2) {
          this.fetchSearch(event.target.value);
        }
      }, 600);
    },

    async fetchSearch(term) {
      try {
        const response = await this.$http.get("/search/movie?query=" + term);
        this.searchResult = response.data.results;
        this.showSearchResult = response.data.results ? true : false;
      } catch (error) {
        console.log(error);
      }
    },

    handleFocus() {
      if (this.searchTerm != "") {
        this.showSearchResult = true;
      }
    },

    keyboardEvents() {
      let windowObj = this;

      window.addEventListener("click", (e) => {
        if (!this.$el.contains(e.target)) {
          this.showSearchResult = false;
        }
      });

      window.addEventListener("keypress", (e) => {
        if (e.Code == "47") {
          e.preventDefault();
          windowObj.$refs.searchBox.focus();
        }
      });

      window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          this.showSearchResult = false;
        }
      });
    },

    posterPath(poster_path) {
      if (poster_path) {
        return "https://image.tmdb.org/t/p/w500/" + poster_path;
      } else {
        return "https://via.placeholder.com/50x75";
      }
    },
  },
};
</script>

<style>
</style>
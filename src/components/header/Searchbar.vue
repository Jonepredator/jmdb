<template>
  <div class="flex mt-4">
    <input
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

    <div v-if="false" class="absolute mt-12 ml-2 rounded bg-gray-600 w-60">
      <ul class="mt-3">
        <li class="flex items-center border-b border-gray-500 p-1">
          <img
            src="@/assets/images/space-jam.jpg"
            alt="small-image"
            class="w-10 p1"
          />
          <span class="ml-3">Space Jam 2</span>
        </li>
      </ul>
    </div>
    <img src="@/assets/images/face.jpg" alt="face" class="h-10 rounded-full" />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
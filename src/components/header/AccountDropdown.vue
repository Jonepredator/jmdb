<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="focus:outline-none cursor-pointer">
      <img
        src="@/assets/images/face.jpg"
        alt="face"
        class="h-10 rounded-full mb-5 mr-1"
      />
    </button>

    <button
      @click="isOpen = false"
      v-if="isOpen"
      class="
        fixed
        top-0
        right-0
        bottom-0
        w-full
        h-full
        cursor-default
        bg-black
        opacity-50
      "
    ></button>

    <div
      v-if="isOpen"
      class="
        absolute
        bg-white
        rounded-lg
        py-2
        w-48
        right-0
        mr-1.5
        shadow-xl
        cursor-pointer
      "
    >
      <a
        class="text-gray-600 block px-4 py-2 hover:bg-gray-600 hover:text-white"
        >Account Setting</a
      >
      <a
        class="text-gray-600 block px-4 py-2 hover:bg-gray-600 hover:text-white"
        >Support</a
      >
      <a
        href=""
        class="text-gray-600 block px-4 py-2 hover:bg-gray-600 hover:text-white"
        >Logout</a
      >
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const handleEscape = (e) => {
      if (e.key == "Esc" || e.key == "Escape") {
        this.isOpen = false;
      }
    };

    document.addEventListener("keydown", handleEscape);

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  },

  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
</style>
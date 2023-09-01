<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex flex-col gap-6 items-center bg-white w-80 rounded-2xl shadow-xl shadow-bright-blue/10">
      <img class="rounded-t-2xl" src="./assets/img/illustration-hero.svg">
      <p class="text-center font-black text-2xl text-dark-blue">Order Summary</p>
      <p class="text-center text-desaturated-blue px-6">
        You can now listen to millions of
        songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div class="flex flex-row items-center gap-10 bg-very-pale-blue rounded-xl py-4 px-4">
        <div class="flex flex-row gap-5">
          <img src="./assets/img/icon-music.svg">
          <div class="flex flex-col">
            <p class="font-bold text-sm text-dark-blue">Annual Plan</p>
            <p class="text-desaturated-blue text-sm">$59.99/year</p>
          </div>
        </div>
        <p class="cursor-pointer text-xs text-bright-blue hover:text-blue-purple hover:no-underline underline font-bold">Change</p>
      </div>
      <div class="cursor-pointer bg-bright-blue hover:bg-blue-purple rounded-2xl px-16 py-4 shadow-xl shadow-bright-blue/20">
        <p class="text-white font-bold text-sm">Proceed to Payment</p>
      </div>
      <p class="cursor-pointer pb-8 text-sm text-desaturated-blue hover:text-dark-blue font-bold">Cancel Order</p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<script>
export default {
  data() {
    return {
      bodyClass: 'bg-pale-blue font-red-hat'
    };
  },
  mounted() {
    document.body.className = this.bodyClass;
  },
  beforeDestroy() {
    // Reset the class when the component is destroyed
    document.body.className = '';
  }
};
</script>
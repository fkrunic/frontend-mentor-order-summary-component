<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex flex-col bg-white">
      <img src="./assets/img/illustration-hero.svg">
      <p>Order Summary</p>
      <p>
        You can now listen to millions of 
        songs, audiobooks, and podcasts on any 
        device anywhere you like!
      </p>
      <div class="flex flex-row">
        <img src="./assets/img/icon-music.svg">
        <div class="flex flex-col">
          <p>Annual Plan</p>
          <p>$59.99/year</p>
        </div>
        <p>Change</p>
      </div>
      <div>
          <p>Proceed to Payment</p>
        </div>
        <div>
          <p>Cancel Order</p>
        </div>      
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
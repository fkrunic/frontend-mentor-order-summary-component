<script setup lang="ts">
</script>

<template>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>  
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
      bodyClass: ''
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
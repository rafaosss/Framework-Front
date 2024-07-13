<template>
  <div class="main-app-view">
    <MainAppComponent />
  </div>
</template>

<script>
import MainAppComponent from '@/components/MainAppComponent.vue';

export default {
  components: {
    MainAppComponent
  }
};
</script>

<style scoped>
.main-app-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0e0e0;
}
</style>

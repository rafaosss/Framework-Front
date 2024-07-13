<template>
  <div class="login">
    <h2>Login</h2>
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';

export default {
  components: {
    LoginComponent
  }
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

h2 {
  margin-bottom: 20px;
}
</style>

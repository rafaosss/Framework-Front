<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <button @click="goToRegister">Registrar-se</button>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'user' && this.password === 'password') {
        this.$router.push('/app');
      } else {
        alert('Login inválido');
      }
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 200px;
}

button {
  padding: 8px 16px;
  margin-top: 10px;
}
</style>

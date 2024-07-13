<template>
  <div>
    <form @submit.prevent="register">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    register() {
      this.$router.push('/app');
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 200px;
}

button {
  padding: 8px 16px;
}
</style>

<template>
  <div class="main-app">
    <h2>Aplicação Principal</h2>
    <div class="content">
      <h3>Bem-vindo!</h3>
      <p>Esta é a área de conteúdo principal. Você pode adicionar mais componentes e recursos aqui.</p>

      <section class="features">
        <h4>Recursos</h4>
        <ul>
          <li>Recurso 1: Descrição do recurso 1.</li>
          <li>Recurso 2: Descrição do recurso 2.</li>
          <li>Recurso 3: Descrição do recurso 3.</li>
        </ul>
      </section>

      <section class="actions">
        <h4>Ações</h4>
        <button @click="performAction('Ação 1')">Executar Ação 1</button>
        <button @click="performAction('Ação 2')">Executar Ação 2</button>
        <button @click="performAction('Ação 3')">Executar Ação 3</button>
      </section>

      <section class="dynamic-content">
        <h4>Manipulação do DOM</h4>
        <input type="text" v-model="newItem" placeholder="Adicionar novo item" />
        <button @click="addItem">Adicionar</button>
        <ul>
          <li v-for="(item, index) in items" :key="index" :class="{ highlighted: item.highlight }" @click="toggleHighlight(index)">
            {{ item.text }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainAppComponent',
  data() {
    return {
      newItem: '',
      items: [
        { text: 'Item 1', highlight: false },
        { text: 'Item 2', highlight: false },
        { text: 'Item 3', highlight: false },
      ]
    };
  },
  methods: {
    performAction(action) {
      alert(`${action} executada!`);
    },
    addItem() {
      if (this.newItem) {
        this.items.push({ text: this.newItem, highlight: false });
        this.newItem = '';
      }
    },
    toggleHighlight(index) {
      this.items[index].highlight = !this.items[index].highlight;
    }
  }
};
</script>

<style scoped>
.main-app {
  padding: 20px;
  background-color: #f9f9f9;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

h3 {
  color: #333;
}

p {
  margin-bottom: 20px;
}

.features, .actions, .dynamic-content {
  margin-bottom: 20px;
}

.features ul, .dynamic-content ul {
  list-style-type: disc;
  padding-left: 20px;
}

button {
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.highlighted {
  background-color: yellow;
}
</style>

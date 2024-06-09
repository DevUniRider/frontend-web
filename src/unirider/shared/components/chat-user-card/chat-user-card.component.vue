
<script>
export default {
  name: 'ChatUserCard',
  props: {
    nombre: {
      type: String,
      required: true
    },
    apellido: {
      type: String,
      required: true
    },
    hora: {
      type: String,
      required: true
    },
    texto: {
      type: String,
      required: true
    },
    foto: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="card">
    <pv-card>
      <template #title>
        {{ nombre }} {{ apellido }}
        <img :src="foto" alt="Foto de usuario" />
      </template>
      <template #subtitle>
        {{ hora }}
      </template>
      <template #content>
        <p>{{ texto }}</p>
      </template>
    </pv-card>
  </div>
</template>
<style scoped>
.card {
  width: 60%;
  margin-bottom: 5px;
}
</style>
<script>
export default {
  name: "toolbar-component",
  data() {
    return {
      userPhoto: 'ruta/a/la/foto/del/usuario.jpg', // Reemplaza esto con la ruta real a la foto del usuario
    };
  },
}
</script>

<template>
  <nav class="toolbar">
    <ul>
      <h2 class="start"><router-link to="/home">UniRider</router-link></h2>
      <li><router-link to="/service">Servicio</router-link></li>
      <li><router-link to="/plans">Planes</router-link></li>
      <li><router-link to="/maps">Mapa</router-link></li>
      <li><router-link to="/reserve">Reserva</router-link></li>
      <li><i class="fa fa-bell"></i></li> <!-- Icono de campana (notificaciones) -->
      <li><img :src="userPhoto" alt=" "></li>
    </ul>
  </nav>
</template>

<style>
.toolbar {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
}
.toolbar ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
}
.toolbar ul li {
  margin-right: 7px;
}

.toolbar h2.start {
  font-size: 1em; /* Ajusta el tamaño de la fuente al tamaño que desees */
  margin: 0;
  padding: 0;
  margin-right: auto;
}
a {
  font-weight: 500;
  color: #f0f0f0;
  text-decoration: inherit;
}


</style>
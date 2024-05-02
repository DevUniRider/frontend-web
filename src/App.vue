<script>
import ToolbarComponent from './unirider/public/toolbar.component.vue';
import LoginUser from "./unirider/shared/pages/login-user.component.vue";
import ChooseUser from "./unirider/shared/pages/choose-user.vue";
export default {
  components: {
    ChooseUser,
    LoginUser
  }
}
</script>

<template>
  <div id="app">
    <router-view/> <!-- Este componente maneja los componentes que cambian según la ruta -->
  </div>
  <MapsPage />
</template>

<style scoped>

</style>

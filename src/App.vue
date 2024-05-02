<script>
import MapCard from './unirider/shared/components/map-card/map-card.component.vue';
import TravelInfoCard from './unirider/shared/components/travel-info-card/travel-info-card.component.vue';
import QualifyCard from './unirider/shared/components/qualify-card/qualify-card.component.vue';
import Home from './unirider/shared/pages/home.component.vue';
import LoginUser from './unirider/shared/pages/login-user.component.vue';
import RegisterUser from './unirider/shared/pages/register-user.component.vue';


export default {
  name: "app",
  components: {LoginUser, RegisterUser},
  data() {
    return {
      userName: '',
      email: '',
      password: '',
    }
  },
  methods: {
    onUserRegistered(user) {
      this.userName = user.userName;
      this.email = user.email;
      this.password = user.password;
      console.log("User registered: ", user);
    },
  }

}

</script>

<template>
  <router-view></router-view>
  <!--login-user/-->
  <!--register-user v-on:user-registered="onUserRegistered"/-->
  <!--<MapCard />-->
  <!--TravelInfoCard /-->
  <!--QualifyCard /-->
</template>


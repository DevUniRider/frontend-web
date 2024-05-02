<script setup>
import MapCard from '../components/map-card/map-card.component.vue';
import TravelInfoCard from '../components/travel-info-card/travel-info-card.component.vue';
import ToolbarComponent from "../../public/toolbar.component.vue";


</script>
<template>
  <toolbar-component/>
  <div class="card-container">
    <MapCard />
    <TravelInfoCard />
  </div>
</template>


<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
}
@media (min-width: 768px) {
  .card-container {
    flex-direction: row;
  }
}
</style>

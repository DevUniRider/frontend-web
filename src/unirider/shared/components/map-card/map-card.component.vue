<script>
import MapImage from '../../../../assets/mapa.png';

export default {
  name: 'MapCard',
  data() {
    return {
      mapImage: MapImage
    }
  }
}
</script>
<template>
  <div class="map-card">
    <div class="search-bar">
      <input type="search" placeholder="Buscar..." />
    </div>
    <img class="map-image" :src="mapImage" alt="Mapa"/>
  </div>
</template>

<style scoped>
.map-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.search-bar {
  margin-bottom: 15px;
}
.search-bar input[type="search"] {
  width: 100%;
}

.map-image {
  width: 100%;
  border: 1px solid #000000;
  border-radius: 8px;
}

</style>
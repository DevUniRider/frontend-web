<script>
export default {
  name: 'MapCard',
}
</script>
<template>
  <div class="map-card">
    <div class="search-bar">
      <input type="search" placeholder="Buscar..." />
    </div>
    <img class="map-image" src="../../../assets/mapa.png" alt="Mapa"/>
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

.map-image {
  width: 100%;
  border: 1px solid #000000;
  border-radius: 8px;
}

.search-bar input[type="search"] {
  width: 100%;
}

</style>
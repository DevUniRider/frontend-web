<script>
export default {
  name: 'TravelInfoCard',
}
</script>

<template>
    <div class="travel-info-card">
      <table>
        <tr>
          <th colspan="2"><h2>Información del viaje</h2></th>
        </tr>
        <tr>
          <td>Distancia:</td>
          <td>9 KM</td>
        </tr>
        <tr>
          <th colspan="2"><h2>Conductor disponible</h2></th>
        </tr>
        <tr>
          <td>Punto de recojo:</td>
          <td>Av. Gral. Salaverry, Jesús María 15072</td>
        </tr>
        <tr>
          <td rowspan="2"><img src="../../../assets/auto.jpg"></td>
          <td>KIA-CERATO</td>
        </tr>
        <tr>
          <td>A1B-234</td>
        </tr>
        <tr>
          <td colspan="2">
            <span class="driver-name">Juan Pérez</span>
            <span class="driver-rating">4.5</span>
          </td>
        </tr>
      </table>
      <button class="request-trip-button">Solicitar viaje</button>
    </div>
</template>

<style>
.travel-info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.travel-info-card table td {
  text-align: center;
}
.request-trip-button {
  background-color: #39BFBF;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}
</style>
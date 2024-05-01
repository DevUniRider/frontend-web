<script>
export default {
  name: 'QualifyCard',
  data() {
    return {
      selectedButtonSection1: null,
      selectedButtonSection2: null,
      rating: 0,
      comment: '',
      showThankYouMessage: false
    }
  },
  methods: {
    selectButtonSection1(button) {
      this.selectedButtonSection1 = button;
    },
    selectButtonSection2(button) {
      this.selectedButtonSection2 = button;
    },
    setRating(rating) {
      this.rating = rating;
    },
    limitWords(){
      const words = this.comment.split(' ');
      if (words.length > 250) {
        this.comment = words.slice(0, 250).join(' ');
      }
    },
    submitComment() {
      this.showThankYouMessage = true;
      setTimeout(() => {
        this.showThankYouMessage = false;
      }, 3000);
    }
  }
}
</script>
<template>
  <h2>Califica a tu conductor</h2>
  <div class="qualify-card">
    <div class="section 1">
      <div class="block">
        <h3>Puntualidad</h3>
        <button v-for="button in ['A tiempo', 'Retrasado', 'Tarde']" :key="button"
                :class="{ selected: selectedButtonSection1 === button }"
                @click="selectButtonSection1(button)">
          {{ button }}
        </button>
      </div>
      <div class="block">
        <h3>Puntaje</h3>
        <star-rating :rating="rating" @rating-selected="setRating"></star-rating>
      </div>
    </div>
    <div class="section 2">
      <div class="block">
        <h3>Conducción</h3>
        <button v-for="button in ['Segura', 'Regular', 'Peligrosa']" :key="button"
                :class="{ selected: selectedButtonSection2 === button }"
                @click="selectButtonSection2(button)">
          {{ button }}
        </button>
      </div>
      <div class="block">
        <h3>Comentarios</h3>
        <textarea v-model="comment" @input="limitWords"></textarea>
      </div>
    </div>
  </div>
  <div class="submit-section">
    <button @click="submitComment">Enviar comentario</button>
    <div v-if="showThankYouMessage" class="thank-you-message">Gracias por tu comentario</div>
  </div>
</template>

<style scoped>
.section {
  flex: 1;
  /* border: 1px solid #000;  Para visualizar las secciones */
}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.qualify-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.submit-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.thank-you-message {
  position: absolute;
  z-index: 1;
}

textarea {
  resize: none; /* Evita que el usuario pueda redimensionar el cuadro de texto */
  width: 200px; /* Establece el ancho del cuadro de texto */
  height: 100px; /* Establece la altura del cuadro de texto */
}
button {
  margin: 5px;
  padding: 10px 20px; /* Añade relleno para hacer los botones más grandes */
  border-radius: 5px; /* Redondea las esquinas de los botones */
  border: 1px solid rgba(0, 0, 0, 0.9);border: none; /* Elimina el borde predeterminado */
  /*background-color: #007BFF; /* Cambia el color de fondo a un azul */
  /* color: white; /* Cambia el color del texto a blanco */
  font-size: 16px; /* Aumenta el tamaño de la fuente */
  cursor: pointer; /* Cambia el cursor a un puntero cuando se pasa el ratón sobre el botón */
  transition: background-color 0.3s ease; /* Añade una transición suave al cambiar el color de fondo */
}
button:hover {
  background-color: #b8b6b6; /* Oscurece el color de fondo cuando se pasa el ratón sobre el botón */
}
button.selected {
  background-color: #39BFBF; /* Cambia este color según tu preferencia */
  color: white;
}
</style>
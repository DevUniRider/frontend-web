<script>
export default {
  name: "qualify-card",
  data() {
    return {
      selectedButtonSection1: null,
      selectedButtonSection2: null,
      comment: '',
      showThankYouMessage: false,

      ratings: [4.98, 5, 4.7, 5, 4.8], // Inicializa las calificaciones
      rating: 0, // Inicializa la calificación actual
      ratingText: '', // Inicializa el texto de la calificación
      userHasRated: false, // Inicializa el estado de calificación del usuario
      userRatingIndex: null, // Inicializa el índice de la calificación del usuario
      stars: [5, 4, 3, 2, 1], // Inicializa las estrellas
    };
  },
  created() {
    this.calculateAverage(); // Calcula el promedio inicial
  },
  methods: {
    selectButtonSection1(button) {
      this.selectedButtonSection1 = button;
    },
    selectButtonSection2(button) {
      this.selectedButtonSection2 = button;
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
    },
    setRating(starIndex) {
      if (!this.userHasRated) {
        // Si el usuario no ha calificado antes, agrega la nueva calificación a la lista
        this.ratings.push(starIndex);
        this.userRatingIndex = this.ratings.length - 1;
        this.userHasRated = true;
      } else {
        // Si el usuario ya ha calificado, actualiza su calificación
        this.ratings[this.userRatingIndex] = starIndex;
      }
      this.calculateAverage(); // Calcula el nuevo promedio
    },
    calculateAverage() {
      let sum = this.ratings.reduce((a, b) => a + b, 0);
      let avg = sum / this.ratings.length;
      this.rating = avg;
      this.updateRatingText(); // Actualiza el texto de la calificación
    },
    updateRatingText() {
      let ratingValue = `${this.rating.toFixed(2)}/5.00`;
      if (this.rating === 5) {
        this.ratingLabel = 'Excellent';
      } else if (this.rating >= 4) {
        this.ratingLabel = 'Very Good';
      } else if (this.rating >= 3) {
        this.ratingLabel = 'Good';
      } else if (this.rating >= 2) {
        this.ratingLabel = 'Fair';
      } else {
        this.ratingLabel = 'Bad';
      }
      this.ratingValue = ratingValue;
    },
    getStarCount(star) {
      return this.ratings.filter(rating => Math.round(rating) === star).length;
    },
    goHome(){
      this.$router.push('/home');
    },
  }
}
</script>

<template>
  <main class="main-container">
    <div class="qualify-card">
      <h2>Califica a tu conductor</h2>
      <div class="star-rating-container">
        <span v-for="starIndex in 5" :key="starIndex" class="star" @click="setRating(starIndex)" :class="{ 'active': starIndex <= rating, 'selected': starIndex <= ratings[userRatingIndex] }">★</span>
      </div>
      <div class="section">
        <div class="block">
          <h3>Puntualidad</h3>
          <button
              v-for="button in ['A tiempo', 'Retrasado', 'Tarde']"
              :key="button"
              :class="{ selected: selectedButtonSection1 === button }"
              @click="selectButtonSection1(button)"
          >{{ button }}</button>
        </div>
        <div class="block">
          <h3>Conducción</h3>
          <button
              v-for="button in ['Segura', 'Regular', 'Peligrosa']"
              :key="button"
              :class="{ selected: selectedButtonSection2 === button }"
              @click="selectButtonSection2(button)"
          >{{ button }}</button>
        </div>
      </div>
      <div class="comments-section">
        <h3>Comentarios</h3>
        <textarea v-model="comment" @input="limitWords"></textarea>
      </div>
      <div class="submit-section">
        <button @click="submitComment">Enviar comentario</button>
        <div v-if="showThankYouMessage" class="thank-you-message">Gracias por tu comentario</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.qualify-card {
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}

h2 {
  margin: 10px 0;
  color: white;
}

.star-rating-container {
  margin: 10px 0;
}

.star {
  cursor: pointer;
  color: grey;
  font-size: 2.5em;
  transition: color 0.3s ease;
}

.star.selected {
  color: #FEC200;
}

.section {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.comments-section {
  margin: 10px 0;
}

textarea {
  resize: none;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #39BFBF;
}

button.selected {
  background-color: #39BFBF;
  color: white;
}

.submit-section {
  margin: 10px 0;
}

.thank-you-message {
  margin-top: 10px;
  color: white;
}
</style>

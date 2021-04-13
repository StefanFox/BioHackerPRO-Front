<template>
  <b-row>
    <b-col md="12">
      <!-- card title  -->
      <b-card title="Обслежования" class="position-static md-2" style="max-width: 100%">
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has
          even longer content than the first to show that equal height action.
        </b-card-text>
        <b-card-text>
          <small class="text-muted">Врач: Тихонов А.С, </small>
          <small class="text-muted">Дата: 20.01.2021</small>
        </b-card-text>
      </b-card>
      <!-- primary bg card -->
      <b-card
          text-variant="white"
          bg-variant="primary"
          align="center"
          class="position-static"
      >
        <blockquote class="blockquote  mb-0">
          <p>Назначено мероприятия</p>
          <footer class="blockquote-footer text-white opacity-75">
            <small>
              Сдача крови 15.12.2021
            </small>
          </footer>
        </blockquote>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import {BCard, BCardGroup, BCardText, BCol, BRow} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";

export default {
  components: {
    BRow,
    BCol,
    BCardGroup,
    BCard,
    BCardText,
  },
  directives: {
    Ripple,
  },
}
</script>

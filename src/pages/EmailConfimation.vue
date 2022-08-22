<template>
  <q-page padding>
    <p class="text-body1">
      Obrigado por se cadastrar!
    </p>
    <p class="text-body1">
      Por favor, confirme seu Email no email enviado para: <strong>{{ $route.query.email }}</strong>
    </p>
    <q-btn
      label="Voltar"
      color="primary"
      class="full-width"
      flat
      rounded
      :to="{ name: 'login' }"
    >
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailConfirmation'
})
</script>

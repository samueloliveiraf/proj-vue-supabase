<template>
  <q-page padding>
    <p class="text-body1">
      Email enviado com sucesso!
    </p>
    <p class="text-body1">
      Por favor, verifique seu Email: <strong>{{ $route.query.email }}</strong>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailReset'
})
</script>

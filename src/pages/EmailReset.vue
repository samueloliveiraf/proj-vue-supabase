<template>
  <q-page padding>
    <q-card class="my-card window-height justify-center items-center">
      <q-card-section>
        <p class="text-body1">
          Email enviado com sucesso!
        </p>
        <p class="text-body1">
          Por favor, verifique seu Email: <strong>{{ $route.query.email }}</strong>
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailReset'
})
</script>

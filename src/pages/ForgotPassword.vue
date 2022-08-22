<template>
  <q-page padding>
    <q-form class="window-height row justify-center items-center" @submit.prevent="handleForgotPassword()">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-card class="my-card q-gutter-y-md">
          <q-card-section>
            <p class="col-12 text-h6 text-center">
              <q-btn color="primary" rounded icon="home"/>
            </p>
            <q-input
              label="Email"
              v-model="email"
              outlined
              rounded
              lazy-rules
              dense
              type="email"
              :rules="[ val => val && val.length > 0 || 'Campo obrigatorio']"
            >
            </q-input>
            <q-btn
              label="Enviar"
              color="primary"
              class="full-width"
              rounded
              type="submit"
            >
            </q-btn>
            <q-btn
              label="Voltar"
              color="primary"
              class="full-width"
              flat
              rounded
              :to="{ name: 'login' }"
            >
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const router = useRouter()
    const { sendPasswordRestEmail } = useAuthUser()
    const $q = useQuasar()

    const email = ref('')

    const handleForgotPassword = async () => {
      try {
        await sendPasswordRestEmail(email.value)
        router.push({ name: 'forgotSucess', query: { email: email.value } })
      } catch (error) {
        $q.notify({ message: error.message, icon: 'cancel', color: 'negative', position: 'top' })
      }
    }

    return {
      email,
      handleForgotPassword
    }
  }
})
</script>

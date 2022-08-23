<template>
  <q-page padding>
    <q-form class="window-height row justify-center items-center" @submit.prevent="handlePasswordReset()">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-card class="my-card q-gutter-y-md">
          <q-card-section>
            <p class="col-12 text-h5 text-center"> Resetar Senha </p>
              <q-input
                label="Nova senha"
                v-model="password"
                lazy-rules
                outlined
                dense
                rounded
                :rules="[val => (val && val.length >= 6) || 'Senha obrigatória!']"
              />

              <div class="full-width q-pt-md q-gutter-y-sm">
                <q-btn
                  label="Enviar nova senha"
                  color="primary"
                  class="full-width"
                  rounded
                  type="submit"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
// import useNotify from 'src/composables/UseNotify'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'PageResetPassword',
  setup () {
    const { resetPassword } = useAuthUser()
    // const { notifyError, notifySuccess } = useNotify()
    const router = useRouter()
    const route = useRoute()
    const token = route.query.token
    const password = ref('')
    const handlePasswordReset = async () => {
      try {
        await resetPassword(token, password.value)
        // notifySuccess('Senha resetada com sucesso!')
        router.push({ name: 'login' })
      } catch (error) {
        // notifyError(error.message)
      }
    }
    return {
      password,
      handlePasswordReset
    }
  }
})
</script>

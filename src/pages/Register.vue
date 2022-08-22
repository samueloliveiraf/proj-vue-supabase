<template>
  <q-page padding>
    <q-form class="window-height row justify-center items-center" @submit.prevent="hadleRegister()">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-card class="my-card q-gutter-y-md">
          <q-card-section>
            <p class="col-12 text-h6 text-center">
              <q-btn color="primary" rounded icon="home"/>
            </p>
            <q-input
              label="Nome"
              v-model="form.name"
              outlined
              rounded
              dense
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatorio']"
            >
            </q-input>
            <q-input
              label="Email"
              v-model="form.email"
              outlined
              rounded
              type="email"
              dense
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatorio']"
            >
            </q-input>
            <q-input
              label="Senha"
              v-model="form.password"
              outlined
              rounded
              dense
              lazy-rules
              :rules="[ val => val && val.length > 6 || 'Campo obrigatorio e precisa ter mais 6 carcteres' ]"
            >
            </q-input>
            <q-btn
              label="Cadastrar-se"
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
    const { register } = useAuthUser()
    const $q = useQuasar()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const hadleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'emailConfimation',
          query: { email: form.value.email }
        })
      } catch (error) {
        $q.notify({ message: 'Erro ao cadastrar-se', type: 'negative' })
      }
    }

    return {
      form,
      hadleRegister
    }
  }
})
</script>

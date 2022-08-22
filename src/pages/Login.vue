<template>
  <q-page padding>
    <q-form class="window-height row justify-center items-center" @submit.prevent="handleLogin()">
      <div class="col-md-4 col-sm-6 col-xs-10">
        <q-card class="my-card q-gutter-y-md">
          <q-card-section>
            <p class="col-12 text-h5 text-center">
              <q-btn color="primary" rounded icon="home"/>
            </p>
             <q-input
              label="Email"
              v-model="form.email"
              outlined
              rounded
              lazy-rules
              type="email"
              class="q-input"
              dense
              :rules="[ val => val && val.length > 0 || 'Campo obrigatorio']"
            >
            </q-input>
            <q-input
              label="Senha"
              v-model="form.password"
              outlined
              rounded
              class="q-input"
              dense
              lazy-rules
              type="password"
              :rules="[ val => val && val.length > 0 || 'Campo obrigatorio']"
            >
            </q-input>
            <q-btn
              label="Entrar"
              color="primary"
              class="full-width"
              rounded
              type="submit"
            >
            </q-btn>
            <q-btn
              label="Cadastrar-se"
              color="primary"
              class="full-width"
              flat
              rounded
              :to="{ name: 'register' }"
            >
            </q-btn>
            <q-btn
              label="Recuperar senha"
              color="primary"
              class="full-width"
              flat
              rounded
              :to="{ name: 'forgotPassword' }"
            >
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const router = useRouter()
    const { login, isLoggedIn } = useAuthUser()
    const $q = useQuasar()

    const form = ref({
      email: '',
      password: ''
    })

    onMounted(() => {
      if (isLoggedIn) {
        router.push({ name: 'home' })
      }
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        $q.notify({ message: 'Login efetuado com sucesso!', type: 'positive' })
        router.push({ name: 'home' })
      } catch (error) {
        if (error.message === 'Invalid login credentials') {
          $q.notify({ message: 'Por favor, entre com o email e senha corretos.', type: 'negative' })
        } else {
          $q.notify({ message: 'Login inválido', type: 'negative' })
        }
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>

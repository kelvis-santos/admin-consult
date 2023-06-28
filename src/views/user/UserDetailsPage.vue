<template>
  <v-toolbar>
    <v-toolbar-title>User Data</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="primary" to="/home">VOLTAR</v-btn>
  </v-toolbar>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-toolbar-title>{{ editUser ? 'Editar' : 'Cadastrar' }}</v-toolbar-title>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="firstname" :rules="nameRules" :counter="20" label="Primeiro Nome" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="lastname" :rules="nameRules" :counter="20" label="Ultimo Nome" required></v-text-field>
        </v-col>
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="birthDate" :rules="birthDateRules" label="Data de Nascimento" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="phone" :rules="phoneRules" label="Telefone" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="phone2" :rules="phoneRules" label="Telefone 2" required></v-text-field>
        </v-col>
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="zip" :rules="zipRules" label="CEP" @change="autoGetZipCodeData" required></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field v-model="number" :rules="numberRules" label="Numero" required></v-text-field>
        </v-col>

        <v-col cols="12" md="7">
          <v-text-field v-model="adress" :rules="adressRules" label="Endereco" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="city" :rules="cityRules" label="Cidade" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="state" :rules="stateRules" label="Estado" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="country" :rules="countryRules" label="Pais" required></v-text-field>
        </v-col>
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="password" :rules="passwordRule" label="Senha" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="password2" :rules="passwordRule" label="Confirmacao de senha" required></v-text-field>
        </v-col>
        <v-divider></v-divider>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col v-if="editUser" cols="12" md="3">
          <v-btn color="primary" @click="updateUser" >Salvar</v-btn>
        </v-col>
        <v-col v-else cols="12" md="3">
          <v-btn color="primary" @click="saveNewUser" >Salvar</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" :to="'/user'">Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-snackbar
    v-model="userUpdated"
    :timeout="2000"
    color="success"
    elevation="24"
  >
    User updated successfully!
  </v-snackbar>
</template>
<script>
import moment from "moment"
import api from '@/services/RestService.js';
import ZipCodeService from '@/services/ZipCodeService.js';

  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      userUpdated: false,
      birthDate: '',
      zip: '',
      number: '',
      adress: '',
      city: '',
      state: '',
      country: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is requred.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
      phoneRules: [
        value => {
          if (value) return true

          return 'Phone is requred.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Phone must be less than 10 characters.'
        },
      ],
      birthDateRules: [
        value => {
          if (value) return true

          return 'Birth Date is requred.'
        },
      ],
      numberRules: [
        value => {
          if (value) return true

          return 'Number is requred.'
        },
      ],
      adressRules: [
        value => {
          if (value) return true

          return 'Adress is requred.'
        },
      ],
      cityRules: [
        value => {
          if (value) return true

          return 'City is requred.'
        },
      ],
      stateRules: [
        value => {
          if (value) return true

          return 'State is requred.'
        },
      ],
      countryRules: [
        value => {
          if (value) return true

          return 'Country is requred.'
        },
      ],
      zipRules: [
        value => {
          if (value) return true

          return 'Zip is requred.'
        },
      ],
      password2: '',
      password: '',
      editUser: false
    }),

    mounted() {
      // call getUser when url has id
      if (this.$route.params.id) {
        this.getUser()
        this.editUser = true
      }
    },

    watch: {
      userUpdated() {
        setTimeout(() => {
          this.userUpdated = false
        }, 3000)
      },
    },

    computed: {
      // birthDate: {
      //   get() {
      //     return moment(this.$data.birthDate).format('DD/MM/YYYY')
      //   },
      //   set(value) {
      //     this.$data.birthDate = moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD')
      //   },
      // },
      phone2: {
        get() {
          return this.$data.phone2
        },
        set(value) {
          if (value) {
            this.$data.phone2 = value.replace(/\D/g, '')
          }
        },
      },
      phone: {
        get() {
          return this.$data.phone
        },
        set(value) {
          if (value) {
            this.$data.phone = value.replace(/\D/g, '')
          }
        },
      },
      passwordRule() {
        return [
          value => {
            if (value) return true

            return 'Password is requred.'
          },
          value => {
            if (value?.length >= 8) return true

            return 'Password must be at least 8 characters.'
          },
          // value => {
          //   if (value?.length <= 20) return true

          //   return 'Password must be less than 20 characters.'
          // },
          // value => {
          //   if (/(?=.*[a-z])/.test(value)) return true

          //   return 'Password must contain at least one lowercase letter.'
          // },
          // value => {
          //   if (/(?=.*[A-Z])/.test(value)) return true

          //   return 'Password must contain at least one uppercase letter.'
          // },
          // value => {
          //   if (/(?=.*[0-9])/.test(value)) return true

          //   return 'Password must contain at least one number.'
          // },
          // value => {
          //   if (/(?=.*[!@#$%^&*])/.test(value)) return true

          //   return 'Password must contain at least one special character.'
          // },
        ]
      },
    },

    methods: {
      async autoGetZipCodeData() {
        if (this.zip.length === 8) {
          const response = await ZipCodeService.getZipCode(this.zip)
          if (response) {
            this.adress = response.logradouro
            this.city = response.localidade
            this.state = response.uf
            this.country = response.country ?? 'Brasil'
          }
        }
      },
      getUser() {
        api.get(`/users/${this.$route.params.id}`).then((response) => {

          this.firstname = response.data.firstname
          this.lastname = response.data.lastname
          this.email = response.data.email
          this.birthDate = moment(response.data.birthDate).format("DD/MM/YYYY")
          this.phone = response.data.phone
          this.phone2 = response.data.phone2
          this.zip = response.data.zip
          this.number = response.data.number
          this.adress = response.data.adress
          this.city = response.data.city
          this.state = response.data.state
          this.country = response.data.country
        })
      },

      updateUser() {
        const user = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          birthDate: moment(this.birthDate).format('X'),
          phone: this.phone,
          phone2: this.phone2,
          zip: this.zip,
          number: this.number,
          adress: this.adress,
          city: this.city,
          state: this.state,
          country: this.country,
          password: this.password,
        }
        api.put(`/users/${this.$route.params.id}`, user).then((response) => {
          if ([201, 200, 203].includes(response.status)) {
            this.userUpdated = true
          }
        })
        .catch((error) => {
          this.userUpdated = false
          console.log(error)
        })
      },

      saveNewUser() {
        const user = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          birthDate: moment(this.birthDate).format('X'),
          phone: this.phone,
          phone2: this.phone2,
          zip: this.zip,
          number: this.number,
          adress: this.adress,
          city: this.city,
          state: this.state,
          country: this.country,
          password: this.password,
        }
        api.post(`/users`, user).then((response) => {
          if ([201, 200, 203].includes(response.status)) {
            this.userUpdated = true
            setTimeout(() => {
              this.$router.push('/user')
            }, 4000)
          }
        })
        .catch((error) => {
          this.userUpdated = false
          console.log(error)
        })
      }
    },
  }
</script>
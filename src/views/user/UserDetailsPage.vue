<template>
  <v-toolbar>
    <v-toolbar-title>User Data</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="primary" to="/home">VOLTAR</v-btn>
  </v-toolbar>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-toolbar-title>Editar</v-toolbar-title>
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
          <v-text-field v-model="zip" :rules="zipRules" label="CEP" required></v-text-field>
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
        <v-col cols="12" md="3">
          <v-btn color="primary">Salvar</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" :to="'/user'">Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import moment from "moment"

  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
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
    }),

    computed: {
      birthDate: {
        get() {
          return moment(this.$data.birthDate).format('DD/MM/YYYY')
        },
        set(value) {
          this.$data.birthDate = moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD')
        },
      },
      phone2: {
        get() {
          return this.$data.phone2
        },
        set(value) {
          this.$data.phone2 = value.replace(/\D/g, '')
        },
      },
      phone: {
        get() {
          return this.$data.phone
        },
        set(value) {
          this.$data.phone = value.replace(/\D/g, '')
        },
      },
      passwordRules() {
        return [
          value => {
            if (value) return true

            return 'Password is requred.'
          },
          value => {
            if (value?.length >= 8) return true

            return 'Password must be at least 8 characters.'
          },
          value => {
            if (value?.length <= 20) return true

            return 'Password must be less than 20 characters.'
          },
          value => {
            if (/(?=.*[a-z])/.test(value)) return true

            return 'Password must contain at least one lowercase letter.'
          },
          value => {
            if (/(?=.*[A-Z])/.test(value)) return true

            return 'Password must contain at least one uppercase letter.'
          },
          value => {
            if (/(?=.*[0-9])/.test(value)) return true

            return 'Password must contain at least one number.'
          },
          value => {
            if (/(?=.*[!@#$%^&*])/.test(value)) return true

            return 'Password must contain at least one special character.'
          },
        ]
      },
    }
  }
</script>
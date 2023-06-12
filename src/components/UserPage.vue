<template>
  <v-toolbar>
    <v-toolbar-title>User Data</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="primary" to="/home">VOLTAR</v-btn>
  </v-toolbar>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="firstname" :rules="nameRules" :counter="20" label="Primeiro Nome" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="lastname" :rules="nameRules" :counter="20" label="Ultimo Nome" required></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>
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
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="zip" :rules="zipRules" label="CEP" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="number" :rules="numberRules" label="Numero" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
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

        <v-col cols="12" md="3">
          <v-text-field v-model="password" :rules="passwordRules" label="Senha" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="password2" :rules="password2Rules" label="Confirmacao de senha" required></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
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
      phone: '',
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
    }),
  }
</script>
<template>
  <div class="login">
    <q-form
      v-if="!currentUser"
      @submit.prevent="logIn"
      class="q-gutter-md flex"
    >
      <q-input dark filled dense standout v-model="userInput" label="Usuario" />
      <q-input
        dark
        filled
        dense
        standout
        type="password"
        v-model="passInput"
        label="Contraseña"
      />
      <q-btn label="Log In" type="submit" color="primary" />
    </q-form>
    <q-form v-else @submit.prevent="logOut" class="q-gutter-md flex">
      <q-btn label="Log Out" type="submit" color="primary" />
    </q-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Login",

  data: function() {
    return {
      // userInput: "digivoro@gmail.com",
      // passInput: "asdf1234"
      userInput: null,
      passInput: null
    };
  },

  methods: {
    logIn: function() {
      this.$store.commit("USER_LOGIN", this.userInput);
      console.log("Current user:", this.currentUser);
      this.userInput = null;
      this.passInput = null;
      this.$router.push("/user");
    },
    logOut: function() {
      this.$store.commit("USER_LOGOUT");
      console.log("Current user:", this.currentUser);
      this.$router.push("/");
    }
  },

  computed: mapGetters(["currentUser"])
};
</script>

<style lang="scss" scoped></style>

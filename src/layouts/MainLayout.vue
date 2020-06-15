<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Desafío: Router & Auth Firebase
        </q-toolbar-title>

        <Login />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Login from "src/components/Login.vue";
export default {
  name: "MainLayout",

  components: {
    Login
  },

  data() {
    return {};
  }
};
</script>

<template>
  <q-page class="flex flex-center">
    <h1>USER: {{ currentUser }}</h1>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "User",
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>

<style lang="scss" scoped></style>

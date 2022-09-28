<script lang="ts">
import { defineComponent } from "vue";
// import type { User } from "../models/user";
// import CreateUser from "../UserMenuView.vue/CreateUser.vue";
import UserTableComponentVue from "@/components/UserComponents/UserTable-component.vue";

export default defineComponent({
  components: {
    UserTableComponentVue,
  },
});
</script>

<template>
  <h1>Select a User to Update:</h1>
  <UserTableComponentVue  />
</template>

<style></style>

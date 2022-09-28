<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <nav>
    <RouterLink to="/UserSettings/Create"> Create User</RouterLink>
    <RouterLink to="/UserSettings/Update"> Update User</RouterLink>
    <RouterLink to="/UserSettings/Delete"> Delete User</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>

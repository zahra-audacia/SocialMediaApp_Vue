<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { User } from "../../models/user";

export default defineComponent({
  props: {
    users: {
      type: [] as PropType<Array<User>>,
      required: true,
    },
  },
});
</script>

<template>
  <table>
    <thead>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Date of Birth</th>
      <th>Address Line 1</th>
      <th>Address Line 2</th>
      <th>City</th>
      <th>County</th>
      <th>Phone Number</th>
      <th>Password</th>
      <th>Profile Pic (URL)</th>
      <th>Background Pic (URL)</th>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <Td>{{ user.dateOfBirth }}</Td>
        <Td>{{ user.address1 }}</Td>
        <td>{{ user.address2 }}</td>
        <Td>{{ user.city }}</Td>
        <td>{{ user.city }}</td>
        <td>{{ user.county }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.pfp }}</td>
        <td>{{ user.bgpic }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>

<script lang="ts">
import { defineComponent } from "vue";
import CreateUserForm from "../../components/UserComponents/CreateUserForm.vue";
import UserTableComponentVue from "@/components/UserComponents/UserTable-component.vue";
import type { User } from "@/models/user";
import { UserService } from "@/services/user.service";

export default defineComponent({
  components: {
    CreateUserForm,
    UserTableComponentVue,
  },
  data() {
    return {
      showUserTable: true,
      users: [] as User[],
      service: null as UserService | null,
    };
  },
  async created() {
    this.service = new UserService();
    await this.getAllUsers();
  },
  methods: {
    addUserToTable(newUser: User): void {
      this.users.push(newUser);
      this.$emit("showUsers", this.users);
    },
    async getAllUsers() {
      this.service?.all().then((response) => (this.users = response));
    },
  },
});
</script>

<template>
  <CreateUserForm @addUser="addUserToTable" />
  <UserTableComponentVue v-if="showUserTable" :users="users" />
</template>

<style></style>

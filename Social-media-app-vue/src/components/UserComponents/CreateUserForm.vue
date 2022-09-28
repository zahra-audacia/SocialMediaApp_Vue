<script lang="ts">
import { defineComponent } from "vue";
import { User } from "../../models/user";

export default defineComponent({
  data() {
    return {
      userTableData: [] as User[],

      user: new User(),
    };
  },
  methods: {
    onSubmit(): void {
      this.$emit("addUser", this.user);
    },
  },
});
</script>

<template>
  <p>
    <label>First Name</label> <input type="text" v-model="user.firstName" />
  </p>
  <p><label>Last Name</label> <input type="text" v-model="user.lastName" /></p>

  <p><label>Username</label> <input type="text" v-model="user.username" /></p>
  <P><label>Email</label> <input type="email" v-model="user.email" /></P>

  <p>
    <label>Date of Birth</label>
    <input type="date" v-model="user.dateOfBirth" />
  </p>
  <p>
    <label>Address line 1</label> <input type="text" v-model="user.address1" />
    <label>Address line 2</label> <input type="text" v-model="user.address2" />
  </p>

  <p>
    <label>City/Town</label> <input type="text" v-model="user.city" />
    <label>County</label> <input type="text" v-model="user.county" />
  </p>

  <p><label>Postcode</label> <input type="text" v-model="user.postcode" /></p>
  <P
    ><label>Phone number</label> <input type="number" v-model="user.phone" />
  </P>
  <p>
    <label>Set a password: </label><input type="text" v-model="user.password" />
  </p>
  <p>
    <label>Upload Profile Picture (as a URL)</label
    ><input type="text" v-model="user.pfp" />
  </p>
  <p>
    <label>Upload Background Picture (as a URL)</label
    ><input type="text" v-model="user.bgpic" />
  </p>
  <p><button type="button" @click="onSubmit">Submit</button></p>
</template>

<style></style>

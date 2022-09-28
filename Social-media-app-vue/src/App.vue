<script>
export default {
  data() {
    return {
      users: [],
    };
  },

  methods: {},
  created() {},
};
</script>

<template>
  <header>
    <title>Social Media App</title>
  </header>
  <nav>
    <RouterLink to="/"> Home </RouterLink>
    <RouterLink to="/UserSettings"> User Settings </RouterLink>
  </nav>
  <RouterView />
  <body></body>
</template>

<style>
h1 {
  text-align: center;
}
</style>

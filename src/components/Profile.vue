<template>
  <div class="container">
    <header class="jumbotron">
      <h4>
        <strong>Username: {{ currentUser.username }}</strong>
      </h4>
    </header>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
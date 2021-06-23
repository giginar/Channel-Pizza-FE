
<template>
  <div class="vue-tempalte">
    <form name="form" @submit.prevent="handleRegister">
      <div v-if="!successful">
        <b></b>

        <div class="form-group">
          <label for="username">Username</label>
          <input
            name="username"
            type="text"
            class="form-control form-control-lg"
            v-model="user.username"
            
          />
        </div>

        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            
            type="text"
            class="form-control form-control-lg"
            v-model="user.firstName"
            name="firstName"
          />
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            class="form-control form-control-lg"
            v-model="user.lastName"
            name="lastName"
          
          />
        </div>

        <div class="form-group">
          <label for="email">Email address</label>
          <input
            name="email"
            type="email"
            class="form-control form-control-lg"
            v-model="user.email"
          
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            name="password"
            type="password"
            class="form-control form-control-lg"
            v-model="user.password"
         
          />
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input
            name="address"
            type="text"
            class="form-control form-control-lg"
            v-model="user.address"
          
          />
        </div>

        <div>
          <label for="postalCode">Postal Code</label>
          <b-form-input
            list="my-list-id"
            v-model="user.postalCode"
            @input="fetchAPI(user.postalCode)"
          ></b-form-input>
          <datalist id="my-list-id" autocomplete="off">
            <option 
              v-for="option in options"
              :key="option.id"
            >
              {{ option }}
            </option>
          </datalist>
        </div>

        <br />

        <div class="form-group">
          <button class="btn btn-primary btn-block">Sign Up</button>
        </div>

        <p class="forgot-password text-right">
          Already registered
          <router-link to="/login">Sign in</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import User from "../models/user";

import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      user: new User("", "", "", "", "", "", ""),
      submitted: false,
      successful: false,
      message: "",
      options: [],
      
    };
  },
  components: {},
  created() {
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/login");
    }
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.submitted = true;
      this.$store.dispatch("auth/register", this.user).then(
            (data) => {
              this.message = data.message;
              this.successful = true;
            },
            (error) => {
              this.message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
                console.log(error.message);
              this.successful = false;
            }
          );
    },
    /**
    Getting postal codes with given API
     */
    async fetchAPI(query) {
      this.options = [];
      await axios
        .get(`https://api.postcodes.io/postcodes/${query}/autocomplete`)
        .then((response) => (this.options = response.data.result));
      console.log(this.options);
    },
  },
};
</script>



<template>
  <div class="vue-tempalte">
    <form>
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control form-control-lg" v-model="form.firstName"/>
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control form-control-lg" v-model="form.lastName"/>
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" v-model="form.email"/>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" v-model="form.password"/>
      </div>

      <div class="form-group">
        <label>Address</label>
        <input type="text" class="form-control form-control-lg" v-model="form.address"/>
      </div>

      <div>
        <label>Postal Code</label>
        <b-form-input list="my-list-id" v-model="query" @input="fetchAPI" ></b-form-input>
        <datalist id="my-list-id" autocomplete="off">
          <option v-for="option in options" :key="option.id">{{ option }}</option>
        </datalist>
      </div>

      <br>

      <button type="submit" class="btn btn-dark btn-lg btn-block" @keypress="submit">
        Sign Up
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link to="/login">Sign in</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "postal",
  data() {
    return {
      form:{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        postalCode: '',
      },
      options: [],
      query: "",
    };
  },
  components: {},
  created() {
    this.fetchAPI();
    console.log(this.options);
  },
  methods: {
    /**
    Getting postal codes with given API
     */
    async fetchAPI() {
      this.options = [];
      await axios.get(`https://api.postcodes.io/postcodes/${this.query}/autocomplete`).then(response => (this.options = response.data.result));
      console.log(this.options);
    },
    submit() {
      axios.post('https://localhost:8080/api/v1/registration', this.form)
      .then((response) => {this.form = response.bind});
      console.log(this.form);
    }
  },
};
</script>


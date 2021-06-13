<template>
  <div class="pizzas">
    <div>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="query"
          @keypress="fetchPizza"
        />
      </div>
      <div v-if="is_loading">
        <b-button variant="primary" disabled>
          <b-spinner small type="grow"></b-spinner>
          Loading...
        </b-button>
      </div>
      <div v-for="p in this.pizzas" :key="p.id">
        <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="p.image"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="p.name">
                <b-card-text>
                  Name: {{ p.name }}<br />
                  Price: {{ p.price }} TRY<br />
                  Ingredients:
                  <ul id="ingredients">
                    <li v-for="p in p.ingredients" :key="p.id">
                      {{p}}
                    </li>
                  </ul>
                </b-card-text>
                <button class="btn btn-primary" type="submit">Button</button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Pizzas",
  data() {
    return {
      query: "",
      pizzas: [],
      is_loading: false,
    };
  },
  components: {},
  created() {
    this.is_loading = true;
    this.fetchAllPizzas();
  },
  methods: {
    /**
     * this method used for searching the pizzas.
     */
    async fetchPizza(e) {
      if (e.key == "Enter") {
        this.is_loading = true;
        this.pizzas = [];
        if (this.query != "") {
          await axios.get(`http://localhost:9002/pizzas/all/ingredients/${this.query}`)
          .then((response) => (this.pizzas = response.data));
          this.is_loading = false;
        } else {
          this.fetchAllPizzas();
        }
      }
    },
    /**
     * This method gets all the pizzas from the database using BE.
     */
    async fetchAllPizzas() {
      await axios.get(`http://localhost:9002/pizzas/getAllPizzas`)
      .then((response) => (this.pizzas = response.data));
      this.is_loading = false;
    },
  },
};
</script>

<style>
.pizzas {
  margin-top: 350px;
}
</style>


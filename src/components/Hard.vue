<template>
  <div class="hard">
    <form>
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
                  Price: {{ p.price }} TRY<br />
                  Ingredients:
                  <ul id="ingredients">
                    <li v-for="i in p.ingredients" :key="i.id">
                      {{i}}
                    </li>
                  </ul>
                  <b-button @click="showMessage">Order Pizza</b-button>
                  <b-modal v-model="modalShow"> Your order is on the way to your address! </b-modal>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "Hard",
  data() {
    return {
      url_base: "",
      query: "",
      pizzas: [],
      is_loading: false,
      modalShow: false
    };
  },
  components: {},
  created() {
    this.is_loading = true;
    this.fetchAllPizzas();
  },
  methods: {
    async fetchPizza(e) {
      if (e.key == "Enter") {
        this.is_loading = true;
        if (this.query != "") { 
          this.pizzas = [
        {
          id: "60b93c52e37284117144f246",
          name: "Farm House",
          price: 40,
          ingredients: ["Mozarella", "Salami", "Mushrooms"],
          image:
            "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/ciftlik-evi.jpg",
        },
        {
          id: "60b93c52e37284117144f247",
          name: "Veg Lover",
          price: 50,
          ingredients: ["Mozarella", "Mushrooms", "Onion", "Pepper", "Corn"],
          image:
            "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/sebzesever.jpg",
        },
        {
          id: "60b93c52e37284117144f248",
          name: "Four Seasons",
          price: 80,
          ingredients: [
            "Mozarella",
            "Tomatoes",
            "Mushrooms",
            "Olives",
            "Pepperoni",
          ],
          image:
            "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/4-mevsim.jpg",
        },
      ];
          this.is_loading = false;
        } else {
          this.fetchAllPizzas();
        }
      }
    },
    async fetchAllPizzas() {
      this.pizzas = [
        {
          id: "60b93c52e37284117144f246",
          name: "Farm House",
          price: 40,
          ingredients: ["Mozarella", "Salami", "Mushrooms"],
          image:
            "images/ciftlik-evi.jpg",
        },
        {
          id: "60b93c52e37284117144f247",
          name: "Veg Lover",
          price: 50,
          ingredients: ["Mozarella", "Mushrooms", "Onion", "Pepper", "Corn"],
          image:
            "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/sebzesever.jpg",
        },
        {
          id: "60b93c52e37284117144f248",
          name: "Four Seasons",
          price: 80,
          ingredients: [
            "Mozarella",
            "Tomatoes",
            "Mushrooms",
            "Olives",
            "Pepperoni",
          ],
          image:
            "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/4-mevsim.jpg",
        },
      ];
      console.log(this.pizzas);
      this.is_loading = false;
    },
    showMessage() {
      this.modalShow = !this.modalShow;
    }
  },
};
</script>

<style>
.hard {
  margin-top: 350px;
}
</style>


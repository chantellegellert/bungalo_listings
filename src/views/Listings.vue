<template>
  <div>
    <div v-if="!userName || userName === ''">
      You must log in first.
      <router-link to="/">
        <button class="paginationButton bColorRegular">Go Login Page</button>
      </router-link>
    </div>

    <div v-if="userName && userName !== ''">
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="city">Change City</label>
            <md-select
              @md-selected="populateListings()"
              v-model="cityName"
              name="cityname"
              id="cityname"
            >
              <md-option value="boston">Boston</md-option>
              <md-option value="chicago">Chicago</md-option>
              <md-option value="los-angeles">Los Angeles</md-option>
              <md-option value="new-york-city">New York City</md-option>
              <md-option value="philadelphia">Philadelphia</md-option>
              <md-option value="portland">Portland</md-option>
              <md-option value="san-diego">San Diego</md-option>
              <md-option value="seattle">Seattle</md-option>
              <md-option value="washington-dc">Washington DC</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          Filters TBD
          <!-- <md-field>
            <label for="movies">Filters</label>
            <md-select
              v-model="selectFilters"
              name="movies"
              id="movies"
              multiple
            >
              <md-option value="master-bedroom">Master Bedroom</md-option>
              <md-option value="private-bathroom">Private Bathroom</md-option>
              <md-option value="pet-friendly">Pet Friendly</md-option>
              <md-option value="washer">Washer</md-option>
              <md-option value="dryer">Dryer</md-option>
            </md-select>
          </md-field> -->
        </div>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner
          md-mode="indeterminate"
          :md-stroke="2"
        ></md-progress-spinner>
      </div>

      <div class="md-layout" style="margin: 20px" v-if="!loading">
        <Listing
          class="listing-layout-item md-layout-item md-size-30 md-large-30 md-medium-size-30 md-medium-40 md-small-size-45 md-xsmall-size-100"
          v-for="l in listings"
          :key="l.id"
          :listing="l"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";

import { getListings } from "../common/api";
import { IListing } from "../common/interfaces";

import Listing from "../components/Listing.vue";
@Component({
  components: {
    Listing
  }
})
export default class Listings extends Vue {
  private listings: IListing[] = [];
  loading = true;
  cityName = "seattle";
  selectFilters = [];
  amenitie_filter = [
    "master-bedroom",
    "private-bathroom",
    "pet-friendly",
    "washer",
    "dryer"
  ];

  get userName() {
    return this.$store.state.userName;
  }

  constructor() {
    super();
  }

  created() {
    this.populateListings();
  }

  mounted() {}

  populateListings() {
    getListings(this.cityName)
      .then(result => {
        this.listings = result.results;
        this.loading = false;
      })
      .catch(error => {
        // handle error
        console.log(error);
        this.loading = false;
      });
  }
}
</script>

<style lang="less" scoped>
.md-layout {
  margin: 20px;
}
.listing-layout-item {
  padding: 16px;
  margin: 10px;
  border-bottom: 3px solid black;
}
</style>

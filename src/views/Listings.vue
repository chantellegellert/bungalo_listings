<template>
  <div>
    <div class="content" v-if="!userName || userName === ''">
      You must log in first.
      <router-link to="/">
        <button class="paginationButton bColorRegular">Go Login Page</button>
      </router-link>
    </div>
    <div class="content" v-if="userName && userName !== ''">
      <Listing v-for="l in listings" :key="l.id" :listing="l" />
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

  get userName() {
    return this.$store.state.userName;
  }

  constructor() {
    super();
  }

  created() {
    getListings().then(result => {
      this.listings = result.results;
    });
  }

  mounted() {}
}
</script>

<style lang="less" scoped>
</style>

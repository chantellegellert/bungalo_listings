<template>
  <div>
    <div class="content" v-if="!userName || userName === ''">
      You must log in first.
      <router-link to="/">
        <button class="paginationButton bColorRegular">Go Login Page</button>
      </router-link>
    </div>
    <div class="content" v-if="userName && userName !== ''">
      {{ listings }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";

import { getListings } from "../common/api";
import { IListing } from "../common/interfaces";

@Component({
    components: {

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

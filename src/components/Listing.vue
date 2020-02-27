<template>
  <v-card class="mx-auto" max-width="344">
    <Images v-if="showImages" :images="listing.images" />
    <div class="no_picture_box" v-if="!showImages"></div>

    <div class="rooms_left_container">
      <span class="rooms_left"
        >{{ listing.available_room_count }} of {{ listing.total_room_count }}
        {{ listing.total_room_count | pluralize }}
        available today
      </span>
    </div>

    <div class="headline">{{ listing.headline }}</div>

    <v-card-actions>
      <div class="price"> {{ listing.room_prices }} </div>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <Amenities :amenities="listing.amenities" />
          {{ listing.room_amenities.length > 0 ? listing.room_amenities : '' }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IListing } from "../common/interfaces";

import Amenities from "./Amenities.vue";
import Images from "./ListingImages.vue";

@Component({
  components: {
    Amenities,
    Images
  },
  filters: {
    pluralize: (n: number) => (n === 1 ? "room" : "rooms")
  }
})
export default class ListingComponent extends Vue {
  @Prop() private listing: IListing;
  show = false;
  constructor() {
    super();
  }

  get showImages() {
    return this.listing.images && this.listing.images.length > 0;
  }

  created() {}

  mounted() {}

  destroyed() {}
}
</script>

<style scoped>
.no_picture_box {
  background-color: grey;
  height: 250px;
}
.rooms_left {
  display: inline-block;
  padding: 3px 5px;
  border: 1px solid #6d6867;
}
.rooms_left_container {
  text-align: left;
  padding-left: 0px;
  padding-top: 1rem;
  font-weight: 700;
  color: #0f0d0d;
  font-size: 13px;
}
.headline {
  font-size: 15px !important;
  padding-left: 0px;
  text-align: left;
}
.price {
  font-size: 15px !important;
  padding-left: 0px;
  text-align: left;
}
.v-card__actions{
    padding:0px;
}
</style>

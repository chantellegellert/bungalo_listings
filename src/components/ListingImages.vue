<template>
  <div>
    <v-app>
    <v-carousel>
      <v-carousel-item
        v-for="image in images"
        :key="image.order"
        :src="image.sm_url"
      ></v-carousel-item>
    </v-carousel>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { IImage } from "../common/interfaces";

@Component
export default class ListingImagesComponent extends Vue {
  @Prop() private images: IImage[];

  constructor() {
    super();
  }

  created() {}

  mounted() {}

  destroyed() {}
}
</script>

<style lang="less" scoped>
</style>

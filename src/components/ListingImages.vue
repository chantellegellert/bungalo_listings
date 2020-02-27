<template>
  <div>
    <v-carousel style="height: 250px;">
      <v-carousel-item v-for="image in images" :key="image.order">
        <v-img :src="image.sm_url" height="250px"></v-img>
      </v-carousel-item>
    </v-carousel>
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

<style lang="less" scoped></style>

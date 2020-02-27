<template>
  <div>
    <div v-for="(a, i) in display_icons" :key="i">
      <md-icon class="amenities">{{a}}</md-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class RoomAmenitiesComponent extends Vue {
  @Prop() private amenities: string[];
  display_icons: string[] = [];
  created() {
    for (let icon of this.amenities) {
      switch (icon) {
        case "Private Bath":
          this.display_icons.push("bathtub");
          break;
        case "Master Bedroom":
          this.display_icons.push("king_bed");
          break;
        default:
        // code block
      }
    }
  }
}
</script>

<style lang="less" scoped>
.amenities {
  float: left;
}
</style>

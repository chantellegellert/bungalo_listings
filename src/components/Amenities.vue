<template>
  <div>
    <div v-for="(a, i) in display_icons" :key="i">
      <md-icon class="amenities">{{ a }}</md-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IAmenity } from "../common/interfaces";
@Component
export default class AmenitiesComponent extends Vue {
  @Prop() private amenities: IAmenity[];
  display_icons: string[] = [];
  created() {
    for (let icon of this.amenities) {
      switch (icon.display_name) {
        case "AC":
          this.display_icons.push("ac_unit");
          break;
        case "Dishwasher":
          this.display_icons.push("waves");
          break;
        case "Dryer":
          this.display_icons.push("local_laundry_service");
          break;
        case "Washer":
          this.display_icons.push("local_laundry_service");
          break;
        case "Pet Friendly":
          this.display_icons.push("pets");
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

<template>
    <div>
        <div>Id: {{ listing.id }}</div>

        <div>Headline: {{ listing.headline }}</div>

        <div>
            Rooms: {{ listing.available_room_count }} /
            {{ listing.total_room_count }}
        </div>
        <Amenities :amenities="listing.amenities" />
        <Images v-if="showImages" :images="listing.images" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IListing } from "../common/interfaces";

import Amenities from "./Amenities.vue";
import Images from "./ListingImages.vue";

@Component({
    components: {
        Amenities, Images
    }
})
export default class ListingComponent extends Vue {
    @Prop() private listing: IListing;

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

<style lang="less" scoped>
</style>

<template>
    <div>
        <div v-for="(a,i) in amenities" :key="i"> 
            {{ a.display_name }}, {{ a.type }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IAmenity } from "../common/interfaces";
@Component
export default class AmenitiesComponent extends Vue {
    @Prop() private amenities: IAmenity[];
}
</script>

<style lang="less" scoped>
</style>

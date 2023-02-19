<template>
  <div class="parent">
    <p>View = Parent Component</p>
    <singlton-kid1></singlton-kid1>
    <singlton-kid2></singlton-kid2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SingltonKid1 from "../components/FirstKid.vue";
import SingltonKid2 from "../components/SecondKid.vue";
import { provideInheritance } from "../composables/useInheritance";

export default defineComponent({
  components: { SingltonKid1, SingltonKid2 },
  setup() {
    // uncomment when using Inheritance Composable
    // provideInheritance();
  },
});
</script>
<style lang="postcss" scoped>
.parent {
  @apply h-28 w-28 flex justify-center bg-blue-200 flex-col items-center;
}
</style>

<template>
  <div class="parent">
    <p>View = Parent Component: {{""}} clicks</p>
    <first-kid></first-kid>
    <second-kid></second-kid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FirstKid from "../components/FirstKid.vue";
import SecondKid from "../components/SecondKid.vue";
import { useSinglton } from "../composables/useSinglton";
import { useInheritance } from "../composables/useInheritance";
import { useNewInstance } from "../composables/useNewInstance";
import { provideInheritance } from "../composables/useInheritance";

export default defineComponent({
  components: { FirstKid, SecondKid },
  setup() {
    // const singlton = useSinglton();
    // const inheritance = useInheritance();
    // uncomment when using Inheritance Composable
    // provideInheritance();
    return {
      // singlton
      // inheritance
    }
  },
});
</script>
<style lang="postcss" scoped>
.parent {
  @apply h-28 w-28 flex justify-center bg-blue-200 flex-col items-center;
}
</style>

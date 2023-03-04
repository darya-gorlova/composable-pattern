<template>
  <div class="external-component">
    <p @click="">{{"External Component: " + "" + " clicks"}}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useSinglton } from "../composables/useSinglton";
import { useInheritance } from "../composables/useInheritance";
import { useNewInstance } from "../composables/useNewInstance";
export default defineComponent({
  setup() {
    // const singlton = useSinglton();
    // const inheritance = useInheritance();
    // const newInstance = useNewInstance();
    return {
      // singlton,
      // inheritance,
      // newInstance,
    };
  },
});
</script>
<style lang="postcss" scoped>
.external-component {
  @apply flex justify-center items-center;
}
p {
  @apply bg-blue-100 cursor-pointer;
}
p:hover {
  @apply border-solid border-cyan-800;
}
</style>

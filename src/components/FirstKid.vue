<template><p @click="">{{"First Kid Component: " + "" + " clicks"}}</p></template>
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
p {
  @apply bg-red-200 cursor-pointer;
}
p:hover {
  @apply border-solid border-cyan-800;
}
</style>

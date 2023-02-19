<template>
  <div class="page">
    <div class="title-group">
      <p class="title">
        This is a page. You can click on any of three available components:
      </p>
      <p class="counter">{{ singlton.counter.value + " times clicked" }}</p>
    </div>

    <div class="page-external-component">
      <external-component></external-component>
    </div>
    <div class="page-view"><singlton-view></singlton-view></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SingltonView from "../views/View.vue";
import ExternalComponent from "../components/ExternalComponent.vue";
import { useSinglton } from "../composables/useSinglton";
import { useInheritance } from "../composables/useInheritance";
import { useNewInstance } from "../composables/useNewInstance";
export default defineComponent({
  components: { SingltonView, ExternalComponent },
  setup() {
    const singlton = useSinglton();
    // const inheritance = useInheritance();
    // const newInstance = useNewInstance();
    return {
      singlton,
      // inheritance,
      // newInstance
    };
  },
});
</script>
<style lang="postcss" scoped>
.page {
  @apply h-screen w-full bg-yellow-200 flex justify-center items-center relative;
}
.title-group {
  @apply absolute top-0 left-0 flex;
}
.page-external-component {
  @apply absolute top-80 left-0;
}
</style>

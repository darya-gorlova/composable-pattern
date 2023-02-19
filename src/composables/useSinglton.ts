import { ref, Ref } from "vue";

type SingltonComposable = {
  counter: Ref<number>;
  click(): void;
};

const singlton: SingltonComposable = {
  counter: ref(0),
  click() {
    this.counter.value += 1;
  },
};

export function useSinglton(): SingltonComposable {
  return singlton;
}

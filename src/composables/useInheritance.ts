import { provide, inject, ref } from "vue";

const INHERITANCE_SYMBOL = Symbol("inheritance");

export function provideInheritance() {
  const inheritance = {
    counter: ref(0),
    click() {
      this.counter.value += 1;
    },
  };

  provide(INHERITANCE_SYMBOL, inheritance);
}

export function useInheritance() {
  const inheritance = inject(INHERITANCE_SYMBOL);
  if (!inheritance) {
    throw new Error("Inheritance composable not provided");
  }
  return inheritance;
}

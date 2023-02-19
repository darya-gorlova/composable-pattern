import { ref } from "vue";

export function useNewInstance() {
  const newInstance = {
    counter: ref(0),
    click() {
      this.counter.value += 1;
    },
  };

  return newInstance;
}

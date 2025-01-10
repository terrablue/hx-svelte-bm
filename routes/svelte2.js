import view from "primate/handler/view";

let count;

export default {
  get() {
    count = 0;
    return view("index2.svelte", { count });
  },
  post() {
    return { count: count++ };
  }
}

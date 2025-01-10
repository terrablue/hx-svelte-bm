import view from "primate/handler/view";

let count;

export default {
  get() {
    count = 0;
    return view("index.svelte", { count });
  },
  post() {
    count++;
    return view("index.svelte", { count });
  }
}

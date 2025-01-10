import view from "primate/handler/view";

let count;

export default {
  get() {
    count = 0;
    return view("index.htmx", { count });
  },
  post() {
    count++;
    return view("count.htmx", { count });
  }
}

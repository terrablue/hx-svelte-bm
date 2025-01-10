import view from "primate/handler/view";

let count;

export default {
  get() {
    count = 0;
    return view("index2.htmx", { count });
  },
  post() {
    count++;
    return new Response(count, {
      "Content-Type": "application/html",
    });
  }
}

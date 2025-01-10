<script>
  import { onMount } from "svelte";
  let count = 0;

  onMount(async () => {
    const t0 = performance.now();
    for (let i = 0; i < 1000; i++) {
     const response = await fetch("http://localhost:6161/svelte2", {
       method: "POST",
     });
     count = (await response.json()).count;
    }
    const t1 = performance.now();
    console.log(`took ${t1 - t0} milliseconds.`);
  });
</script>
<h1>Svelte</h1>
<div id="count">{count}</div>

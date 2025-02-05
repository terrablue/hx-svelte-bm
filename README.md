To run the app, run `npm install && npx primate`.

To reproduce, run

```js
(async rounds => {
  const sleep = () => new Promise(resolve => setTimeout(resolve));

  const check = async i => {
    if (i === +document.getElementById("count").innerText) {
      document.getElementById("next").click();
      return;
    }
    await sleep();
    return check(i);
  };

  const t0 = performance.now();
  for (let i = 0; i < rounds; i++) await check(i);
  const t1 = performance.now();
  console.log(`took ${t1 - t0} milliseconds`);
})(1000);
```

In your browser console after loading `http://localhost:6161/htmx`
`http://localhost:6161/svelte`, `http://localhost:6161/svelte2` and
`http://localhost:6161/htmx2` (in the latter two, the benchmark is within the
code).

## Results (Chromium 131.0.6778.204 Arch Linux)

* HTMX: 11617.9 ms
* HTMX 2: 10565.7 ms (0.91 faster)
* Svelte: 17847.8 ms (1.53 slower)
* Svelte 2: 7976.3 ms (0.68 faster)

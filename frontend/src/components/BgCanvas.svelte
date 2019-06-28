<script>
  import { onMount } from "svelte";

  // Note : document.documentElement is only available onMount(), but if we
  // export and bind {width} and {height} it doesn't draw - not sure why.
  onMount(() => {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let gutter = 16;
    let x = 0;
    let canvas = document.getElementById("bg-canvas");
    let context = canvas.getContext("2d");

    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    // Workaround the half-pixel default.
    // See https://stackoverflow.com/a/13879402
    context.translate(0.5, 0.5);

    for (x = 0; x < width; x += gutter) {
      context.moveTo(x, 0);
      context.lineTo(x, height);
    }
    for (x = 0; x < height; x += gutter) {
      context.moveTo(0, x);
      context.lineTo(width, x);
    }

    context.strokeStyle = "#EEE";
    context.stroke();
  });
</script>

<style>
  #bg-canvas {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    /* position: fixed; */
    top: 0;
    left: 0;
    z-index: -99;
  }
</style>

<canvas id="bg-canvas" />

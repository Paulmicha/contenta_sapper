<script>
  import { onMount } from "svelte";

  onMount(() => {
    let x = 0;
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    let gutter = 16;
    let canvas = document.getElementById("bg-canvas");
    let context = canvas.getContext("2d");

    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);

    // Workaround the half-pixel default.
    // See https://stackoverflow.com/a/13879402
    context.translate(0.5, 0.5);

    for (x = 0; x < w - gutter; x += gutter) {
      context.moveTo(x + gutter, gutter);
      context.lineTo(x + gutter, h + gutter);
    }

    for (x = 0; x < h - gutter; x += gutter) {
      context.moveTo(gutter, x + gutter);
      context.lineTo(w + gutter, x + gutter);
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

<style>
  .icon {
    --icon-size: theme("spacing.5");
    --icon-ratio: 2.5;
    --icon-spacing: theme("spacing.2");
    --icon-stroke-width: theme("spacing.1");

    min-width: var(--icon-size);
    min-height: var(--icon-size);
  }

  .icon-menu,
  .icon-menu::before,
  .icon-menu::after {
    position: absolute;
    left: 0;
    width: var(--icon-size);
    height: var(--icon-stroke-width);
    background-color: currentColor;
  }

  .icon-menu::before,
  .icon-menu::after {
    content: "";
  }

  .icon-menu {
    margin-top: calc(
      var(--icon-size) / var(--icon-ratio) - var(--icon-stroke-width) / 2
    );
  }

  .icon-menu:before {
    top: calc(-1 * var(--icon-size) / var(--icon-ratio));
  }

  .icon-menu:after {
    top: calc(var(--icon-size) / var(--icon-ratio));
  }
</style>

<div class="relative flex icon" aria-hidden="true">
  <div class="icon-menu" />
</div>

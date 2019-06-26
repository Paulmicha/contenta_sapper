<style>
  .icon {
    min-width: theme("spacing.12");
    min-height: theme("spacing.12");
  }
  .icon-menu {
    color: #000;
    position: absolute;
    margin-left: 2px;
    margin-top: 10px;
    width: 17px;
    height: 1px;
    background-color: currentColor;
  }

  .icon-menu:before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 17px;
    height: 1px;
    background-color: currentColor;
  }

  .icon-menu:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 17px;
    height: 1px;
    background-color: currentColor;
  }
</style>

<div class="relative flex icon" aria-hidden="true">
  <div class="icon-menu" />
</div>

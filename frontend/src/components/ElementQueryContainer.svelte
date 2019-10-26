<style>

  /**
  * Prevent FOUC with fallback for disabled JS.
  *
  * See https://github.com/philipwalton/responsive-components/blob/master/app/templates/_resize-observer.html
  */

  @keyframes responsive-container-nojs {
    from {opacity: 0} to {opacity: 1}
  }

  [data-observe-resizes] {
    display: block;
    opacity: 0;
    transition: opacity .2s ease-in-out;
    animation: .5s ease-in-out 2s 1 forwards responsive-container-nojs;
  }

  [data-observe-resizes][data-observing] {
    opacity: 1;
    animation: none;
  }

</style>

<noscript>
  <style>
    [data-observe-resizes] {
      opacity: 1;
      animation: none;
    }
  </style>
</noscript>

<div data-observe-resizes>
  <slot />
</div>

/**
 * See https://github.com/philipwalton/responsive-components/blob/master/app/templates/_resize-observer.html
 */

const ro = {};

// Default breakpoints that should apply to all observed
// elements that don't define their own custom breakpoints.
let defaultBreakpoints = { SM: 384, MD: 576, LG: 768, XL: 960 };

// A technique for loading polyfills only when needed. Details here:
// https://philipwalton.com/articles/loading-polyfills-only-when-needed/
if (
  typeof ResizeObserver === "undefined" &&
  matchMedia("(min-width: " + defaultBreakpoints.MD + "px)").matches
) {
  // Browsers at larger breakpoints that don't support all
  // required features must load the polyfills first.
  const loadScript = (src, done) => {
    var js = document.createElement("script");
    js.src = src;
    js.onload = done;
    document.head.appendChild(js);
  };
  loadScript("polyfill/ResizeObserver.js", main);
}

// Browsers that don't need polyfills run `main()` immediately.
else {
  main();
}

function main() {
  // Create a single ResizeObserver instance to handle all
  // container elements. The instance is created with a callback,
  // which is invoked as soon as an element is observed as well
  // as any time that element's size changes.
  const ro = new ResizeObserver(function(entries) {
    entries.forEach(function(entry) {
      const breakpoints = entry.target.dataset.breakpoints
        ? JSON.parse(entry.target.dataset.breakpoints)
        : defaultBreakpoints;
      // Use the data-obsevering attribute to target observed elements in CSS.
      if (entry.width === 0) {
        entry.target.dataset.observing = false;
      } else {
        entry.target.dataset.observing = true;
      }

      // Update the matching breakpoints on the target element.
      Object.keys(breakpoints).forEach(function(breakpoint) {
        const minWidth = breakpoints[breakpoint];
        if (entry.contentRect.width >= minWidth) {
          entry.target.classList.add(breakpoint);
        } else {
          entry.target.classList.remove(breakpoint);
        }
      });
    });
  });

  // Observe all non-custom element containers, i.e. all elements with the
  // `data-observe-resizes` attribute. Note: custom element containers
  // are observed via the connectedCallback() lifecycle method.
  let elements = document.querySelectorAll("[data-observe-resizes]");
  for (let element, i = 0; (element = elements[i]); i++) {
    ro.observe(element);
  }

  // Monitor the DOM for changes for non-custom-element containers.
  const mo = new MutationObserver(function(entries) {
    entries.forEach(function(entry) {
      eachObserveableElement(entry.addedNodes, ro.observe.bind(ro));
    });
  });

  mo.observe(document.body, { childList: true, subtree: true });
}

// Iterates through a subtree
function eachObserveableElement(nodes, fn) {
  if (nodes) {
    [].slice.call(nodes).forEach(function(node) {
      if (node.nodeType === 1) {
        let containers = [].slice.call(
          node.querySelectorAll("[data-observe-resizes]")
        );
        if (node.hasAttribute("data-observe-resizes")) {
          containers.push(node);
        }
        for (let container, i = 0; (container = containers[i]); i++) {
          fn(container);
        }
      }
    });
  }
}

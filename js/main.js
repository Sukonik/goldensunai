/*
 * GoldenSunAI — main.js
 * Minimal vanilla JS: mobile navigation drawer only.
 * No frameworks, no build step, no dependencies.
 */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.querySelector(".nav-drawer");
  var closeBtn = document.querySelector(".nav-drawer__close");

  if (!toggle || !drawer) {
    return;
  }

  function openDrawer() {
    drawer.dataset.open = "true";
    drawer.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    document.body.dataset.drawerOpen = "true";
    var firstLink = drawer.querySelector("a");
    if (firstLink) {
      firstLink.focus();
    }
  }

  function closeDrawer() {
    drawer.dataset.open = "false";
    toggle.setAttribute("aria-expanded", "false");
    document.body.dataset.drawerOpen = "false";
    toggle.focus();
    window.setTimeout(function () {
      if (drawer.dataset.open === "false") {
        drawer.hidden = true;
      }
    }, 220);
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  drawer.addEventListener("click", function (event) {
    if (event.target.matches("a")) {
      closeDrawer();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeDrawer();
    }
  });
})();

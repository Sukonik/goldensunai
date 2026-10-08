/*
 * GoldenSunAI — main.js
 * Minimal vanilla JS: mobile navigation drawer + gemstone theme picker.
 * No frameworks, no build step, no dependencies.
 *
 * The theme itself is applied earlier, by a tiny inline script in each
 * page's <head> (reads localStorage, sets data-theme before first paint —
 * that one has to run before this file to avoid a flash of the wrong
 * theme). This file only keeps the <select> in sync and saves changes.
 */
(function () {
  "use strict";

  var THEME_KEY = "gs-theme";
  // Two copies exist on every page: one in the header (hidden below 560px,
  // per the mobile wordmark fix) and one in the drawer. Keep both in sync.
  var themeSelects = document.querySelectorAll(".theme-picker__select");

  if (themeSelects.length) {
    var currentTheme = document.documentElement.getAttribute("data-theme") || "gold";

    themeSelects.forEach(function (select) {
      select.value = currentTheme;

      select.addEventListener("change", function () {
        var theme = select.value;
        document.documentElement.setAttribute("data-theme", theme);
        themeSelects.forEach(function (other) {
          other.value = theme;
        });
        try {
          localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
          /* private browsing / storage blocked — theme still applies for this load */
        }
      });
    });
  }

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

  // -- Portfolio category filters (Work page) ------------------------------
  // Cards are all visible in markup already — this only hides non-matching
  // ones, so a no-JS visitor (and the filter bar stays `hidden` until here
  // runs) always sees the full portfolio.
  var filterBar = document.getElementById("filter-bar");
  var filterCards = document.querySelectorAll(".card-grid .card[data-category]");

  if (filterBar && filterCards.length) {
    var chips = filterBar.querySelectorAll(".filter-chip");
    var validFilters = Array.prototype.map.call(chips, function (chip) {
      return chip.dataset.filter;
    });

    function applyFilter(filter, chipToPress) {
      chips.forEach(function (chip) {
        chip.setAttribute("aria-pressed", String(chip === chipToPress));
      });
      filterCards.forEach(function (card) {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    }

    function chipFor(filter) {
      return filterBar.querySelector('.filter-chip[data-filter="' + filter + '"]');
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var filter = chip.dataset.filter;
        applyFilter(filter, chip);
        var url = new URL(window.location.href);
        if (filter === "all") {
          url.searchParams.delete("category");
        } else {
          url.searchParams.set("category", filter);
        }
        window.history.pushState({ category: filter }, "", url);
      });
    });

    window.addEventListener("popstate", function () {
      var requested = new URL(window.location.href).searchParams.get("category") || "all";
      if (validFilters.indexOf(requested) === -1) {
        requested = "all";
      }
      applyFilter(requested, chipFor(requested));
    });

    filterBar.hidden = false;

    var initialFilter = new URL(window.location.href).searchParams.get("category") || "all";
    if (validFilters.indexOf(initialFilter) === -1) {
      initialFilter = "all";
    }
    if (initialFilter !== "all") {
      applyFilter(initialFilter, chipFor(initialFilter));
    }
  }
})();

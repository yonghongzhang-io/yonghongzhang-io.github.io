/* Progressive enhancement only: header hairline, scroll spy, footer year. */

(function () {
  "use strict";

  /* ----------------------------------------------------- header hairline */

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------------------------------------------------- scroll spy */

  /* In-page links only — the nav also holds a link to the CV file. */
  var navLinks = Array.prototype.filter.call(
    document.querySelectorAll(".nav-links a"),
    function (link) {
      return (link.getAttribute("href") || "").charAt(0) === "#";
    }
  );

  var sections = navLinks
    .map(function (link) {
      return document.getElementById(link.getAttribute("href").slice(1));
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var visible = Object.create(null);

    var atBottom = function () {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
    };

    var highlight = function () {
      /* At the very bottom the last section can never win the intersection
         band, so pin it explicitly. */
      var current = atBottom()
        ? sections[sections.length - 1]
        : sections.filter(function (s) {
            return visible[s.id];
          })[0];

      navLinks.forEach(function (link) {
        link.classList.toggle(
          "is-active",
          !!current && link.getAttribute("href") === "#" + current.id
        );
      });
    };

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting;
        });
        highlight();
      },
      { rootMargin: "-72px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(function (s) {
      spy.observe(s);
    });

    window.addEventListener("scroll", highlight, { passive: true });
  }

  /* --------------------------------------------------------------- year */

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();

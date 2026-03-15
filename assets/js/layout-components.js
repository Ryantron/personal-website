/*
  Shared layout components for static pages.
  Injects site header/menu and contact/footer to reduce duplicated markup.
*/

(function () {
  function buildMenuLinks() {
    return [
      '<li><a href="/">Home</a></li>',
      '<li><a href="about.html">About</a></li>',
      '<li><a href="portfolio.html">Portfolio</a></li>',
    ].join("");
  }

  function injectHeaderAndMenu() {
    var mounts = document.querySelectorAll('[data-component="site-header"]');

    mounts.forEach(function (mount) {
      var headerClass = mount.getAttribute("data-header-class") || "";
      var headerClassAttr = headerClass ? ' class="' + headerClass + '"' : "";

      mount.outerHTML =
        '<header id="header"' +
        headerClassAttr +
        ">" +
        '<a href="/" class="logo"><strong>Home</strong> <span>Ryan Lee</span></a>' +
        "<nav>" +
        '<a href="#menu">Menu</a>' +
        "</nav>" +
        "</header>" +
        '<nav id="menu">' +
        '<ul class="links">' +
        buildMenuLinks() +
        "</ul>" +
        "</nav>";
    });
  }

  function injectContactAndFooter() {
    var mounts = document.querySelectorAll(
      '[data-component="site-contact-footer"]'
    );

    mounts.forEach(function (mount) {
      var submitLabel =
        mount.getAttribute("data-submit-label") || "Send Message";

      mount.outerHTML =
        '<section id="contact">' +
        '<div class="inner">' +
        '<form action="https://formsubmit.co/ryanoaklandgardens@gmail.com" method="POST">' +
        '<div class="fields">' +
        '<div class="field half">' +
        '<label for="name">Name</label>' +
        '<input type="text" name="name" id="name" required>' +
        "</div>" +
        '<div class="field half">' +
        '<label for="email">Email</label>' +
        '<input type="text" name="email" id="email" required>' +
        "</div>" +
        '<div class="field">' +
        '<label for="message">Message</label>' +
        '<textarea name="message" id="message" rows="6" required></textarea>' +
        "</div>" +
        "</div>" +
        '<ul class="actions">' +
        "<li>" +
        '<input type="submit" value="' +
        submitLabel +
        '" class="primary">' +
        "</li>" +
        '<li><input type="reset" value="Clear"></li>' +
        "</ul>" +
        "</form>" +
        '<section class="split">' +
        '<div class="contact-method">' +
        '<span class="icon solid alt fa-envelope"></span>' +
        "<h3>Email</h3>" +
        "<span>ryanoaklandgardens@gmail.com</span>" +
        "</div>" +
        '<div class="contact-method">' +
        '<span class="icon solid alt fa-home"></span>' +
        "<h3>Location</h3>" +
        "<span>Oakland Gardens, NY</span>" +
        "</div>" +
        "</section>" +
        "</div>" +
        "</section>" +
        '<footer id="footer">' +
        '<div class="inner">' +
        '<ul class="icons">' +
        '<li><a href="https://www.instagram.com/noscros/" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>' +
        '<li><a href="https://github.com/Ryantron/" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>' +
        '<li><a href="https://www.linkedin.com/in/ryanleecs/" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>' +
        "</ul>" +
        '<ul class="copyright">' +
        '<li>Copyright &copy; 2024 Ryan Lee</li>' +
        '<li>All Rights Reserved</li>' +
        '<li>Design: <a href="https://html5up.net">HTML5 UP</a></li>' +
        "</ul>" +
        "</div>" +
        "</footer>";
    });
  }

  injectHeaderAndMenu();
  injectContactAndFooter();
})();
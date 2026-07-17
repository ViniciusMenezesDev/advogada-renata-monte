document.addEventListener('DOMContentLoaded', function () {
  var anoAtual = document.getElementById('anoAtual');
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  var navMenu = document.getElementById('navMenu');
  var navLinks = navMenu ? navMenu.querySelectorAll('.nav-link') : [];
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var collapse = bootstrap.Collapse.getInstance(navMenu);
      if (collapse) {
        collapse.hide();
      }
    });
  });
});

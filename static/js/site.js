document.addEventListener("DOMContentLoaded", function() {
  // ---------------- Selected Navbar Link -------------------------
  let navbar_links = document.querySelectorAll('.nav-links a');
  let trim_last_slash = window.location.href.replace(/\/$/, '');
  let selected_navbar_link = [...navbar_links].filter((item) => {
    return ((item.href === trim_last_slash) || (item.href === window.location.href))
  })
  if (selected_navbar_link.length !== 0) {
    for (let element of selected_navbar_link) {
      element.className = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
    }
  }

  document.getElementById('toggle-mobile-menu')?.addEventListener('click', toggleMobileMenu);
});

function toggleMobileMenu() {
  let menu = document.getElementById('mobile-menu');
  if (menu.getAttribute('aria-hidden') === 'true') {
    menu.setAttribute('aria-hidden', 'false')
    menu.classList.remove('hidden')
    menu.classList.add('block')
  } else {
    menu.setAttribute('aria-hidden', 'true')
    menu.classList.remove('block')
    menu.classList.add('hidden')
  }
}
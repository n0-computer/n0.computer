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

  document.getElementById('toggle-sidebar')?.addEventListener('click', toggleSidebar);


  document.getElementById('toggle-mobile-menu')?.addEventListener('click', toggleMobileMenu);

  // Products dropdown (desktop)
  const prodToggle = document.getElementById('toggle-products-dropdown');
  const prodMenu = document.getElementById('products-dropdown');
  if (prodToggle && prodMenu) {
    console.debug('Products dropdown initialized', {prodToggle, prodMenu});
    prodToggle.addEventListener('click', function(e) {
      console.debug('Products toggle clicked');
      e.stopPropagation();
      const isOpen = prodMenu.classList.contains('hidden') === false;
      if (isOpen) {
        prodMenu.classList.add('hidden');
        prodMenu.setAttribute('aria-hidden', 'true');
        prodToggle.setAttribute('aria-expanded', 'false');
      } else {
        prodMenu.classList.remove('hidden');
        prodMenu.setAttribute('aria-hidden', 'false');
        prodToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!prodMenu.classList.contains('hidden')) {
        if (!prodMenu.contains(e.target) && !prodToggle.contains(e.target)) {
          prodMenu.classList.add('hidden');
          prodMenu.setAttribute('aria-hidden', 'true');
          prodToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Close on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (!prodMenu.classList.contains('hidden')) {
          prodMenu.classList.add('hidden');
          prodMenu.setAttribute('aria-hidden', 'true');
          prodToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }
});

function switchTheme() {
  let current_theme = ([...document.documentElement.classList].includes('dark')) ? 'dark' : 'light';
  if (current_theme === 'dark') {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.getElementById('light').classList.add('hidden');
    document.getElementById('dark').classList.remove('hidden');
    document.getElementById("syntax_highlight").href = "/syntax-light.css";
  } else {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
    document.getElementById('dark').classList.add('hidden');
    document.getElementById('light').classList.remove('hidden');
    document.getElementById("syntax_highlight").href = "/syntax-dark.css";
  }
}

function toggleSidebar() {
  let sidebar = document.getElementById('sidebar');
  if ([...sidebar.classList].includes('translate-x-0')) {
    document.body.style.removeProperty("overflow")
    sidebar.classList.remove('translate-x-0')
    sidebar.classList.add('-translate-x-full')
  } else {
    document.body.style.setProperty("overflow", "hidden")
    sidebar.classList.remove('-translate-x-full')
    sidebar.classList.add('translate-x-0')
  }
}

function toggleMobileMenu() {
  let menu = document.querySelector('#mobile-menu div.nav-links');
  if ([...menu.classList].includes('h-screen')) {
    document.body.classList.remove("overflow-hidden", "relative")
    document.documentElement.classList.remove("overscroll-none",)
    menu.classList.remove('h-screen')
    menu.classList.add('h-0')
  } else {
    document.body.classList.add("overflow-hidden", "relative")
    document.documentElement.classList.add("overscroll-none",)
    menu.classList.remove('h-0')
    menu.classList.add('h-screen')
  }
}

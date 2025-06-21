document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const searchResults = document.getElementById("search-results");
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  // Переключение бургер-меню
  function toggleMenu() {
    if (!menuToggle || !sidebar || !overlay) {
      console.error("Menu elements not found:", { menuToggle, sidebar, overlay });
      return;
    }
    const isActive = menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active", isActive);
    overlay.classList.toggle("active", isActive);
    document.body.style.overflow = isActive ? "hidden" : "";
    if (searchResults) {
      searchResults.style.display = "none"; // Скрываем результаты поиска
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  } else {
    console.error("Menu toggle button not found");
  }

  if (overlay) {
    overlay.addEventListener("click", toggleMenu);
  } else {
    console.error("Overlay element not found");
  }

  // Получение всех элементов для поиска
  function getAllItems() {
    const items = [];

    // API секции
    document.querySelectorAll("section h3").forEach((heading) => {
      if (heading.textContent.includes("API")) {
        items.push({
          title: heading.textContent,
          id: heading.closest("section").id,
          type: "api",
          section: "API Reference",
        });
      }
    });

    // Методы
    document.querySelectorAll(".method-card").forEach((method) => {
      const methodName = method.querySelector("h4")?.textContent || "";
      const apiSection = method.closest("section").querySelector("h3")?.textContent || "";
      items.push({
        title: methodName,
        id: method.closest("section").id,
        type: "method",
        section: apiSection,
      });
    });

    return items.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Отображение результатов поиска
  function displayResults(results) {
    if (!searchResults) {
      console.error("Search results element not found");
      return;
    }
    if (results.length === 0) {
      searchResults.style.display = "none";
      return;
    }

    const methodIcon = `
      <svg class="method-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" style="vertical-align: -0.125em;">
        <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <text 
          x="10" 
          y="10" 
          font-family="Monaco, monospace" 
          font-size="10" 
          fill="currentColor" 
          text-anchor="middle" 
          dominant-baseline="central" 
          font-weight="bold"
        >m</text>
      </svg>
    `;

    const apiIcon = `
      <svg class="api-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" style="vertical-align: -0.125em;">
        <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <text 
          x="10" 
          y="10" 
          font-family="Monaco, monospace" 
          font-size="8" 
          fill="currentColor" 
          text-anchor="middle" 
          dominant-baseline="central" 
          font-weight="bold"
        >API</text>
      </svg>
    `;

    searchResults.innerHTML = results
      .map(
        (result) => `
          <a href="#${result.id}" class="search-result-item" data-type="${result.type}">
            <span class="search-result-method">
              ${result.type === "method" ? methodIcon : apiIcon}
              ${result.title}
            </span>
            <span class="search-result-section">${result.section}</span>
          </a>
        `
      )
      .join("");

    searchResults.style.display = "block";
  }

  // Показ первых 6 элементов при фокусе
  if (searchInput) {
    searchInput.addEventListener("focus", () => {
      const items = getAllItems();
      displayResults(items.slice(0, 6));
    });

    // Поиск при вводе
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const items = getAllItems();
      const filtered = query
        ? items.filter((item) => item.title.toLowerCase().includes(query))
        : items;
      displayResults(filtered.slice(0, 6));
    });

    // Скрытие результатов при потере фокуса
    searchInput.addEventListener("blur", () => {
      setTimeout(() => {
        if (searchResults) {
          searchResults.style.display = "none";
        }
      }, 200); // Задержка для клика по результатам
    });
  } else {
    console.error("Search input element not found");
  }
});

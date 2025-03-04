document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const searchResults = document.getElementById('search-results');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Получаем все методы и API при загрузке страницы
    const getAllItems = () => {
        const items = [];
        
        // Добавляем API секции
        document.querySelectorAll('section h3').forEach(heading => {
            if (heading.textContent.includes('API')) {
                items.push({
                    title: heading.textContent,
                    id: heading.closest('section').id,
                    type: 'api',
                    section: 'API Reference'
                });
            }
        });

        // Добавляем методы
        document.querySelectorAll('.method-card').forEach(method => {
            const methodName = method.querySelector('h4')?.textContent || '';
            const apiSection = method.closest('section').querySelector('h3')?.textContent || '';
            items.push({
                title: methodName,
                id: method.closest('section').id,
                type: 'method',
                section: apiSection
            });
        });

        return items.sort((a, b) => a.title.localeCompare(b.title));
    };

    // Показываем первые 6 элементов при фокусе
    searchInput.addEventListener('focus', () => {
        const items = getAllItems();
        displayResults(items.slice(0, 6));
    });

    // Поиск при вводе
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const items = getAllItems();
        
        if (!query) {
            displayResults(items.slice(0, 6));
            return;
        }

        const filtered = items.filter(item => 
            item.title.toLowerCase().includes(query)
        );
        displayResults(filtered.slice(0, 6));
    });

    // Скрываем результаты при потере фокуса
    searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            searchResults.style.display = 'none';
        }, 200); // Небольшая задержка для возможности клика по результатам
    });

    // Мобильное меню
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    menuToggle.addEventListener('click', () => {
        searchResults.style.display = 'none'; // Скрываем результаты при открытии меню
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    });

    // Закрываем меню при клике на оверлей
    overlay.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Закрываем меню при изменении размера окна
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

function displayResults(results) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.style.display = 'none';
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
        .map(result => `
            <a href="#${result.id}" class="search-result-item">
                <span class="search-result-method">
                    ${result.type === 'method' ? methodIcon : apiIcon}
                    ${result.title}
                </span>
                <span class="search-result-section">${result.section}</span>
            </a>
        `)
        .join('');
    
    searchResults.style.display = 'block';
}
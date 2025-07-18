document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const categoryTabsContainer = document.querySelector('.category-tabs');
    const allToolCards = document.querySelectorAll('.tool-card'); // Saare tool cards ko select kar liya

    // Nayi function jo sirf cards ko show/hide karegi
    function filterTools(filter = '', category = 'All') {
        let toolsFound = false;
        allToolCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDesc = card.querySelector('p').textContent.toLowerCase();
            const cardTags = card.dataset.tags.toLowerCase();

            const matchesCategory = category === 'All' || cardCategory === category;
            const matchesSearch = cardTitle.includes(filter) || cardDesc.includes(filter) || cardTags.includes(filter);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex'; // Card ko dikhao
                toolsFound = true;
            } else {
                card.style.display = 'none'; // Card ko chupao
            }
        });
        
        // Agar koi tool na mile to message dikhayein
        const noResultsMessage = document.getElementById('no-results-message');
        if (!toolsFound) {
            if (!noResultsMessage) {
                const message = document.createElement('p');
                message.id = 'no-results-message';
                message.style.textAlign = 'center';
                message.style.gridColumn = '1 / -1';
                message.textContent = 'No tools found.';
                document.getElementById('tool-grid').appendChild(message);
            }
        } else {
            if (noResultsMessage) {
                noResultsMessage.remove();
            }
        }
    }

    // Category Tabs ab HTML se banenge
    const categories = ['All'];
    allToolCards.forEach(card => {
        const cat = card.dataset.category;
        if (!categories.includes(cat)) {
            categories.push(cat);
        }
    });

    categoryTabsContainer.innerHTML = ''; // Pehle se tabs ko saaf karein
    categories.forEach(cat => {
        const tab = document.createElement('div');
        tab.className = 'category-tab';
        tab.textContent = cat;
        tab.dataset.category = cat;
        if (cat === 'All') tab.classList.add('active');
        tab.addEventListener('click', () => {
            document.querySelector('.category-tab.active').classList.remove('active');
            tab.classList.add('active');
            filterTools(searchBar.value.toLowerCase(), cat);
        });
        categoryTabsContainer.appendChild(tab);
    });

    // Search Bar ki functionality
    searchBar.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.category-tab.active').dataset.category;
        filterTools(e.target.value.toLowerCase(), activeCategory);
    });

});
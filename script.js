document.addEventListener('DOMContentLoaded', () => {
    const toolGrid = document.getElementById('tool-grid');
    const searchBar = document.getElementById('search-bar');
    const categoryTabsContainer = document.querySelector('.category-tabs');

    // MUKAMMAL TOOLS KI LIST WITH CATEGORIES
    const tools = [
        // Text Tools
        { id: 'word-counter', cat: 'Text', title: 'Word Counter', icon: '🧮', desc: 'Count words, characters, and sentences.', tags: 'text, count, writer' },
        { id: 'case-converter', cat: 'Text', title: 'Case Converter', icon: '🔄', desc: 'Convert text to different cases.', tags: 'text, format, uppercase, lowercase' },
        { id: "lorem-ipsum", cat: 'Text', title: "Lorem Ipsum Generator", icon: "📜", desc: "Generate placeholder text.", tags: "text, design, developer, dummy" },
        { id: 'fancy-text-generator', cat: 'Text', title: 'Fancy Text Generator', icon: '✨', desc: 'Create stylish fonts for social media.', tags: 'text, instagram, whatsapp, font' },
        
        // Student Tools
        { id: 'gpa-calculator', cat: 'Student', title: 'GPA Calculator', icon: '🎓', desc: 'Calculate your Grade Point Average.', tags: 'student, university, college, grade' },
        { id: 'final-grade-calculator', cat: 'Student', title: 'Final Grade Calculator', icon: '📊', desc: 'Calculate grade needed on final exam.', tags: 'student, exam, grade' },
        { id: 'study-timer', cat: 'Student', title: 'Study Timer (Pomodoro)', icon: '🍅', desc: 'A 25-minute focus timer for study.', tags: 'student, productivity, timer' },
        { id: 'similarity-checker', cat: 'Student', title: 'Text Similarity Checker', icon: '🤝', desc: 'Compare two texts to find similarity.', tags: 'student, writer, plagiarism' },

        // Developer Tools
        { id: 'qr-generator', cat: 'Developer', title: 'QR Code Generator', icon: '📱', desc: 'Create QR codes for text or URLs.', tags: 'image, link, mobile, developer' },
        { id: 'color-picker', cat: 'Developer', title: 'Color Picker', icon: '🎨', desc: 'Pick colors and get their codes.', tags: 'design, web, hex, rgb, css' },
        { id: 'box-shadow-generator', cat: 'Developer', title: 'Box Shadow Generator', icon: '🖼️', desc: 'Create CSS box-shadow styles.', tags: 'css, web, developer, design' },
        { id: 'gradient-generator', cat: 'Developer', title: 'CSS Gradient Generator', icon: '🌈', desc: 'Create CSS linear gradients.', tags: 'css, web, developer, design' },
        { id: "markdown-previewer", cat: 'Developer', title: "Markdown Previewer", icon: "✒️", desc: "Write and preview Markdown text.", tags: "text, developer, writing, code" },
        { id: 'json-formatter', cat: 'Developer', title: 'JSON Formatter', icon: '📋', desc: 'Format and validate JSON data.', tags: 'developer, api, code, data' },
        { id: 'url-encoder', cat: 'Developer', title: 'URL Encoder/Decoder', icon: '🌐', desc: 'Encode or decode URL components.', tags: 'developer, web, security' },
        { id: 'base64-converter', cat: 'Developer', title: 'Base64 Converter', icon: '🔐', desc: 'Encode and decode Base64 strings.', tags: 'developer, security, data' },
        { id: 'unix-timestamp', cat: 'Developer', title: 'Unix Timestamp Converter', icon: '🕰️', desc: 'Convert between Unix time and dates.', tags: 'developer, date, time, server' },
        { id: 'my-ip-address', cat: 'Developer', title: "What's My IP Address?", icon: '📍', desc: 'Find your public IP address.', tags: 'developer, network, utility' },
        { id: 'youtube-thumbnail-downloader', cat: 'Developer', title: 'YouTube Thumbnail Downloader', icon: '🎬', desc: 'Download YouTube video thumbnails.', tags: 'video, image, content creator' },
        { id: 'ai-prompt-generator', cat: 'Developer', title: 'AI Prompt Generator', icon: '🤖', desc: 'Create detailed prompts for AI.', tags: 'chatgpt, midjourney, developer, content' },

        // Image Tools
        { id: 'image-to-base64', cat: 'Image', title: 'Image to Base64', icon: '📷', desc: 'Convert your image to Base64 string.', tags: 'image, developer, css' },
                // === YAHAN AAPKA PEHLA NAYA TOOL ADD HUA HAI ===
        { id: 'image-compressor', cat: 'Image', title: 'Image Compressor', icon: '🖼️', desc: 'Compress JPG, PNG & WEBP images.', tags: 'image, compress, size, optimize, reduce' },
        
        // === YAHAN AAPKA DOOSRA NAYA TOOL ADD HUA HAI ===
        { id: 'file-converter', cat: 'File Tools', title: 'File Converter', icon: '🔄', desc: 'Convert images, docs, and more.', tags: 'file, convert, pdf, png, jpg, docx, audio' },
        
        // Financial Tools
        { id: 'loan-calculator', cat: 'Finance', title: 'EMI Calculator', icon: '💰', desc: 'Calculate loan installments.', tags: 'finance, bank, emi, money' },
        { id: "discount-calculator", cat: 'Finance', title: "Discount Calculator", icon: "💸", desc: 'Calculate final price after discount.', tags: 'shop, sale, money, finance' },
        { id: 'tip-calculator', cat: 'Finance', title: 'Tip Calculator', icon: '🍽️', desc: 'Calculate the tip for a bill.', tags: 'finance, restaurant, money' },
        { id: 'zakat-calculator', cat: 'Finance', title: 'Zakat Calculator', icon: '🕋', desc: 'Calculate your annual Zakat.', tags: 'islamic, charity, finance' },
        { id: 'committee-calculator', cat: 'Finance', title: 'Committee (BC) Calculator', icon: '🤝', desc: 'Manage your committee savings.', tags: 'finance, savings, group' },
        
        // Health Tools
        { id: 'bmi-calculator', cat: 'Health', title: 'BMI Calculator', icon: '💪', desc: 'Calculate your Body Mass Index.', tags: 'health, fitness, weight' },
        
        // Date & Time Tools
        { id: 'age-calculator', cat: 'Date & Time', title: 'Age Calculator', icon: '🎂', desc: 'Calculate age from date of birth.', tags: 'date, birthday, time' },
        { id: 'date-difference', cat: 'Date & Time', title: 'Date Difference', icon: '🗓️', desc: 'Calculate the duration between two dates.', tags: 'date, time, calculator' },

        // Math Tools
        { id: "temp-converter", cat: 'Math', title: "Temp Converter", icon: "🌡️", desc: "Convert Celsius, Fahrenheit, Kelvin.", tags: "temperature, weather, math" },
        { id: 'random-number', cat: 'Math', title: 'Random Number Generator', icon: '🎲', desc: 'Generate a random number in a range.', tags: 'math, utility, fun' },
        { id: 'percentage-calculator', cat: 'Math', title: 'Percentage Calculator', icon: '💯', desc: 'Calculate percentages easily.', tags: 'math, finance, school' },
    ];

    // Function to render all tools based on filters
    function renderTools(filter = '', category = 'All') {
        toolGrid.innerHTML = '';
        const filteredTools = tools.filter(tool => {
            const matchesCategory = category === 'All' || tool.cat === category;
            const matchesSearch = tool.title.toLowerCase().includes(filter) || tool.desc.toLowerCase().includes(filter) || tool.tags.toLowerCase().includes(filter);
            return matchesCategory && matchesSearch;
        });
        if (filteredTools.length === 0) {
            toolGrid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">No tools found.</p>';
            return;
        }
        filteredTools.forEach(tool => {
            const card = document.createElement('a');
            card.className = 'tool-card';
            card.href = `/tools/${tool.id}.html`;
            card.innerHTML = `
                <div class="tool-card-content">
                    <span class="icon">${tool.icon}</span>
                    <h3>${tool.title}</h3>
                    <p>${tool.desc}</p>
                </div>
                <div class="tool-card-footer">${tool.cat}</div>
            `;
            toolGrid.appendChild(card);
        });
    }

    // Function to render only the popular tools
    function renderPopularTools() {
        // 'password-generator' ki jagah 'word-counter' add kiya hai kyunke wo mojood nahi tha
        const popularToolIds = ['bmi-calculator', 'gpa-calculator', 'word-counter', 'zakat-calculator', 'fancy-text-generator', 'youtube-thumbnail-downloader'];
        const popularGrid = document.getElementById('popular-tools-grid');
        
        // Check if the grid exists before trying to add to it
        if (!popularGrid) return; 

        popularToolIds.forEach(id => {
            const tool = tools.find(t => t.id === id);
            // ... (Baaqi ka code bilkul wesa hi rahega)
            if (tool) {
                const card = document.createElement('a');
                card.className = 'tool-card';
                card.href = `/tools/${tool.id}.html`;
                card.innerHTML = `
                    <div class="tool-card-content">
                        <span class="icon">${tool.icon}</span>
                        <h3>${tool.title}</h3>
                        <p>${tool.desc}</p>
                    </div>
                    <div class="tool-card-footer">${tool.cat}</div>
                `;
                popularGrid.appendChild(card);
            }
        });
    }

    // Category Tabs Logic
    const categories = ['All', ...new Set(tools.map(tool => tool.cat))];
    categories.forEach(cat => {
        const tab = document.createElement('div');
        tab.className = 'category-tab';
        tab.textContent = cat;
        tab.dataset.category = cat;
        if (cat === 'All') tab.classList.add('active');
        tab.addEventListener('click', () => {
            document.querySelector('.category-tab.active').classList.remove('active');
            tab.classList.add('active');
            renderTools(searchBar.value.toLowerCase(), cat);
        });
        categoryTabsContainer.appendChild(tab);
    });

    // Search Bar Logic
    searchBar.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.category-tab.active').dataset.category;
        renderTools(e.target.value.toLowerCase(), activeCategory);
    });
    
    // Initial Render of all tools and popular tools
    renderTools();
    renderPopularTools();
});
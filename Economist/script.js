// The Strathclyde Economist - Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // --- Core Interactivity ---
    const articleImage = document.getElementById('article-image');

    // Allow users to change the image by clicking it (optional feature)
    if (articleImage) {
        articleImage.addEventListener('click', () => {
            const newUrl = prompt('Enter the URL for a new hero image (or leave blank to keep current):');
            if (newUrl && newUrl.trim() !== "") {
                articleImage.src = newUrl;
            }
        });
    }

    // Add a simple way to "save" or "preview" (Ctrl + S)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            console.log('Mock article state saved (simulated).');
            alert('Mock article design saved! You can now use this layout for your project.');
        }
    });

    console.log('The Strathclyde Economist Clone Initialized.');
});

// Function to load HTML components
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load components
window.onload = function() {
    loadComponent('header', 'gallery/header.html');
    loadComponent('content', 'gallery/body.html');
    loadComponent('footer', 'gallery/footer.html');
};

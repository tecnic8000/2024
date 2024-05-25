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
    //loadComponent('header', 'gallery/header.html');
    loadComponent('BODY1', 'gallery/body.html');
    //loadComponent('footer', 'gallery/footer.html');
};

/*document.addEventListener("DOMContentLoaded", function() {
    // Select the grid container
    var grid = document.querySelector('.grid');

    // Fetch images from the local folder (replace 'images/' with your folder path)
    fetchImages('gallery/images/');

    // Function to fetch images
    function fetchImages(folder) {
        fetch(folder)
            .then(response => response.text())
            .then(data => {
                // Split the data by newline to get individual image filenames
                var images = data.split('\n');
                images.forEach(image => {
                    // Create grid item element
                    var gridItem = document.createElement('div');
                    gridItem.classList.add('grid-item');

                    // Create image element
                    var img = document.createElement('img');
                    img.src = folder + image.trim(); // Trim any whitespace from image filename
                    img.alt = image.trim(); // Use filename as alt text

                    // Append image to grid item
                    gridItem.appendChild(img);

                    // Append grid item to grid container
                    grid.appendChild(gridItem);
                });

                // Initialize Masonry layout after images are loaded
                var masonry = new Masonry('.grid', {
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-item',
                    percentPosition: true
                });
            })
            .catch(error => console.error('Error fetching images:', error));
    }
});
*/
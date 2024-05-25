//"use strict"
// Function to load HTML components
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

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

/* ================================================================================================================ */
function imagesInit() {
    const images = document.querySelectorAll('.article__image');
    if (images.length){
        images.forEach(image => {
            const imageItem = image.querySelector('img');
            const padding = imageItem.offsetHeight / imageItem.offsetWidth * 100;
            image.style.paddingBottom = `${padding}%`
            imageItem.classList.add('init');
        });
    }
}
function gridInit() {
    const items = document.querySelector('.articles__items');
    const itemsGrid = new Isotope(items, {
        itemSelector: '.article',
        masonry: {
            fitWidth: true,
            gutter: 20
        }
    });

    //FILTER BUTTON
    document.addEventListener('click', documentActions);
    function documentActions(e){
        const targetElement = e.target;
        if(targetElement.closest('.filter-articles__item')){
            const filterItem = targetElement.closest('.filter-articles___item');
            const filterValue = filterItem.dataset.filter;
            const filterActiveItem = document.querySelector('.filter-articles__item.active');

            filterValue === "*" ? itemsGrid.arrange({filter: ``}):
                itemsGrid.arrange({ filter: `[data-filter="${filterValue}"]`})

            filterActiveItem.classList.remove('active');
            filterItem.classList.add('active');


            e.preventDefault();
        }
    }
}


window.addEventListener('load', windowLoad);

function windowLoad() {
    //loadComponent('BODY1', 'gallery/body.html');
    imagesInit();
    gridInit();
}


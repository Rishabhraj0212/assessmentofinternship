document.addEventListener("DOMContentLoaded", function() {
    fetch('data/image.json')
        .then(response => response.json())
        .then(data => {
            var container = document.getElementById('image-container');

            data.forEach(function(item) {
                var imageElement = document.createElement('img');
                imageElement.src = item.image;
                imageElement.alt = item.alt;

                var imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');
                imageContainer.appendChild(imageElement);

                imageContainer.addEventListener("click", function() {
                    var containers = document.querySelectorAll(".image-container");
                    containers.forEach(function(container) {
                        container.classList.remove("selected-image");
                    });

                    this.classList.add("selected-image");
                });

                container.appendChild(imageContainer);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

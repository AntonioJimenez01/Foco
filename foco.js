document.addEventListener('DOMContentLoaded', function () {
    foco();
});

function foco() {
    // Add the 'oscuridad' class to the body
    document.body.classList.add('oscuridad');

    // Add a click event listener to the 'foco' element
    const img = document.getElementById('foco');

    if (img) { // Check if the element with ID 'foco' exists
        img.addEventListener('click', function () {
            // Check if the 'apagado' string is in the 'src' attribute
            if (img.src.includes("apagado")) {
                // Change the image and background color to represent the light being on
                img.src = 'images/foco-prendido.jpg';
                document.body.classList.remove('oscuridad');
                document.body.classList.add('luz');
            } else {
                // Change the image and background color to represent the light being off
                img.src = 'images/foco-apagado.jpg';
                document.body.classList.remove('luz');
                document.body.classList.add('oscuridad');
            }
        });
    } else {
        console.error("Element with ID 'foco' not found");
    }
}

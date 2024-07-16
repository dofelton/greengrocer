const images = document.querySelectorAll(".show");
let i = 0;

setInterval(function() {
    images.forEach((img, i) => {
        img.style.display = 'none';
    })

    if ( i == images.length) {
        i=0;
    }

    images[i].style.display = 'block';
    i++;
}, 4000);


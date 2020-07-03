let img = ["zlodziej.jpg", "peoplebanner.jpg", "halfgirl.jpg", "cottoncanvas.jpg"];

let currentPhoto = 0;


function changeNextPhoto() {
    currentPhoto = currentPhoto + 1;

    if(currentPhoto === img.length) {
        currentPhoto = 0;
    }

    document.getElementById("home-background").style.backgroundImage = `url(${img[currentPhoto]})`;
    
};

function changePreviousPhoto() {

    if(currentPhoto === 0) {
        currentPhoto = currentPhoto + 3;
    }
    else {
    currentPhoto = currentPhoto - 1;
    }
   
    document.getElementById("home-background").style.backgroundImage = `url(${img[currentPhoto]})`;
};

document.getElementById("next-photo").addEventListener('click', function() {
    changeNextPhoto()
});
document.getElementById("prev-photo").addEventListener('click', function() {
    changePreviousPhoto()
});

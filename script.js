let img = ["zlodziej.jpg", "peoplebanner.jpg", "halfgirl.jpg", "cottoncanvas.jpg"];

//let background = document.getElementById("home-background");

let currentPhoto = 0;
let lastPhoto = img.length-1;

function changePhoto() {
   for (let currentPhoto = 0; currentPhoto < 4; currentPhoto++) {
    document.getElementById("home-background").style.backgroundImage = img[currentPhoto];
   };
};

document.getElementById("next-photo").addEventListener('click', function() {
    if (currentPhoto === lastPhoto) {
    currentPhoto = -1; continue
}
    else {
        changePhoto
    };
);

/*function changeDescription() {

};

function changePhotoAndDescription() {
    changePhoto();
    changeDescription();
}; */


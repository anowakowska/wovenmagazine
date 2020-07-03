let mountainsPhoto = {
    image: 'zlodziej.jpg',
    description: 'Eons of Earth'
};

let peoplePhoto = {
    image: 'peoplebanner.jpg',
    description: 'Peaceful Stills'
};

let girlPhoto = {
    image: 'halfgirl.jpg',
    description: 'Group Work'
};

let cottonPhoto = {
    image: 'cottoncanvas.jpg',
    description: 'A Cotton Canvas'
};

let currentPhoto = 0;

let slides = [mountainsPhoto, peoplePhoto, girlPhoto, cottonPhoto];

function changeNextPhoto() {
    currentPhoto = currentPhoto + 1;

    if(currentPhoto === slides.length) {
        currentPhoto = 0;
    }
    changeSlide();
};

function changePreviousPhoto() {

    if(currentPhoto === 0) {
        currentPhoto = currentPhoto + 3;
    }
    else {
    currentPhoto = currentPhoto - 1;
    }
   changeSlide();
};

function changeSlide() {

    document.getElementById('home-background').style.backgroundImage = `url(${slides[currentPhoto].image})`;
    
    document.getElementById('home-description').innerHTML = slides[currentPhoto].description;
};

document.getElementById('next-photo').addEventListener('click', function() {
    changeNextPhoto()
});
document.getElementById('prev-photo').addEventListener('click', function() {
    changePreviousPhoto()
});

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

let currentBackgroundPhoto = 0;

let slides = [mountainsPhoto, peoplePhoto, girlPhoto, cottonPhoto];

function changeNextPhoto() {
    currentBackgroundPhoto = currentBackgroundPhoto + 1;

    if(currentBackgroundPhoto === slides.length) {
        currentBackgroundPhoto = 0;
    }
    changeSlide();
};

function changePreviousPhoto() {

    if(currentBackgroundPhoto === 0) {
        currentBackgroundPhoto = currentBackgroundPhoto + 3;
    }
    else {
    currentBackgroundPhoto = currentBackgroundPhoto - 1;
    }
   changeSlide();
};

function changeSlide() {

    document.getElementById('home-background').style.backgroundImage = `url(${slides[currentBackgroundPhoto].image})`;
    
    document.getElementById('home-description').innerHTML = slides[currentBackgroundPhoto].description;
};

document.getElementById('next-photo').addEventListener('click', function() {
    changeNextPhoto()
});
document.getElementById('prev-photo').addEventListener('click', function() {
    changePreviousPhoto()
});


let magazinePhotos = ['cover.jpg', 'arcosanti.jpg', 'article.jpg', 'architecture.jpg', 'ceramic.jpg'];

let currentMagazinePhoto = 0;

function nextMagazinePhoto() {
    currentMagazinePhoto = currentMagazinePhoto + 1;
    if(currentMagazinePhoto === magazinePhotos.length) {
        currentMagazinePhoto = 0;
    }
    changeMagazinePhotos();
};

function changeMagazinePhotos() {
    document.getElementById('issue-photo').src = magazinePhotos[currentMagazinePhoto];
};

document.getElementById('next-arrow').addEventListener('click', function() {
    nextMagazinePhoto()
});
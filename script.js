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

function previousMagazinePhoto() {
    if(currentMagazinePhoto === 0) {
        currentMagazinePhoto = currentMagazinePhoto +4;
    }
    else {
        currentMagazinePhoto = currentMagazinePhoto - 1;
    }
    changeMagazinePhotos();
}

function changeMagazinePhotos() {
    document.getElementById('issue-photo').src = magazinePhotos[currentMagazinePhoto];
};

document.getElementById('next-arrow').addEventListener('click', function() {
    nextMagazinePhoto()
});
document.getElementById('prev-arrow').addEventListener('click', function() {
    previousMagazinePhoto()
});


let scroll = document.getElementById('scroll-to');

function scrollDown() {
    scroll.scrollIntoView({behavior: 'smooth'});
};

document.getElementById('arrow-scroll-down').addEventListener('click', function() {
    scrollDown()
});

let menuElement = document.getElementById('hover-menu');
let menuButton = menuElement[0];
let contentElement = document.getElementById('menu-content');
let menuContent = contentElement[0];

function showHideDropdownMenu() {
    document.getElementById('menu-content').classList.toggle('show-menu');
};

document.getElementById('hover-menu').addEventListener('click', function(event) {
    event.stopPropagation();
    showHideDropdownMenu();
}); 

function hideDropdownMenu() {
    document.getElementById('menu-content').classList.remove('show-menu');
}

document.addEventListener('click', hideDropdownMenu);

let blogPosts = [
     {
        author: 'SHANTELL MARTIN',
        category: 'ART',
        title: 'Well, ARE YOU?',
        description: 'Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?',
        date: '.12.30.19.'
    },
    {
        author: 'CRÉ NATURAL BUILDING',
        category: 'ARCHITECTURE',
        title: 'Closer to Home',
        description: 'Bryce Ehrecke & Kelly Brown share how natural building could empower both a more beautiful and a more sustainable future.',
        date: '.11.11.19.'
    },
    {
        author: 'ALISON CARROL',
        category: 'ENTREPRENEUR',
        title: 'Wonder Valley',
        description: 'Wonder Valley is a built around the essentials for cultivatin rich existence, with good food and good health for a good life.',
        date: '.10.30.19.'
    },
    {
        author: 'JUSTIN CHUNG',
        category: 'PHOTOGRAPHER',
        title: 'Faculty Department',
        description: 'Photographer Justin Chung’s project Faculty Department is an ode to the inspiration found in his subjects.',
        date: '.10.21.19.'
    }
];

function onCategoryChosen(event) {
    const category = event.target.getAttribute('data-category');
    let filteredBlogPosts = blogPosts.filter(function(blogPost) {
        if (blogPost.category === category) {
            return true;
        } else {
            return false;
        }
    });
    console.log(filteredBlogPosts);

    document.getElementById('blog').classList.toggle('show-blog-post')

}


document.querySelectorAll('.category-button').forEach(function(categoryButton) {
    categoryButton.onclick = onCategoryChosen;
});

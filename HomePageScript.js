document.addEventListener('DOMContentLoaded', function () {

    const MainLink = document.getElementsByClassName('MainLink');

    Array.from(MainLink).forEach(link => {
        link.addEventListener('mouseover', function () {
            link.style.color = '#10c9c3';
        });
    

    link.addEventListener('mouseout', function () {
        link.style.color = 'black' ;       
        });
    });


function logClientWidth() {
    const clientWidth = document.documentElement.clientWidth;
    console.log('Ширина окна без прокрутки:', clientWidth, 'px');
}
logClientWidth();
window.addEventListener('resize', logClientWidth);


 const dropDawnLinks = document.getElementById('dropDawnLinks') ;
 const iconMenu = document.getElementById('iconMenu');

    if (iconMenu && dropDawnLinks) {
        iconMenu.addEventListener('click', function (event) {
            event.stopPropagation();
            this.classList.toggle('open');
            dropDawnLinks.classList.toggle('show');
        })
    } else {
        console.log("ошибка");
    }


document.addEventListener('click', function (event) {
    const isClickInsideMenu = dropDawnLinks.contains(event.target);
    const isClickOnIcon = iconMenu.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
        dropDawnLinks.classList.remove('show');
        iconMenu.classList.remove('open');
    }
});


const dropDawnLink = document.getElementsByClassName('dropDawnLink');

Array.from(dropDawnLink).forEach(links => {
    links.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#7b7b7b'
    });

    links.addEventListener('mouseout', function () {
        this.style.backgroundColor = 'rgba(179, 179, 179, 0.0)'       
    });
});
});
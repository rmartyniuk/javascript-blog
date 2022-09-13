'use strict';


function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* remove class 'active' from all article links  */
    /*rozumiem, że usuwam klasę active, która jest zdefiniowana w przeglądarce i oznacza, że link jest aktywny- tak to rozumieć? Usuwam ją z wszystkich linków aby następnie przypisać tylko jednemu konkretnemu- klikniętemu???*/
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    /*przed chwilą usunąłem klasę active z linków a teraz ją przypisuję ponownie- czy chodzi o to, że ma ona zostać przypisana konkretnemu klikniętemu elementowi???*/
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* remove class 'active' from all articles */
    /*ponownie usuwam klasę active ale w jakim celu???*/
    const activeArticles = document.querySelectorAll('.posts article.active')
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    /*wybieram z index.html wszystkie elementy mające atrybut href- w jakim celu?*/
    const articleSelector = clickedElement.getAttribute('href');
    console.log('wybrano atrybut href: ', articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */
    /*wyszukuję w indexie jakiś element z atrybutem href*/
    const targetArticle = document.querySelector(articleSelector);
    console.log('znaleziono artykuł z trybutem: ', articleSelector);

    /* add class 'active' to the correct article */
    /*ponownie nadaję klasę active na elementy mające atrybut href*/
    targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}

/*GERERING TITLES LIST*/

const optArticleSelector = '.post',
    optTitleListSelector = '.titles',
    optTitleSelector = '.post-title';


console.log('przed generateTitleLinks');

function generateTitleLinks() {

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    for (let article of articles) {

        /* get the article id */
        const articleId = article.getAttribute('id');

        /* find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        /* get the title from the title element */

        /* create HTML of the link */
        const linkHTMLData = {
            id: articleId,
            title: articleTitle
        };
    }


    /* insert link into titleList */

    const abc = document.getElementsByClassName('.titles');
    abc.insertAdjacentHTML('afterbegin', '<strong>abc</strong>');
    console.log('koniec funkcji generateTitleLinks')
}
console.log('po generateTitleLinks');
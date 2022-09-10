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
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks(customSelector = "") {
    //nie wiem skąd argument custom...//

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    console.log('titlelist to', titleList);
    titleList.innerHTML = '';
    /*co robi innerHTML?*/

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    let html = '';
    /*co robi powyższa linia?*/
    for (let article of articles);
    /*dlaczego zmienna article jest lekko szara w kodzie? Dlaczego nie przypisaliśmy jej wartości?*/

    /* get the article id */
    const articleId = article.getAttribute('id');
    /*tutaj article już nie jest szara, dlaczego? Czym jest? Skąd się tego dowiedzieć?*/

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('stała linkHTML to ', linkHTML);
    console.log('koniec');
    /*dlaczego nie mogę podejrzeć consol.logiem......???*/

    /* insert link into titleList */

    const abc = document.getElementsByClassName('.titles');
    abc.insertAdjacentHTML('beforbegin', linkHTML);

}
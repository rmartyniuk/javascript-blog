'use strict';


function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;

    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active')
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
}



/*GERERING TITLES LIST*/
/*Zbudowanie kodu HTML wszystkich linków*/

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';


function generateTitleLinks(customSelector = '') {
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    let html = '';

    for (let article of articles) {
        /* get the article id */
        const articleId = article.getAttribute('id');

        /* find the title element */
        /* get the title from the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

        /* insert link into html variable */
        html = html + linkHTML;
    }
    console.log(html)

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}
generateTitleLinks();
console.log('wywołano generateTitleLinks: ', generateTitleLinks);


/*Dodanie tagów do artykułów*/


function generateTags() {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);


    /* START LOOP: for every article: */
    for (let article of articles) {

        /* find tags wrapper */
        const tagsList = article.querySelector(optArticleTagsSelector);

        /* make html variable with empty string */
        let html = '';

        /* get tags from data-tags attribute */
        const articleTags = article.getAttribute('data-tags');

        /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
        console.log(articleTagsArray);

        /* START LOOP: for each tag */
        for (let tag of articleTagsArray) {

            /* add generated code to html variable */
            const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
            html = html + linkHTML;
            console.log(html);


            /* END LOOP: for each tag */
        }

        /* insert HTML of all the links into the tags wrapper */
        tagsList.innerHTML = html;

        /* END LOOP: for every article: */
    }
}
generateTags();


function tagClickHandler(event) {
    /* prevent default action for this event
    ---zapobiegaj domyślnej akcji dla tego zdarzenia */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" 
    ---utwórz nową stałą o nazwie "clickedElement" i nadaj jej wartość "this"*/
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element
    ---utwórz nową stałą "href" i odczytaj atrybut "href" klikniętego elementu */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant 
    ---utwórz nową stałą „tag” i wyodrębnij tag ze stałej „href”*/
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active
    ---znajdź wszystkie linki do tagów z aktywną klasą */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link
    ---START LOOP: dla każdego aktywnego linku tagu */
    for (let activeTagLink of activeTagLinks) {

        /* remove class active */
        activeTagLink.classList.remove('active');

        /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant 
    ---znajdź wszystkie linki do tagów z atrybutem „href” równym stałej „href”*/
    const tagLinksHref = document.querySelectorAll('a[href="' + href + '"]');


    /* START LOOP: for each found tag link
    ---dla każdego znalezionego linku tagu */
    for (let tagLink of tagLinksHref) {

        /* add class active */
        tagLink.classList.add('active')

        /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');

}



function addClickListenersToTags() {
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */
    for (let tagLink of tagLinks) {

        /* add tagClickHandler as event listener for that link */
        tagLink.addEventListener('click', tagClickHandler);

        /* END LOOP: for each link */
    }
}
addClickListenersToTags();

function generateAuthors() {

    /*stała-wskazująca na kontener*/
    const articles = document.querySelectorAll(optArticleSelector);



    /*rozp pętli*/
    for (let article of articles) {

        /*Gdzie mają zostać wpisane wyniki?*/
        const authorWrapper = article.querySelector(optArticleAuthorSelector);

        let html = '';

        /*Skąd mają być pobrane informacje o wynikach*/
        const author = article.getAttribute('data-author');
        console.log(author)


        /*utworzenie linka*/
        const linkHTML = '<a href="#author-' + author + '"><span>' + author + '</span></a>';
        console.log('author', linkHTML)

        html = html + linkHTML;

        authorWrapper.innerHTML = html;
    }
}
generateAuthors();


function authorClickHandler(event) {
    event.preventDefault();

    const clickedElement = this;

    const href = clickedElement.getAttribute('href');
    console.log('aaaa', href);

    const author = href.replace('#author-', '');
    console.log('aaa', author);

    const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');

    for (let activeAuthorLink of activeAuthorLinks) {
        activeAuthorLink.classList.remove('active');
    }

    const authorLinks = document.querySelectorAll('a[href="' + href + '"]');

    for (let authorLink of authorLinks) {
        authorLink.classList.add('active');
    }
    generateTitleLinks('[data-author="' + author + '"]');
}



function addClickListenersToAuthors() {
    const authorLinks = document.querySelectorAll('a[href^="#author-"]');

    for (let author of authorLinks) {
        author.addEventListener('click', authorClickHandler)
    }
}
addClickListenersToAuthors()
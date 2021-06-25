const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'bVcb8JVIUC5a83QjlJXUfrAQLWlPULWN';
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

// let pageNumber = 0;
// console.log('PageNumber:', pageNumber);
// let displayNav = false;

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;


searchForm.addEventListener('submit',fetchResults);
nextBtn.addEventListener('click',nextPage);
previousBtn.addEventListener('click',previousPage);

// function fetchResults(e){
//     console.log (e);
//     url = 'https://api.nytimes.com/svc/search/v2/articlesearch.jsonbVcb8JVIUC5a83QjlJXUfrAQLWlPULWNkey&page=pageNumber&q=searchTerm.value';
//     console.log(url);
// };
// function nextPage(){
//     console.log("Next button clicked.");
// };

// function previousPage(){
//     console.log("Next button clicked.");
// };


function fetchResults(e){
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("url:", url);

    if(startDate.value !== ''){
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };                                         //form validation (optional?)
    if(endDate.value !== ''){
        url += '&end_date=' + endDate.value;
    };
    fetch(url)
    .then (function(result){
        return result.json();
    }).then(function(json){
        displayResults(json);
    });
}    
//We make the  request.
// We pass in the NYT .
// We create a promise  that returns a response object called .
// The promise asynchronously returns a function that converts the result into usable  format -  is that function call.
// We create a second promise that has a function that takes in the  object.
// We log the  object for now.




function displayResults(json) {
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if (articles.length >=10){
        nav.style.display = 'block';
    } else{
        nav.style.display = 'none';
    }
    
    if (articles.length === 0){
        console.log("No Results");
    }else{
        for(let i = 0; i < articles.length; i++){
            let article= document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
                                                            
            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'keywords:';
            for (let j=0; j < current.keywords.length; j++){
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + '';
                para.appendChild(span);
            }

            if (current.multimedia.length > 0){
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class','clearfix');
            

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function previousPage(e){
    if(pageNumber > 0){
        pageNumber--;
    } else{
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
};

function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log("Page Number:", pageNumber);
};








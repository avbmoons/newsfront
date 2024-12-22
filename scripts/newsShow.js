let data = news;
let dataLength = data.length;

let newsId = new URLSearchParams(window.location.search).get('id');

let pageTitleText;
//let pageCategoty;

let newsSourceText;
let newsCategotyText;
let newsAuthorText;
let newsCreatedAtText;
let newsTitleText;
let newsDescriptionText;
let newsImageLink;

for (let i = 0; i < dataLength; i++) {
  let newsShow; // category;
  if (data[i].id == newsId) {
    //category = data[i];
    newsShow = data[i];

    pageTitleText = data[i].title;
    //pageCategoty = category.slug;
    //console.log(pageCategoty);
    newsSourceText = data[i].source_id;
    newsCategotyText = data[i].category_id;
    newsAuthorText = data[i].author;
    newsCreatedAtText = data[i].created_at;
    newsTitleText = data[i].title;
    newsDescriptionText = data[i].description;
    newsImageLink = data[i].image;
  } else {
    console.log('No news');
  }
}

let pageTitle = document.getElementById('pageTitle');
pageTitle.textContent = pageTitleText;

let newsSource = document.getElementById('newsSource');
newsSource.textContent = newsSourceText;

let newsCategory = document.getElementById('newsCategory');
newsCategory.textContent = newsCategotyText;

let newsAuthor = document.getElementById('newsAuthor');
newsAuthor.textContent = newsAuthorText;

let newsCreatedAt = document.getElementById('newsCreatedAt');
newsCreatedAt.textContent = newsCreatedAtText;

// let newsTitle = document.getElementById('newsTitle');
// newsTitle.textContent = newsTitleText;

let newsDescription = document.getElementById('newsDescription');
newsDescription.textContent = newsDescriptionText;
//console.log(newsDescription);

//let newsImage = document.getElementsByClassName('news-image-float');
//let newsImage = document.getElementById('newsImage');
//let newsImage = newsDescription.querySelector('#newsImage');
let newsImage = document.createElement('img');
newsImage.className = 'news-image-float';
newsImage.id = 'newsImage';
newsImage.src = newsImageLink;
//newsDescription.appendChild(newsImage);
newsDescription.prepend(newsImage);

// console.log(newsImageLink);
// console.log(newsImage);

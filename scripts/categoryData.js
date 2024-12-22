let data = categories;
//console.log(data);
let dataLength = data.length;
//console.log(data.length);

let categoryId = new URLSearchParams(window.location.search).get('id');
//console.log(categoryId);

let pageTitleText;
let pageCategoty;

for (let i = 0; i < dataLength; i++) {
  let category;
  if (data[i].id == categoryId) {
    category = data[i];
    //console.log(category);
    pageTitleText = category.slug + ' ' + 'news';
    pageCategoty = category.slug;
    console.log(pageCategoty);
  } else {
    console.log('No category');
  }
}

let pageTitle = document.getElementById('pageTitle');
//let pageTitle = document.getElementsByClassName('page-title');
// console.log(pageTitle);
// console.log(pageTitleText);
pageTitle.textContent = pageTitleText;
//console.log(category);

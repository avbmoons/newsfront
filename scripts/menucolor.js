const currentUrl = window.location.href;
console.log(currentUrl);

const menuHome = document.getElementById('linkMenuHome');
const menuCategories = document.getElementById('linkMenuCategories');
const menuNews = document.getElementById('linkMenuNews');
const menuAbout = document.getElementById('linkMenuAbout');

//const isHome = currentUrl.indexOf('home');
const isCategories = currentUrl.indexOf('category');
const isNews = currentUrl.indexOf('news/');
const isAbout = currentUrl.indexOf('about');

if (isCategories > 0) {
    console.log("this page is Categories");
    menuCategories.style.color = "#c340a1";
} else if (isNews > 0) {
    console.log("this page is News");
    menuNews.style.color = "#c340a1";
} else if (isAbout > 0) {
    console.log("this page is About");
    menuAbout.style.color = "#c340a1";
} else {
    console.log("this page is Home");
    menuHome.style.color = "#c340a1";
}

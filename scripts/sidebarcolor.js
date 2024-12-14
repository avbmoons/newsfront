const currentUrl = window.location.href;
console.log(currentUrl);

const menuStart = document.getElementById('btnMenuStart');
const menuHome = document.getElementById('btnMenuHome');
const menuCategories = document.getElementById('btnMenuCategories');
const menuNews = document.getElementById('btnMenuNews');
const menuSources = document.getElementById('btnMenuSources');
const menuAbout = document.getElementById('btnMenuAbout');
const menuUsers = document.getElementById('btnMenuUsers');
const menuMessages = document.getElementById('btnMenuMessages');
const menuExports = document.getElementById('btnMenuExports');

const iconStart = document.getElementById('iconMenuStart');
const iconStart2 = document.getElementById('iconMenuStart2');
const iconStart3 = document.getElementById('iconMenuStart3');

const iconHome = document.getElementById('iconMenuHome');
const iconHome2 = document.getElementById('iconMenuHome2');

const iconCategories = document.getElementById('iconMenuCategories');

const iconNews = document.getElementById('iconMenuNews');
const iconNews2 = document.getElementById('iconMenuNews2');

const iconSources = document.getElementById('iconMenuSources');

const iconAbout = document.getElementById('iconMenuAbout');
const iconAbout2 = document.getElementById('iconMenuAbout2');
const iconAbout3 = document.getElementById('iconMenuAbout3');

const iconUsers = document.getElementById('iconMenuUsers');
const iconUsers2 = document.getElementById('iconMenuUsers2');
const iconUsers3 = document.getElementById('iconMenuUsers3');

const iconMessages = document.getElementById('iconMenuMessages');

const iconExports = document.getElementById('iconMenuExports');
const iconExports2 = document.getElementById('iconMenuExports2');

const isStart = currentUrl.indexOf('admin/index');
const isHome = currentUrl.indexOf('home');
const isCategories = currentUrl.indexOf('categories');
const isNews = currentUrl.indexOf('news/');
const isSources = currentUrl.indexOf('sources');
const isAbout = currentUrl.indexOf('about');
const isUsers = currentUrl.indexOf('users');
const isMessages = currentUrl.indexOf('mails');
const isExports = currentUrl.indexOf('orders');


if (isHome > 0) {
    console.log("this page is Home");
    menuHome.style.color = "#c340a1";
    iconHome.style.stroke = "#c340a1";
    iconHome2.style.stroke = "#c340a1";   

} else if (isCategories > 0) {
    console.log("this page is Categories");
    menuCategories.style.color = "#c340a1";
    iconCategories.style.fill = "#c340a1";
} else if (isNews > 0) {
    console.log("this page is News");
    menuNews.style.color = "#c340a1";
    iconNews.style.stroke = "#c340a1";
    iconNews2.style.stroke = "#c340a1";
} else if (isSources > 0) {
    console.log("this page is Sources");
    menuSources.style.color = "#c340a1";
    iconSources.style.fill = "#c340a1";
} else if (isAbout > 0) {
    console.log("this page is About");
    menuAbout.style.color = "#c340a1";
    iconAbout.style.stroke = "#c340a1";
    iconAbout2.style.stroke = "#c340a1";
    iconAbout3.style.stroke = "#c340a1";
} else if (isUsers > 0) {
    console.log("this page is Users");
    menuUsers.style.color = "#c340a1";
    iconUsers.style.stroke = "#c340a1";
    iconUsers2.style.stroke = "#c340a1";
    iconUsers3.style.stroke = "#c340a1";
} else if (isMessages > 0) {
    console.log("this page is Messages");
    menuMessages.style.color = "#c340a1";
    iconMessages.style.fill = "#c340a1";
} else if (isExports > 0) {
    console.log("this page is Exports");
    menuExports.style.color = "#c340a1";
    iconExports.style.fill = "#c340a1";
    iconExports2.style.fill = "#c340a1";
} else {
    console.log("this page is Start");
    menuStart.style.color = "#c340a1";
    iconStart.style.stroke = "#c340a1";
    iconStart2.style.stroke = "#c340a1";
    iconStart3.style.stroke = "#c340a1";
}



let timeNews = document.getElementsByClassName('news-created-at');
let timeLength = timeNews.length;

let options = {
    dateStyle: "short",
    timeStyle: "short",
};


for (let i = 0; i < timeLength; i++) {
    const dateNews = new Date(timeNews[i].innerHTML);
    const dateTimeNews = new Intl.DateTimeFormat("ru", options).format(dateNews);
    //console.log(dateTimeNews);
    timeNews[i].innerHTML = dateTimeNews;
}


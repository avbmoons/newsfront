let data = news;

//console.log(data);
let arrNews = document.querySelectorAll('.news-link');

arrNews.forEach((arrNews) => {
  //console.log(arrNews.id);
  let el = arrNews.id;
  let numEl = parseInt(el.match(/\d+/));
  //console.log(numEl);
  arrNews.href = 'views/news/show.html?id=' + numEl;
  //console.log(arrNews.href);
});

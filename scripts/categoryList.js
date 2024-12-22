let data = categories;
let dataLength = data.length;

let categoryId = new URLSearchParams(window.location.search).get('id');

let pageTitleText;
let pageCategoty;

for (let i = 0; i < dataLength; i++) {
  let category;
  if (data[i].id == categoryId) {
    category = data[i];
    pageTitleText = category.slug + ' ' + 'news';
    pageCategoty = category.slug;
    console.log(pageCategoty);
  } else {
    console.log('No category');
  }
}

let pageTitle = document.getElementById('pageTitle');

pageTitle.textContent = pageTitleText;

class NewsItem {
  constructor(
    id,
    title,
    description,
    author,
    sstatus,
    created_at,
    updated_at,
    source_id,
    category_id,
    image
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.sstatus = sstatus;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.source_id = source_id;
    this.category_id = category_id;
    this.image = image;
  }
  render() {
    return `<div class="news-item" id="news-${this.id}">
      <div class="news-info">
        <p class="news-category" id="newscategory${this.id}">
          ${this.category_id}
        </p>
        <a href="./show.html?id=" ><p class="news-title">${this.title}</p></a>
        <p class="news-description">${this.description}</p>
        <p class="news-source">${this.source_id}</p>
        <p class="news-created-at">${this.created_at}</p>
      </div>
      <div class="news-image">
        <img src="${this.image}" alt="photo"/>
      </div>
    </div>`;
  }
}

class NewsList {
  constructor() {
    this.nnews = [];
    this.ccategories = [];
  }
  fetchNews() {
    this.nnews = news.filter((news) => news.category_id.includes(pageCategoty));
    this.ccategories = categories;
  }
  render() {
    let listHtml = '';
    this.nnews.forEach((nnews) => {
      const newsItem = new NewsItem(
        nnews.id,
        nnews.title,
        nnews.description,
        nnews.author,
        nnews.sstatus,
        nnews.created_at,
        nnews.updated_at,
        nnews.source_id,
        nnews.category_id,
        nnews.image
      );
      listHtml += newsItem.render();
    });
    document.querySelector('.news-items').innerHTML = listHtml;
  }
}

const list = new NewsList();
list.fetchNews();
list.render();

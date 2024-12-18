class NewsItemMax {
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
    return `<div class="news-item max" id="news-${this.id}">
    <div class="news-image">
      <img src="${this.image}" alt="photo" />
    </div>
    <div class="news-info">
      <p class="news-category" id="newscategory${this.id}">
        ${this.category_id}</p>
      <p class="news-title">${this.title}</p>
      <p class="news-description">${this.description}</p>
      <div class="news-sources">
        <p class="news-source">${this.source_id}</p>
        <p class="news-created-at">${this.created_at}</p>
      </div>
    </div>
  </div>`;
  }
}

class NewsItemMin {
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
    return `<div class="news-item min" id="news-${this.id}">
      <div class="news-image">
        <img src="${this.image}" alt="photo" />
      </div>
      <div class="news-info">
        <p class="news-category" id="newscategory${this.id}">
          ${this.category_id}</p>
        <p class="news-title">${this.title}</p>
        <p class="news-description">${this.description}</p>
        <div class="news-sources">
          <p class="news-source">${this.source_id}</p>
          <p class="news-created-at">${this.created_at}</p>
        </div>
      </div>
    </div>`;
  }
}

class NewsList {
  constructor() {
    this.nnews = [];
    //this.nnews5 = this.nnews.slice(start, end);
  }
  //   fetchNews() {
  //     this.nnews = news;
  //     //this.nnews5 = this.nnews.slice(start, end);

  //     // console.log(this.nnews);
  //     // console.log(this.nnews5);
  //   }

  fetchNews(start, end) {
    this.nnews = news;
    this.nnews5 = this.nnews.slice(start, end);

    // console.log(this.nnews);
    // console.log(this.nnews5);
  }
  render(start, end) {
    let listHtml = '';
    let newsItemMax = this.nnews5[start];
    let listHtml0 = '';
    //console.log(newsItemMax);

    newsItemMax = new NewsItemMax(
      this.nnews5[start].id,
      this.nnews5[start].title,
      this.nnews5[start].description,
      this.nnews5[start].author,
      this.nnews5[start].sstatus,
      this.nnews5[start].created_at,
      this.nnews5[start].updated_at,
      this.nnews5[start].source_id,
      this.nnews5[start].category_id,
      this.nnews5[start].image.replace('../../', '')
    );
    listHtml0 = newsItemMax.render();
    for (let i = 0; i < 5; i++) {
      const newsItemMin = new NewsItemMin(
        this.nnews5[i].id,
        this.nnews5[i].title,
        this.nnews5[i].description,
        this.nnews5[i].author,
        this.nnews5[i].sstatus,
        this.nnews5[i].created_at,
        this.nnews5[i].updated_at,
        this.nnews5[i].source_id,
        this.nnews5[i].category_id,
        this.nnews5[i].image.replace('../../', '')
      );
      listHtml += newsItemMin.render();
    }

    // let newsBlock = document.querySelector('.news-block');
    // let newsItemsBlock = document.createElement('div');
    // newsItemsBlock.className = 'news-items';
    // //newsItemsBlock.id = 'newsItems-1';
    // newsBlock.appendChild(newsItemsBlock);

    document.querySelector('.news-items').innerHTML = listHtml0 + listHtml;
  }
}

function otherFive(start, end) {
  let newsBlock = document.querySelector('.news-block');
  let moreFive = document.createElement('div');
  moreFive.className = 'news-items';
  newsBlock.appendChild(moreFive);

  const list = new NewsList();
  list.fetchNews(start, end);
  list.render(start, end);
}

let start = 0;
let end = 5;

const list = new NewsList();
list.fetchNews(start, end);
list.render(start, end);

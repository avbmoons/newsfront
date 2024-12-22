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
        ${this.category_id}
      </p>
      <a href="views/news/show.html?id=" class="news-link" id="news${this.id}><p class="news-title">${this.title}</p></a>
      <p class="news-description">
        ${this.description}
      </p>
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
          ${this.category_id}
        </p>
        <a href="views/news/show.html?id=" class="news-link" id="news${this.id}><p class="news-title">${this.title}</p></a>
        <p class="news-description">
          ${this.description}
        </p>
        <div class="news-sources">
          <p class="news-source">${this.source_id}</p>
          <p class="news-created-at">${this.created_at}</p>
        </div>
      </div>
    </div>`;
  }
}

class NewsList {
  constructor(itemsId) {
    this.nnews = [];
    this.nnews5 = this.nnews.slice(start, end);
    this.nnews5.id = itemsId;
  }

  fetchNews(start, end) {
    this.nnews = news;
    this.nnews5 = this.nnews.slice(start, end);
  }

  render(start, end) {
    let listHtml = '';
    let newsItemMax = this.nnews5[start];
    let listHtml0 = '';
    let indexMax;

    if (itemsId == 1) {
      indexMax = 0;
    } else {
      indexMax = itemsId - start;
    }

    newsItemMax = new NewsItemMax(
      this.nnews5[indexMax].id,
      this.nnews5[indexMax].title,
      this.nnews5[indexMax].description,
      this.nnews5[indexMax].author,
      this.nnews5[indexMax].sstatus,
      this.nnews5[indexMax].created_at,
      this.nnews5[indexMax].updated_at,
      this.nnews5[indexMax].source_id,
      this.nnews5[indexMax].category_id,
      this.nnews5[indexMax].image.replace('../../', '')
    );
    listHtml0 = newsItemMax.render();

    for (let i = 1; i < 5; i++) {
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

    let newsBlock = document.querySelector('.news-block');
    let newsItems = document.createElement('div');
    newsItems.className = 'news-items';
    newsItems.id = itemsId;
    newsBlock.appendChild(newsItems);

    newsItems.innerHTML = listHtml0 + listHtml;

    // let start = start + 1;
    // let end = end + 1;
    // let itemsId = itemsId + 1;

    // let btnBlock = document.querySelector('.btn-block');
    // let btnMore = document.createElement('button');
    // btnMore.className = 'btn-more';
    // btnMore.textContent = 'See other five...';
    // btnMore.onclick = otherFive;
    // btnBlock.appendChild(btnMore);

    //document.querySelector('.news-items').innerHTML = listHtml0 + listHtml;
  }
}

let arrItems = document.querySelectorAll('.news-items');
let lastItemsIndex = arrItems.length - 1;
let lastItems = arrItems[lastItemsIndex];

let start;
let end;
let itemsId;

if (lastItemsIndex < 0) {
  start = 0;
  end = 5;
  itemsId = 1;
} else {
  start = start + 5;
  end = end + 5;
  itemsId = itemsId + 1;
}

const list = new NewsList(itemsId);
list.fetchNews(start, end);
list.render(start, end);

arrItems = document.querySelectorAll('.news-items');
lastItemsIndex = arrItems.length - 1;
lastItems = arrItems[lastItemsIndex];
console.log(lastItems);
console.log(arrItems, 'lastItemsIndex=' + ' ' + lastItemsIndex);

function otherFive(start, end, itemsId) {
  let newsBlock = document.querySelector('.news-block');

  const list = new NewsList(itemsId);

  let moreFive = document.querySelector('.news-items');
  moreFive.id = itemsId;

  list.fetchNews(start, end);
  list.render(start, end);

  arrItems = document.querySelectorAll('.news-items');
  lastItemsIndex = arrItems.length - 1;
  console.log(arrItems, 'lastItemsIndex=' + ' ' + lastItemsIndex);
  let lastItemsId = lastItems.getAttribute('id');
  console.log('lastItemsId' + ' ' + lastItemsId);
  itemsId = lastItemsId;

  //   let btnBlock = document.querySelector('.btn-block');
  //   let btnMore = document.createElement('button');
  //   btnMore.className = 'btn-more';
  //   btnMore.textContent = 'See other five...';
  //   btnMore.onclick = otherFive;
  //   btnBlock.appendChild(btnMore);
}

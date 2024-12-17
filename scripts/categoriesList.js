class CategoryItem {
  constructor(
    id,
    title,
    slug,
    description,
    created_at,
    updated_at,
    sstatus,
    image
  ) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.sstatus = sstatus;
    this.image = image;
  }
  render() {
    return `<div class="category-item" data-id=${this.id}>
    <a href="#" class="category-link" id="category-${this.id}><img src="${this.image}" alt=""></a>
    <p class="category-title">${this.slug}</p>
  </div>`;
  }
}

class CategoriesList {
  constructor() {
    this.ccategories = [];
  }
  fetchCategories() {
    this.ccategories = categories;
    console.log(categories);
  }
  render() {
    let listHtml = "";
    this.ccategories.forEach((ccategories) => {
      const categoryItem = new CategoryItem(
        ccategories.id,
        ccategories.title,
        ccategories.slug,
        ccategories.description,
        ccategories.created_at,
        ccategories.updated_at,
        ccategories.sstatus,
        ccategories.image
      );
      listHtml += categoryItem.render();
    });
    document.querySelector(".categories-items").innerHTML = listHtml;
  }
}

const list = new CategoriesList();
list.fetchCategories();
list.render();

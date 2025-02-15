let data8 = categories;

// console.log(currentUrl);
// console.log(isAbout);
//console.log(data8);
let arrCategory = document.querySelectorAll('.category-item');
//console.log(arrCategory);

arrCategory.forEach((arrCategory) => {
  //console.log(arrCategory.id);
  let el = arrCategory.id;
  let numEl = parseInt(el.match(/\d+/));
  //console.log(numEl);

if (isCategories > 0) {
  arrCategory.href = './show.html?id=' + numEl;
} else if (isAbout > 0) {
  arrCategory.href = './category/show.html?id=' + numEl;
} else if (isNews > 0 || isMail > 0 || isOrder > 0) {
  arrCategory.href = '../category/show.html?id=' + numEl;
} else {
  arrCategory.href = './views/category/show.html?id=' + numEl;
}

  //arrCategory.href = './category/show.html?id=' + numEl;
  //console.log(arrCategory.href);
});

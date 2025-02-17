let data8 = categories;

// console.log(currentUrl);
// console.log(isAbout);
//console.log(data8);
let arrCategory2 = document.querySelectorAll('.category-item');
//console.log(arrCategory2);

arrCategory2.forEach((arrCategory2) => {
  //console.log(arrCategory.id);
  let el2 = arrCategory2.id;
  let numEl2 = parseInt(el2.match(/\d+/));
  //console.log(numEl);

if (isCategories > 0) {
  arrCategory2.href = './show.html?id=' + numEl2;
} else if (isAbout > 0) {
  arrCategory2.href = './category/show.html?id=' + numEl2;
} else if (isNews > 0 || isMail > 0 || isOrder > 0) {
  arrCategory2.href = '../category/show.html?id=' + numEl2;
} else {
  arrCategory2.href = './views/category/show.html?id=' + numEl2;
}

  //arrCategory.href = './category/show.html?id=' + numEl;
  //console.log(arrCategory.href);
});

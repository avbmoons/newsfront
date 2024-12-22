let data = categories;

//console.log(data);
let arrCategory = document.querySelectorAll('.category-link');

arrCategory.forEach((arrCategory) => {
  //console.log(arrCategory.id);
  let el = arrCategory.id;
  let numEl = parseInt(el.match(/\d+/));
  //console.log(numEl);
  arrCategory.href = './show.html?id=' + numEl;
  //console.log(arrCategory.href);
});
